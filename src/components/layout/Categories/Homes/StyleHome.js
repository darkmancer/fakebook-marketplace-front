import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 300,
    borderRadius: 5,
    margin: theme.spacing(1),
  },
  containerText: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(8),
  },
  text: {
    color: "white",
  },
}));
