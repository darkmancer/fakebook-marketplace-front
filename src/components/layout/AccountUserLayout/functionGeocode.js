import Geocode from "react-geocode";
export function getCurrentLocation() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      resolve(pos.coords.latitude + "," + pos.coords.longitude);
    });
  });
}

export function locationName(loca) {
  Geocode.setApiKey("AIzaSyAHQuKM8CJILEMZStXdXMO1RtJebhhoIJ8");
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();

  let name;

  const lat = loca.split(",")[0];
  const long = loca.split(",")[1];
  console.log(lat, long);
  Geocode.fromLatLng(lat, long).then(
    (response) => {
      console.log(response);
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
