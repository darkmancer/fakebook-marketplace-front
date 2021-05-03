import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { blue, deepOrange, indigo } from "@material-ui/core/colors";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import {
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: deepOrange,
  },
  typography: {
    fontFamily: "sans-serif",
    fontWeightLight: 400,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeProvider theme={theme} />
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ThemeProvider />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
