function success(pos) {
  const crd = pos.coords;
  const div = document.getElementById('text');
  const innerDiv = document.createElement('div')



  innerDiv.innerHTML = `
  <p>Your current position is:</p>
  <p>Latitude : ${crd.latitude}</p>
  <p>Longitude: ${crd.longitude}</p>
  <p>More or less ${crd.accuracy} meters.</p>
  `
  div.appendChild(innerDiv)
}

navigator.geolocation.watchPosition(success)
