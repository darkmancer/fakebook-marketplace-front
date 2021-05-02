import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue, deepOrange } from "@material-ui/core/colors";
import HomePage from "./components/pages/HomePage";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: deepOrange,
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme} />
      <HomePage />
      <ThemeProvider />
    </>
  );
}

export default App;
