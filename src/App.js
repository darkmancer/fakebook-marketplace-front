import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import SelectProductPage from "./components/pages/SelectProductPage";

// const publicRoutes = [
//   {
//     path: "/",
//     component: HomePage,
//   },
//   {
//     path: "/location",
//     component: FilterLocationPage,
//   },
// ];

function App() {
  return (
    <>
      <SelectProductPage />
    </>

    // <FilterLocationPage />
    //  <ThemeProvider theme={theme} />
    // <Switch>
    //   {/* {isAuthenticated &&
    //     privateRoutes.map((el, index) => (
    //       <Route key={index} exact path={el.path} component={el.component} />
    //     ))} */}
    //   {/*
    //   {!isAuthenticated && */}
    //   {publicRoutes.map((el, index) => (
    //     <Route key={index} exact path={el.path} component={el.component} />
    //   ))}
    //   <Redirect to="/" />
    // </Switch>
    // <ThemeProvider />
  );
}

export default App;
