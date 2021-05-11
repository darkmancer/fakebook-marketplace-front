import { makeStyles } from "@material-ui/core/styles";

export const useStylesProductDetail = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: "white",
  },
  drawerPaper: {
    width: 400,
    backgroundColor: "#242526",
    color: "white",
    borderColor: "gray",
    right: 0,
    left: "auto",
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
  button: {
    margin: theme.spacing(1),
  },
  buttonList: {
    display: "flex",
  },
  buttonSave: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
}));
