// 현재 위치를 sessionStorage에 저장하는 함수

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

export default getCenter
