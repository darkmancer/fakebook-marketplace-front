import React from "react";
import HeaderAccount from "../layout/AccountUserLayout/HeaderAccount";
import DrawerMenuAccount from "../layout/AccountUserLayout/DrawerMenuAccount";
import ContentAccount from "../layout/AccountUserLayout/ContentAccount";
import { useStyles } from "../layout/AccountUserLayout/UseStyleAccountPage";
import { useState } from "react";
import ContentListing from "../layout/AccountUserLayout/ContentListing";
import CommeceProfile from "../layout/AccountUserLayout/CommeceProfile";
import "./MyPage.css";
function MyPage() {
  const classes = useStyles();
  // const [haveList, setHaveList] = useState();
  return (
    <>
      <HeaderAccount className={classes.appBar} />
      <nav>
        <DrawerMenuAccount className={classes.drawer} />
      </nav>
      <main>
        <ContentListing className={classes.content} />
        <ContentAccount className={classes.content} />
        <CommeceProfile />
      </main>
    </>
  );
}

export default MyPage;
