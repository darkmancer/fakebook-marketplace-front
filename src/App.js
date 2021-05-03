import { Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import HomePage from "./components/pages/HomePage";
import theme from "./components/style/theme";

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
