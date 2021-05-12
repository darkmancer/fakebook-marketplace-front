import ProductVehicle from "../layout/Categories/Vehicles/ProductVehicle";
import VehicleDetail from "../layout/Categories/Vehicles/VehicleDetail";
import Header from "../layout/Header";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#18191a",
  },
  content: {
    [theme.breakpoints.up("sm")]: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      width: 410,
      flexShrink: 0,
      padding: theme.spacing(1),
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: 410,
      flexShrink: 0,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${400}px)`,
    },
  },
}));

function SelectVehiclePage() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Header className={classes.appBar} position="fixed" />

        <main className={classes.content}>
          <ProductVehicle />
        </main>

        <nav className={classes.drawer}>
          <VehicleDetail />
        </nav>
      </div>
    </>
  );
}
export default SelectVehiclePage;
