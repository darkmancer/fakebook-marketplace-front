import { makeStyles } from "@material-ui/core/styles";
export const modalStyle = {
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
};
export const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 750,
    height: "100%",
    backgroundColor: "#242526",
    border: "1px solid grey",
    borderRadius: 5,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
  },
  multilineColor: {
    color: "white",
  },
  margin: {
    margin: theme.spacing(1),
  },
  large: {
    margin: theme.spacing(1),
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  dividerLine: {
    backgroundColor: "#373A3B",
    width: 400,
  },
  buttonList: {
    display: "flex",
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#373A3B",
    color: "white",
  },
  closeButton: {
    display: "flex",
  },
}));
