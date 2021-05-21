import HomePage from "./components/pages/HomePage";
import { Redirect, Route, Switch } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContextProvider";
import LoginRegisterPage from "./components/pages/LoginRegisterPage";
import SelectProductPage from "./components/pages/SelectProductPage";
import InboxPage from "./components/pages/InboxPage";
import DynamicCategoryPage from "./components/pages/DynamicCategoryPage";
import CategoryVehiclePage from "./components/pages/CategoryVehiclePage";
import CategoryHomePage from "./components/pages/CategoryHomePage";
import CategoryGoodsPage from "./components/pages/CategoryGoodsPage";
import SelectVehiclePage from "./components/pages/SelectVehiclePage";
import SelectHomePage from "./components/pages/SelectHomePage";
import SelectGoodsPage from "./components/pages/SelectGoodsPage";
import MyPage from "./components/pages/MyPage";
import "./App.css";
import MyPageListings from "./components/pages/MyPageListings";
import CreateListingItemPage from "./components/pages/CreateListingItemPage";
import CreateListingVehiclePage from "./components/pages/CreateListingVehiclePage";
import CreateListingHomePage from "./components/pages/CreateListingHomePage";
import EditPage from "./components/pages/EditPage";
import { PayloadContext } from "./context/PayloadContextProvider";
import SavedPage from "./components/pages/SavedPage";
import FollowerPage from "./components/pages/FollowerPage";

const privateRoutes = [
  {
    path: "/homepage",
    component: HomePage,
  },
  {
    path: "/inbox",
    component: InboxPage,
  },
  {
    path: "/select/product/:id",
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
    path: "/category/:category",
    component: DynamicCategoryPage,
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
  {
    path: "/myListings",
    component: MyPageListings,
  },
  {
    path: "/item",
    component: CreateListingItemPage,
  },
  {
    path: "/vehicle",
    component: CreateListingVehiclePage,
  },
  {
    path: "/home",
    component: CreateListingHomePage,
  },
  {
    path: "/EditPage/:id",
    component: EditPage,
  },
  {
    path: "/mypage/saved",
    component: SavedPage,
  },
  {
    path: "/mypage/following",
    component: FollowerPage,
  },
];
const publicRoutes = [
  {
    path: "/login",
    component: LoginRegisterPage,
  },
];

function App() {
  const { isAuthenticated, user } = useContext(AuthContext);
  const { payload } = useContext(PayloadContext);
  // console.log(user);
  console.log(payload);
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
