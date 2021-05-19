import Geocode from "react-geocode";
// import { useContext } from "react";
// import { LocationContext } from "../../../context/LocationContextProvider";
import React from "react";

export function getCurrentLocation() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      resolve(pos.coords.latitude + "," + pos.coords.longitude);
    });
  });
}

export function LocationName(loca) {
  Geocode.setApiKey("AIzaSyAHQuKM8CJILEMZStXdXMO1RtJebhhoIJ8");
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();

  let name;

  const lat = loca.split(",")[0];
  const long = loca.split(",")[1];
  console.log(lat, long);
  localStorage.setItem("CurLocation", `${lat},${long}`);

  Geocode.fromLatLng(lat, long).then(
    (response) => {
      // console.log(response.results[0]);
      const { formatted_address } = response.results[0];
      localStorage.setItem("Address", formatted_address);
      name = response.plus_code.compound_code
        .split(" ")
        .slice(1)
        .join(" ");
    },
    (error) => {
      console.error(error);
    }
  );

  return name;
}
