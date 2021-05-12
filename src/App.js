import HomePage from "./components/pages/HomePage";
import { Redirect, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContextProvider";
import LoginRegisterPage from "./components/pages/LoginRegisterPage";
import SelectProductPage from "./components/pages/SelectProductPage";
import InboxPage from "./components/pages/InboxPage";
import CategoryVehiclePage from "./components/pages/CategoryVehiclePage";
import CategoryHomePage from "./components/pages/CategoryHomePage";
import CategoryGoodsPage from "./components/pages/CategoryGoodsPage";
import SelectVehiclePage from "./components/pages/SelectVehiclePage";
import SelectHomePage from "./components/pages/SelectHomePage";
import SelectGoodsPage from "./components/pages/SelectGoodsPage";
import MyPage from "./components/pages/MyPage";

const privateRoutes = [];
const publicRoutes = [
  {
    path: "/Homepage",
    component: HomePage,
  },
  {
    path: "/login",
    component: LoginRegisterPage,
  },
  {
    path: "/inbox",
    component: InboxPage,
  },
  {
    path: "/select/product",
    component: SelectProductPage,
  },
  {
    path: "/select/vehicle",
    component: SelectVehiclePage,
  },
  {
    path: "/select/home",
    component: SelectHomePage,
  },
  {
    path: "/select/goods",
    component: SelectGoodsPage,
  },
  {
    path: "/category/home",
    component: CategoryHomePage,
  },
  {
    path: "/category/goods",
    component: CategoryGoodsPage,
  },
  {
    path: "/category/vehicle",
    component: CategoryVehiclePage,
  },
  {
    path: "/mypage",
    component: MyPage,
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
