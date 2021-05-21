import React, { useContext, useEffect } from "react";

import DrawerMenuAccount from "../layout/AccountUserLayout/DrawerMenuAccount";
import ContentAccount from "../layout/AccountUserLayout/ContentAccount";
import { useStyles } from "../layout/AccountUserLayout/UseStyleAccountPage";
import { useState } from "react";
import ContentListing from "../layout/AccountUserLayout/ContentListing";
import CommeceProfile from "../layout/AccountUserLayout/CommeceProfile";
import "./MyPage.css";
import MyListing from "../layout/AccountUserLayout/MyListing";
import Header from "../layout/Header";
import axios from "../../config/axios";
import { AuthContext } from "../../context/AuthContextProvider";

function MyPage() {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getProductId = async () => {
    try {
      const res = await axios.get(
        "/product/get-user-products/" + user?.id
      );
      setProducts(res.data.products);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProductId();
  }, []);
  // const [haveList, setHaveList] = useState();

  return (
    <>
      <Header className={classes.appBar} />
      <nav>
        <DrawerMenuAccount className={classes.drawer} />
      </nav>
      <main>
        {products.length === 0 ? (
          <ContentAccount className={classes.content} />
        ) : (
          <MyListing
            className={classes.content}
            products={products}
          />
        )}
        <ContentListing className={classes.content} />

        <CommeceProfile user={user} products={products} />
      </main>
    </>
  );
}

export default MyPage;
