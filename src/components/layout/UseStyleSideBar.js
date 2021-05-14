import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 360;
export const useStylesSideBar = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "white",
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
    width: 330,
    height: "5ch",
    backgroundColor: "#3A3B3C",
    borderRadius: 20,
    color: "#DCDCDC",
  },
}));
