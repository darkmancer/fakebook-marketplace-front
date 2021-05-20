import React from "react";
import CategoryListings from "../layout/AccountUserLayout/CategoryListings";
import DrawerListings from "../layout/AccountUserLayout/DrawerListings";
import HeaderAccount from "../layout/AccountUserLayout/HeaderAccount";
import { useStyles } from "../layout/AccountUserLayout/UseStyleAccountPage";
import Header from "../layout/Header";

function MyPageListings() {
  const classes = useStyles();
  return (
    <>
      <Header className={classes.appBar} position="fixed" />
      <DrawerListings />
      <div className={classes.boxContentListType}>
        <CategoryListings />
      </div>
    </>
  );
}

export default MyPageListings;
