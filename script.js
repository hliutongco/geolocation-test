let latArray = []
let longArray = []

function success(pos) {
  const crd = pos.coords;
  const div = document.getElementById('text');
  const innerDiv = document.createElement('div')
  latArray.push(crd.latitude)
  longArray.push(crd.longitude)

  const sortedLat = latArray.sort()
  const sortedLong = longArray.sort()


  innerDiv.innerHTML = `
  <p>Max Latitude: ${latArray[0]}</p>
  <p>Min Latitude : ${latArray[-1]}</p>
  <p>Max Longitude: ${longArray[1]}</p>
  <p>Min Longitude: ${longArray[-1]}</p>
  `
}
  div.appendChild(innerDiv)
}

navigator.geolocation.watchPosition(success)
