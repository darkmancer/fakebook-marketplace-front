import Geocode from 'react-geocode'
export function getCurrentLatLng() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      resolve(pos.coords.latitude + ',' + pos.coords.longitude)
    })
  })
}

export function getAddress(loca) {
  Geocode.setApiKey('AIzaSyAHOttMHQnlazEIg8Smr9x9YNJWku71Hs0')
  Geocode.setLanguage('en')
  Geocode.setLocationType('ROOFTOP')
  Geocode.enableDebug()

  const lat = loca.split(',')[0]
  const long = loca.split(',')[1]

  return new Promise((resolve) => {
    Geocode.fromLatLng(lat, long).then(
      (response) => {
        resolve(
          response.plus_code.compound_code
            .split(' ')
            .slice(1)
            .join(' ')
            .split(', ')
            .slice(-2)
            .join(', ')
        )
      },
      (error) => {
        console.error(error)
      }
    )
  })
}

export function getLatLng(address) {
  Geocode.setApiKey('AIzaSyAHOttMHQnlazEIg8Smr9x9YNJWku71Hs0')
  Geocode.setLanguage('en')
  Geocode.setLocationType('ROOFTOP')
  Geocode.enableDebug()

  return new Promise((resolve) => {
    Geocode.fromAddress(address).then(
      (response) => {
        resolve(
          [
            response.results[0].geometry.location.lat,
            response.results[0].geometry.location.lng
          ].join(',')
        )
      },
      (error) => {
        console.error(error)
      }
    )
  })
}

export function calcDistance(myLocation, yourLocation) {
  const a = Number(myLocation.split(',')[0])
  const b = Number(myLocation.split(',')[1])
  const x = Number(yourLocation.split(',')[0])
  const y = Number(yourLocation.split(',')[1])

  const distance = Math.ceil(
    Math.sqrt(((x - a) * 111.139) ** 2 + ((y - b) * 111.139) ** 2)
  )
  return +distance
}
