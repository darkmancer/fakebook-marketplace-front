import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { blue, deepOrange } from "@material-ui/core/colors";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Router } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import {
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import AccountContextProvider from "./context/AccountContextProvider";
import PriceContextProvider from "./context/PriceContextProvider";
import LocationContextProvider from "./context/LocationContextProvider";
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
    <LocationContextProvider>
      <PriceContextProvider>
        <AccountContextProvider>
          <AuthContextProvider>
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ThemeProvider>
          </AuthContextProvider>
        </AccountContextProvider>
      </PriceContextProvider>
    </LocationContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
