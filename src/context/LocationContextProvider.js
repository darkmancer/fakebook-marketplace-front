import React, { createContext, useEffect, useState } from "react";
import Geocode from "react-geocode";
export const LocationContext = createContext();
function LocationContextProvider({ children }) {
  const [currLocation, setCurrLocation] = useState();
  return (
    <LocationContext.Provider
      value={{ currLocation, setCurrLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export default LocationContextProvider;
