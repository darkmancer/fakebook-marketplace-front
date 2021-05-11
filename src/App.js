import HomePage from "./components/pages/HomePage";
import { Redirect, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContextProvider";
import LoginRegisterPage from "./components/pages/LoginRegisterPage";
import SelectProductPage from "./components/pages/SelectProductPage";
import InboxPage from "./components/pages/InboxPage";
import MyPage from "./components/pages/MyPage";
import "./App.css";
const privateRoutes = [];
const publicRoutes = [
  {
    path: "/Homepage",
    component: HomePage,
  },
  {
    path: "/MyPage",
    component: MyPage,
  },
  {
    path: "/login",
    component: LoginRegisterPage,
  },
  {
    path: "/product",
    component: SelectProductPage,
  },
];

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  return (
    <Switch>
      {isAuthenticated &&
        privateRoutes.map((route, index) => (
          <Route
            key={index}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
      {!isAuthenticated &&
        publicRoutes.map((route, index) => (
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
