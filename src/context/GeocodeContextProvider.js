import { createContext } from 'react'
import { useState, useEffect } from 'react'
import { getCurrentLatLng, getAddress } from '../utilities/Geocode'

export const GeocodeContext = createContext()

function GeocodeContextProvider({ children }) {
  //  const [state, dispatch] = useReducer(reducer, initialState, init)

  const [geocode, setGeocode] = useState('')
  const [radius, setRadius] = useState(60)
  const [address, setAddress] = useState('')

  useEffect(() => {
    async function getLocation() {
      const currentLatLng = await getCurrentLatLng()
  
      setGeocode(currentLatLng)
      const currentAddress = await getAddress(currentLatLng)
      setAddress(currentAddress)
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
