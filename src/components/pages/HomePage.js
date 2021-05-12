import {useEffect} from "react";
import SideBar from "../layout/SideBar";
import Content from "../layout/Content";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import Geocode from "react-geocode";
import {locationName} from "../../utilities/geocode"
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#18191a",
    //backgroundColor: "#18191a",

    // flexGrow: 1,
    // height: 100,
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: "center",
  //   backgroundColor: "black",
  //   height: 100,
  // },
}));
function getCurrentLocation() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((pos) => {
      resolve(pos.coords.latitude + "," + pos.coords.longitude);
    });
  });
}
function HomePage() {
  const classes = useStyles();
  useEffect(() => {
    async function getLocation() {
      const currentLocation = await getCurrentLocation();
      console.log(locationName(currentLocation));
    }
    getLocation();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2}>
          <SideBar />
        </Grid>

        <Grid item xs={10}>
          <Content />
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
