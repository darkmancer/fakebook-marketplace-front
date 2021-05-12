import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(97, 95, 95)",
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
    width: "25ch",
    backgroundColor: "#3A3B3C",
    borderRadius: 20,
    color: "white",
  },
}));
