import React from "react";
import DrawerMenuAccount from "../layout/AccountUserLayout/DrawerMenuAccount";
import FollowerCommence from "../layout/AccountUserLayout/FollowerCommence";
import { useStyles } from "../layout/AccountUserLayout/UseStyleAccountPage";
import Header from "../layout/Header";

function FollowerPage() {
  const classes = useStyles();

  return (
    <>
      <Header className={classes.appBar} />
      <nav>
        <DrawerMenuAccount className={classes.drawer} />
      </nav>
      <main>
        <FollowerCommence />
      </main>
    </>
  );
}

export default FollowerPage;
