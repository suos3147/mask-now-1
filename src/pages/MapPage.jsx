import React, { useCallback, useContext } from 'react'
import LocationContext from '../store/LocationContext'
import { PageTemplate } from '../components'
import { useRef, useEffect, useState } from 'react'
// Component to HTML String
import { renderToString } from 'react-dom/server'
import { Button, Input, Overlay } from '../components'
import { useCurrentLocation } from '../library'
import { fetchMask } from '../library'

const MapPage = () => {
  const [mask, setMask] = useState([])
  const [loading, setLoading] = useState(false)

  const mapRef = useRef()
  let search = useRef('')
  const positions = useRef([])

  const { kakao } = window

  const { location, changeLocation } = useContext(LocationContext)

  const currentLocation = useCurrentLocation()

  useEffect(() => {
    currentLocation && changeLocation(currentLocation)
  }, [changeLocation, currentLocation])

  // 지도 마커 생성 함수
  const setMarker = useCallback(
    ({ latitude, longitude }) => {
      //지도를 담을 영역의 DOM 레퍼런스
      const container = mapRef.current

      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      }
      //지도 생성 및 객체 리턴
      const map = new kakao.maps.Map(container, options)

      // 일반 지도/ 스카이뷰 지도 컨트롤
      const mapTypeControl = new kakao.maps.MapTypeControl()
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT)

      // 지도 확대 축소 제어 컨트롤
      const zoomControl = new kakao.maps.ZoomControl()
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)

      // 마커 설정
      positions.current.forEach(position => {
        const marker = new kakao.maps.Marker({
          map: map,
          position: position.latlng,
        })

        const overlay = new kakao.maps.CustomOverlay({
          content: position.content,
          position: position.latlng,
        })

        kakao.maps.event.addListener(marker, 'mousedown', () => {
          overlay.setMap(map)
        })

        kakao.maps.event.addListener(marker, 'mouseup', () => {
          overlay.setMap(null)
        })
      })
    },
    [
      kakao.maps.ControlPosition.RIGHT,
      kakao.maps.ControlPosition.TOPRIGHT,
      kakao.maps.CustomOverlay,
      kakao.maps.LatLng,
      kakao.maps.Map,
      kakao.maps.MapTypeControl,
      kakao.maps.Marker,
      kakao.maps.ZoomControl,
      kakao.maps.event,
    ],
  )

  const doSearch = async () => {
    const input = search.current.trim()
    if (input === '') {
      return alert('한 글자 이상 입력해 주세요!')
    } else if (input[input.length - 1] !== '구' && input[input.length - 1] !== '동') {
      return alert('구/동 단위로 입력해 주세요!')
    }

    setLoading(true)
    const response = await fetchMask({ method: 'GET', url: `/storesByAddr/json?address=${input}` })
      .then(data => data)
      .catch(err => {
        throw err
      })
    setLoading(false)

    // 약국 정보 추출
    const {
      data: { stores },
    } = response

    if (stores.length === 0) {
      return alert('검색 결과가 없습니다.')
    }

    setMask(mask => [...stores])

    positions.current = stores.map(store => ({
      content: renderToString(
        <Overlay name={store.name} addr={store.addr} remain_stat={store.remain_stat} />,
      ),
      latlng: new kakao.maps.LatLng(store.lat, store.lng),
    }))

    const firstData = stores[0]

    const newLocation = {
      latitude: firstData.lat,
      longitude: firstData.lng,
    }

    changeLocation(newLocation)

    console.log('setMarker')
    setMarker(newLocation)
  }

  const getInputValue = e => {
    search.current = e.target.value
  }

  const getMask = useCallback(async () => {
    setLoading(true)
    const response = await fetchMask({
      method: 'GET',
      url: `/storesByGeo/json?lat=${location.latitude}&lng=${location.longitude}&m=1000`,
    })
      .then(data => data)
      .catch(err => {
        throw err
      })
    setLoading(false)

    // 약국 정보 추출
    const {
      data: { stores },
    } = response

    if (stores) {
      setMask(mask => [...stores])

      positions.current = stores.map(store => ({
        content: renderToString(
          <Overlay name={store.name} addr={store.addr} remain_stat={store.remain_stat} />,
        ),
        latlng: new kakao.maps.LatLng(store.lat, store.lng),
      }))

      setMarker(location)
    }
  }, [kakao.maps.LatLng, location, setMarker])

  useEffect(() => {
    console.log(currentLocation)
    console.log(location)
    if (currentLocation === location) getMask()
  }, [currentLocation, getMask, location])

  return (
    <PageTemplate>
      <div>
        <Input type="text" onChange={getInputValue} placeholder="구/동 단위로 검색" />
        <Button onClick={doSearch}>검색</Button>
      </div>
      <p>1km 내에 {mask && mask.length}개의 약국이 있습니다.</p>
      {loading && <div>로딩중입니다.</div>}
      {!loading && <div ref={mapRef} style={{ width: '500px', height: '400px' }}></div>}
    </PageTemplate>
  )
}

export default MapPage
