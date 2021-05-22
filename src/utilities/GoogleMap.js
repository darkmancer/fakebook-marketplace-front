import React from 'react'
import ReactDOM from 'react-dom'
import { compose, withProps } from 'recompose'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'
import { GeocodeContext } from '../context/GeocodeContextProvider'

const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAHOttMHQnlazEIg8Smr9x9YNJWku71Hs0&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{
      lat: +props.geocode.split(',')[0],
      lng: +props.geocode.split(',')[1]
    }}
  >
    {props.isMarkerShown && (
      <Marker
        position={{
          lat: +props.geocode.split(',')[0],
          lng: +props.geocode.split(',')[1]
        }}
      />
    )}
  </GoogleMap>
))

export default MyMapComponent