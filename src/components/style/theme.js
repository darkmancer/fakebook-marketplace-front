import { createMuiTheme } from "@material-ui/core";
import { deepOrange, grey, red, green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#242526",
    },
    secondary: {
      main: "#ff480f",
    },
  },
  //type: "dark",
});
export default theme;
