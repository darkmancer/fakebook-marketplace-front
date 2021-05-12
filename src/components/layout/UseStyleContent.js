import { makeStyles } from "@material-ui/core/styles";
export const useStylesContent = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 300,
    borderRadius: 5,
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
