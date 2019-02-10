let currentLat = 0
let currentLong = 0

function success(pos) {
  const crd = pos.coords;
  const div = document.getElementById('text');
  const innerDiv = document.createElement('div')
  const latCondition = Math.round(crd.latitude) === Math.round(currentLat)
  const longCondition = Math.round(crd.longitude) === Math.round(currentLong)
  const totalCondition = latCondition && longCondition

  if(!currentLat || !currentLong){
    if(!totalCondition){
      innerDiv.innerHTML = `
      <p>Your current position is:</p>
      <p>Latitude : ${crd.latitude}</p>
      <p>Longitude: ${crd.longitude}</p>
      <p>More or less ${crd.accuracy} meters.</p>
      `
  }
}
  div.appendChild(innerDiv)
}

navigator.geolocation.watchPosition(success)
