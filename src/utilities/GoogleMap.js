import React, { useContext } from 'react'
import GoogleMapReact from 'google-map-react'
import { GeocodeContext } from '../context/GeocodeContextProvider'
// import Marker from './Marker'
//import Json Data
// import data from './data.json'

const GoogleMaps = ({ latitude, longitude }) => {
  const { geocode, setGeocode, setRadius, radius, address, setAddress } =
    useContext(GeocodeContext)
  // const ModelsMap = (map, maps) => {
  // let marker = new maps.Marker({

  // })
  // }
  //instantiate array that will hold your Json Data
  // let dataArray = []
  //push your Json Data in the array
  // {
  //   data.map((markerJson) => dataArray.push(markerJson))
  // }

  //Loop through the dataArray to create a marker per data using the coordinates in the json
  //   for (let i = 0; i < dataArray.length; i++) {
  //     let marker = new maps.Marker({
  //       position: { lat: dataArray[i].lat, lng: dataArray[i].lng },
  //       map,
  //       label: dataArray[i].id
  //     })
  //   }
  // }

  const latLng = geocode.split(',')
  const latDefault = latLng[0]
  const lngDefault = latLng[1]
  // console.log(latLng)
  // let marker = new maps.Marker({
  //   position: { lat: latDefault, lng: lngDefault },
  //   map
  // })

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAHOttMHQnlazEIg8Smr9x9YNJWku71Hs0' }}
        defaultCenter={{ lat: +latDefault, lng: +lngDefault }}
        defaultZoom={13}
        yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={({ map, maps }) => ModelsMap(map, maps)}
      ></GoogleMapReact>
    </div>
  )
}

export default GoogleMaps
