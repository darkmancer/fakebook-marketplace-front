import { createContext } from 'react'
import { useState, useEffect } from 'react'
import { getCurrentLocation, locationName } from '../utilities/Geocode'

export const GeocodeContext = createContext()

function GeocodeContextProvider({ children }) {
  //  const [state, dispatch] = useReducer(reducer, initialState, init)

  const [geocode, setGeocode] = useState(0)
  const [radius, setRadius] = useState(60)
  const [address, setAddress] = useState("")
  useEffect(() => {
    async function getLocation() {
      const currentLocation = await getCurrentLocation()
      console.log(currentLocation)
      setGeocode(currentLocation)
      console.log(locationName(currentLocation))
    }
    getLocation()
  }, [])

  return (
    <GeocodeContext.Provider
      value={{
        geocode,
        setGeocode,
        radius,
        setRadius,
        address,
        setAddress
      }}
    >
      {children}
    </GeocodeContext.Provider>
  )
}
export default GeocodeContextProvider
