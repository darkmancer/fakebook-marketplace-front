import HomePage from "./components/pages/HomePage";
import { Redirect, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContextProvider";
import LoginRegister from "./components/pages/LoginRegisterPage";
import SelectProductPage from "./components/pages/SelectProductPage";
import InboxPage from "./components/pages/InboxPage";

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
    <Switch>
      {/* {isAuthenticated &&
        privateRoutes.map((route, index) => (
          <Route
            key={index}
            exact
            path={route.path}
            component={route.component}
          />
        ))} */}
      {/* {! */}
      {/* {!isAuthenticated && */}
      {publicRoutes.map((route, index) => (
        <Route
          key={index}
          exact
          path={route.path}
          component={route.component}
        />
      ))}

      <Redirect to="/login" />
    </Switch>
  );
}

export default App;
