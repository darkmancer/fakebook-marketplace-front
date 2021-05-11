import HomePage from "./components/pages/HomePage";
import { Redirect, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContextProvider";
import LoginRegister from "./components/pages/LoginRegisterPage";
import SelectProductPage from "./components/pages/SelectProductPage";
import InboxPage from "./components/pages/InboxPage";
import CategoryVehiclePage from "./components/pages/CategoryVehiclePage";

const privateRoutes = [];
const publicRoutes = [
  {
    path: "/Homepage",
    component: HomePage,
  },
  {
    path: "/login",
    component: LoginRegister,
  },
  {
    path: "/select",
    component: SelectProductPage,
  },
];

function App() {
  const { isAuthenticated } = useContext(AuthContext);

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
        <Route exact path="/vehicle">
          <CategoryVehiclePage />
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
