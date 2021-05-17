import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 360;
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "white",
    padding: theme.spacing(1),
    "&:hover": {
      borderRadius: 6,
      backgroundColor: "#424242",
    },
  },
  createList: {
    margin: theme.spacing(1, 0),
    color: "#2D88FF",
    borderRadius: 6,
    backgroundColor: "#2D88FF33",
    display: "flex",
    justifyContent: "center",
    "&:hover": {
      borderRadius: 6,
      backgroundColor: "#3e5e85",
    },
  },
  drawer: {
    width: drawerWidth,
    backgroundColor: "red",
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#252426",
    color: "white",
    borderColor: "grey",
    display: "flex",
    justifyItems: "center",
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  dividerLine: {
    backgroundColor: "grey",
  },
  searchInput: {
    margin: theme.spacing(1),
    width: 330,
    height: "5ch",
    backgroundColor: "#3A3B3C",
    borderRadius: 20,
    color: "#DCDCDC",
  },
  buttonListAccount: {
    padding: theme.spacing(1),
    // width: "200",
    "&:hover": {
      borderRadius: 6,
      backgroundColor: "#424242",
    },
  },
  RadioCheck: {
    color: "#424242",
    "&.MuiRadio-colorSecondary.Mui-checked": {
      color: "#2D88FF",
    },
  },
  iconSearch: {
    color: "#DCDCDC",
    marginRight: 10,
  },
  priceMinMax: {
    display: "flex",
    justifyContent: "center",
  },
  searchPrice: {
    margin: theme.spacing(1),
    width: 100,
    height: "4ch",
    backgroundColor: "#3A3B3C",
    borderRadius: 20,
    color: "#DCDCDC",
    padding: "15px",
  },
}));
