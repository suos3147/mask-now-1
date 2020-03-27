import React, { useCallback, useContext } from 'react'
import LocationContext from '../store/LocationContext'
import { PageTemplate } from '../components'
import { useRef, useEffect, useState } from 'react'
// Component to HTML String
import { renderToString } from 'react-dom/server'
import axios from 'axios'
import { Button, Input, Overlay } from '../components'
import { MASK_URL } from '../constants'
import { useCurrentLocation } from '../library'

const MapPage = () => {
  const [mask, setMask] = useState([])
  const mapRef = useRef()
  let search = useRef('')
  let positions = useRef([])
  const { kakao } = window

  const { location, changeLocation } = useContext(LocationContext)
  const currentLocation = useCurrentLocation()
  useEffect(() => {
    currentLocation && changeLocation(currentLocation)
  })

  const doSearch = async () => {
    const input = search.current.trim()
    if (input === '') {
      return alert('한 글자 이상 입력해 주세요!')
    } else if (input[input.length - 1] !== '구' && input[input.length - 1] !== '동') {
      return alert('구/동 단위로 입력해 주세요!')
    }

    const res = await axios({
      method: 'GET',
      url: `${MASK_URL}/storesByAddr/json?address=${input}`,
    })
      .then(data => data)
      .catch(err => {
        throw err
      })

    // 약국 정보 추출
    const {
      data: { stores },
    } = res

    if (stores.length === 0) {
      return alert('검색 결과가 없습니다.')
    }

    setMask([...stores])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    positions = stores.map(store => ({
      content: renderToString(
        <Overlay name={store.name} addr={store.addr} remain_stat={store.remain_stat} />,
      ),
      latlng: new kakao.maps.LatLng(store.lat, store.lng),
    }))

    const firstData = stores[0]

    if (firstData) {
      sessionStorage.setItem('lat', firstData.lat)
      sessionStorage.setItem('lng', firstData.lng)
    }
    console.log('setMarker')
    setMarker()
  }

  const getInputValue = e => {
    search.current = e.target.value
  }

  const getMask = useCallback(async () => {
    const res = await axios({
      method: 'GET',
      url: `${MASK_URL}/storesByGeo/json?lat=${location.latitude}&lng=${location.longitude}&m=1000`,
    })
      .then(data => data)
      .catch(err => {
        throw err
      })

    if (!res) {
      return alert('새로고침을 해주세요')
    }

    // 약국 정보 추출
    const {
      data: { stores },
    } = res

    if (!stores) {
      return alert('새로고침을 해주세요')
    }
    setMask([...mask, ...stores])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    positions = stores.map(store => ({
      content: renderToString(
        <Overlay name={store.name} addr={store.addr} remain_stat={store.remain_stat} />,
      ),
      latlng: new kakao.maps.LatLng(store.lat, store.lng),
    }))
    console.log(positions)

    setMarker()
  }, [mask])

  const setMarker = useCallback(() => {
    //지도를 담을 영역의 DOM 레퍼런스
    const container = mapRef.current

    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(location.latitude, location.longitude), //지도의 중심좌표.
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
    positions.forEach(position => {
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
  })

  useEffect(() => {
    getMask()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageTemplate>
      <div>
        <Input type="text" onChange={getInputValue} placeholder="구/동 단위로 검색" />
        <Button onClick={doSearch}>검색</Button>
      </div>
      <p>1km 내에 {mask && mask.length}개의 약국이 있습니다.</p>
      <div ref={mapRef} style={{ width: '500px', height: '400px' }}></div>
    </PageTemplate>
  )
}

export default MapPage
