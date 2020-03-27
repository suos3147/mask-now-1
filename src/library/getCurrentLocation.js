const geoOptions = {
  enableHighAccuracy: false,
  maximumAge: 0,
  timeout: Infinity,
}

const getCurrentLocation = () => {
  const geo = navigator.geolocation
  let location = {}

  if (!geo) {
    alert('❌ GPS를 지원하지 않습니다. 검색창에 직접 위치를 입력해주세요.')
    return
  }

  geo.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => (location = { latitude, longitude }),
    error => alert('❌ 현재 위치를 가져올 수 없습니다. 검색창에 직접 위치를 입력해주세요.'),
    geoOptions,
  )

  return location
}

export default getCurrentLocation
