let currentLat = 0
let currentLong = 0

function success(pos) {
  const crd = pos.coords;
  const div = document.getElementById('text');
  const innerDiv = document.createElement('div')
  const latCondition = crd.latitude === currentLat
  const longCondition = crd.longitude === currentLong
  const totalCondition = latCondition && longCondition
  // console.log(totalCondition);
  if(currentLat || currentLong){
    // if(!totalCondition){
      currentLat = crd.latitude
      currentLong = crd.longitude
      innerDiv.innerHTML = `
      <p>Your current position is:</p>
      <p>Latitude : ${crd.latitude}</p>
      <p>Longitude: ${crd.longitude}</p>
      <p>More or less ${crd.accuracy} meters.</p>
      `
  // }
}
  div.appendChild(innerDiv)
}

navigator.geolocation.watchPosition(success)
