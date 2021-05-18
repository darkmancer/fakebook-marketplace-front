import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "40ch",
    height: "36ch",
  },
  buttonRegister: {
    margin: theme.spacing(4),
    padding: theme.spacing(1),
    width: "25ch",
    color: "white",
    textTransform: "none",
    backgroundColor: "#42b72a",
    "&:hover": {
      backgroundColor: "#4caf50",
    },
  },
  paper: {
    position: "absolute",
    width: "60ch",
    borderRadius: 4,

    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 1, 3),
  },
  FormTextField: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),

      width: "30ch",
      height: "30px",
      boxShadow: "none",
    },
    "& .MuiInputBase-input": {
      height: "10px",
    },
  },
  inputBase: {
    border: "1px solid #fafafa",
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
    "& .MuiInputBase-input": {
      height: "10px",
      backgroundColor: "#fafafa",
    },
    "& :hover": {
      border: "1px solid #fafafa",
    },
    "& :focus": {
      border: "1px solid #fafafa",
    },
  },
  buttonLogin: {
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    width: "33ch",
    color: "white",
    backgroundColor: "#1877f2",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#4267b2",
    },
  },
  inputEmail: {
    border: "1px solid #fafafa",
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(1),

    width: "53ch",
    "& .MuiInputBase-input": {
      height: "10px",
      backgroundColor: "#fafafa",
    },

    "& :focus": {
      border: "1px solid #fafafa",
    },
  },
  inputBirthdate: {
    border: "1px solid #fafafa",
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(1),
    width: "30ch",
    "& .MuiInputBase-input": {
      color: "darkgray",
      height: "10px",
      backgroundColor: "#fafafa",
    },

    "& :focus": {
      border: "1px solid #fafafa",
    },
  },
  labelGender: {
    "& .MuiFormLabel-root": {
      fontSize: "6px",
    },
  },
  alertErr: {
    margin: theme.spacing(1),
  },
}));
