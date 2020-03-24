import React from 'react'
import { PageTemplate } from '../components'
import { useRef, useEffect, useState } from 'react'
// Component to HTML String
import { renderToString } from 'react-dom/server'
import axios from 'axios'

const MapPage = () => {
  const [mask, setMask] = useState([])
  const [page, setPage] = useState(1)
  const mapRef = useRef()
  const { kakao } = window

  const getMask = async page => {
    const res = await axios
      .get(`https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/stores/json?page=${page}`)
      .then(data => data)
      .catch(err => {
        throw err
      })
    const {
      data: { storeInfos },
    } = res

    const {
      data: { totalPages },
    } = res

    setMask(mask.concat(storeInfos))
    setPage(page < totalPages && page + 1)
  }

  useEffect(() => {
    getMask(page)
  }, [page])

  console.log(mask)

  const createMap = () => {
    //지도를 담을 영역의 DOM 레퍼런스
    const container = mapRef.current

    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.572507, 126.997299), //지도의 중심좌표.
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

    //  마커 위치 객체 배열
    let positions = []
    if (mask) {
      positions = mask.map(store => ({
        content: `${store.addr}\n${store.type}`,
        latlng: new kakao.maps.LatLng(store.lat, store.lng),
      }))
    }

    console.log(positions)
    // [
    //   {
    //     content: '<div>카카오</div>',
    //     latlng: new kakao.maps.LatLng(33.450705, 126.570677),
    //   },
    //   {
    //     content: '<div>생태연못</div>',
    //     latlng: new kakao.maps.LatLng(33.450936, 126.569477),
    //   },
    //   {
    //     content: '<div>텃밭</div>',
    //     latlng: new kakao.maps.LatLng(33.450879, 126.56994),
    //   },
    //   {
    //     content: '<div>근린공원</div>',
    //     latlng: new kakao.maps.LatLng(33.451393, 126.570738),
    //   },
    // ]

    positions.map(position => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: position.latlng,
      })

      const infowindow = new kakao.maps.InfoWindow({
        content: position.content,
      })

      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow))
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow))
    })
  }

  useEffect(() => {
    createMap()
  }, [mask])

  // windowInfo 이벤트
  const makeOverListener = (map, marker, infowindow) => {
    return () => {
      infowindow.open(map, marker)
    }
  }

  const makeOutListener = infowindow => {
    return () => infowindow.close()
  }

  return (
    <PageTemplate>
      <p>Map</p>
      <div ref={mapRef} style={{ width: '500px', height: '400px' }}></div>
    </PageTemplate>
  )
}

export default MapPage
