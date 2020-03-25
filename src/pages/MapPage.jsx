import React, { useCallback } from 'react'
import { PageTemplate } from '../components'
import { useRef, useEffect, useState } from 'react'
// Component to HTML String
import { renderToString } from 'react-dom/server'
import axios from 'axios'
import Overlay from '../components/Overlay'
import Button from '../components/Button'
import Input from '../components/Input'

const MapPage = () => {
  const [mask, setMask] = useState([])
  const mapRef = useRef()
  let search = useRef('')
  let positions = useRef([])
  const { kakao } = window
  let center = []

  const doSearch = async () => {
    const input = search.current.trim()
    if (input === '') {
      return alert('한 글자 이상 입력해 주세요!')
    } else if (input[input.length - 1] !== '구' && input[input.length - 1] !== '동') {
      return alert('구/동 단위로 입력해 주세요!')
    }

    const res = await axios({
      method: 'GET',
      url: `https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByAddr/json?address=${input}`,
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

    setMask(stores)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    positions = stores.map(store => ({
      content: renderToString(
        <Overlay name={store.name} addr={store.addr} remain_stat={store.remain_stat} />,
      ),
      latlng: new kakao.maps.LatLng(store.lat, store.lng),
    }))

    console.log(stores)
    if (stores[0]) {
      sessionStorage.setItem('lat', stores[0].lat)
      sessionStorage.setItem('lng', stores[0].lng)
      setCenter()
    }

    setMarker()
  }

  const getInputValue = e => {
    search.current = e.target.value
    console.log(search)
  }

  // 맵 center 가져오기, Geolocation API(chrome localhost, https만 가능)
  const getCenter = () => {
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        function(position) {
          sessionStorage.setItem('lat', position.coords.latitude)
          sessionStorage.setItem('lng', position.coords.longitude)
        },
        function(error) {
          console.error(error)
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        },
      )
    } else {
      alert('GPS를 지원하지 않습니다')
      console.log('Geolocation API does not work')
    }
  }

  // center 변수 설정 함수
  const setCenter = () => {
    center = [Number(sessionStorage.getItem('lat')), Number(sessionStorage.getItem('lng'))]
  }

  const getMask = useCallback(async () => {
    const res = await axios({
      method: 'GET',
      url: `https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=${center[0]}&lng=${center[1]}&m=1000`,
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
      return alert('새로고침을 해주세요')
    }

    setMask(stores)

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

  const setMarker = () => {
    //지도를 담을 영역의 DOM 레퍼런스
    const container = mapRef.current

    console.log(center)
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(center[0], center[1]), //지도의 중심좌표.
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
  }

  getCenter()
  setCenter()

  useEffect(() => {
    getMask()
  }, [])

  return (
    <PageTemplate>
      <div>
        <Input type="text" onChange={getInputValue} placeholder="구/동 단위로 검색" />
        <Button onClick={doSearch}>검색</Button>
      </div>
      <p>Map</p>
      <div ref={mapRef} style={{ width: '500px', height: '400px' }}></div>
    </PageTemplate>
  )
}

export default MapPage
