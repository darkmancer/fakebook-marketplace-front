import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import SelectProductPage from "./components/pages/SelectProductPage";
import InboxPage from "./components/pages/InboxPage";

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
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/product">
          <SelectProductPage />
        </Route>
        <Route exact path="/inbox">
          <InboxPage />
        </Route>
      </Switch>
    </>
    //<SelectProductPage />
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
