import React from "react";
import ContentSaved from "../layout/AccountUserLayout/ContentSaved";
import ContentSavedListing from "../layout/AccountUserLayout/ContentSavedListing";
import DrawerMenuAccount from "../layout/AccountUserLayout/DrawerMenuAccount";
import { useStyles } from "../layout/AccountUserLayout/UseStyleAccountPage";
import Header from "../layout/Header";

function SavedPage() {
  const classes = useStyles();
  return (
    <>
      <Header className={classes.appBar} />
      <nav>
        <DrawerMenuAccount className={classes.drawer} />
      </nav>
      <main>
        <ContentSavedListing />
        {/* <ContentSaved className={classes.content} /> */}
      </main>
    </>
  );
}

export default SavedPage;
