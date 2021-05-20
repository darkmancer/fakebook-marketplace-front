import Geocode from 'react-geocode'
export function getCurrentLocation() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      resolve(pos.coords.latitude + ',' + pos.coords.longitude)
    })
  })
}

export function locationName(loca) {
  Geocode.setApiKey('AIzaSyAHQuKM8CJILEMZStXdXMO1RtJebhhoIJ8')
  Geocode.setLanguage('en')
  Geocode.setLocationType('ROOFTOP')
  Geocode.enableDebug()

  let name

  const lat = loca.split(',')[0]
  const long = loca.split(',')[1]
  console.log(lat, long)
  Geocode.fromLatLng(lat, long).then(
    (response) => {
      console.log(response)
      name = response.plus_code.compound_code.split(' ').slice(1).join(' ')
    },
    (error) => {
      console.error(error)
    }
  )
  return name
}

export function getLatLng(address) {
  Geocode.fromAddress(address).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location
      console.log(lat,lng)
      return `${lat},${lng}`
    },
    (error) => {
      console.error(error)
    }
  )
}

export function calcDistance(myLocation, yourLocation) {
    const a = +myLocation.split(",")[0];
    const b = +myLocation.split(",")[1];
    const x = +yourLocation.split(",")[0];
    const y = +yourLocation.split(",")[1];

    const distance = Math.ceil(
      Math.sqrt(((x - a) * 111.139) **2 + ((y - b) * 111.139) **2)
    );

    return distance;
  }
