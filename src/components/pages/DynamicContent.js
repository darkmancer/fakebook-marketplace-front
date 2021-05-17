import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Box, Grid } from "@material-ui/core";
import { useStylesContent } from "../layout/UseStyleContent";
import RoomIcon from "@material-ui/icons/Room";

import ProductCard from "../layout/ProductCard";
import axios from "../../config/axios";

import "../layout/Content.css";
import { PriceContext } from "../../context/PriceContextProvider";

function Content({ category }) {
  const [products, setProducts] = useState(null);
  const classes = useStylesContent();
  const { priceMin, setPriceMin, priceMax, setPriceMax } =
    useContext(PriceContext);
  console.log(category);
  let print;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/product/get-type/${category}`);
        console.log(res);
        setProducts(res.data.products);
      } catch (err) {
        console.log(`err`, err);
      }
    };
    fetchProduct();
  }, [category]);
  // if (!priceMin && !priceMax) {
  //   print = products?.map((product) => (
  //     <Grid item xs={3}>
  //       <ProductCard product={product} />
  //     </Grid>
  //   ));
  // } else if (priceMax && priceMin) {
  //   print = products
  //     ?.filter(
  //       (product) => +product.price < priceMax && +product.price > priceMin
  //     )
  //     .map((product) => (
  //       <Grid item xs={3}>
  //         <ProductCard product={product} />
  //       </Grid>
  //     ));
  // } else if (priceMax) {
  //   print = products
  //     ?.filter((product) => +product.price < priceMax)
  //     .map((product) => (
  //       <Grid item xs={3}>
  //         <ProductCard product={product} />
  //       </Grid>
  //     ));
  // } else if (priceMin) {
  //   print = products
  //     ?.filter((product) => +product.price > priceMin)
  //     .map((product) => (
  //       <Grid item xs={3}>
  //         <ProductCard product={product} />
  //       </Grid>
  //     ));
  // }

  return (
    <Box>
      <Box className={classes.containerText}>
        <h2 className={classes.text}>
          Today's Picka {priceMin} {priceMax}
        </h2>
        <h5 className="location-text">
          <RoomIcon />
          bangkok 60km
        </h5>
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={15}>
          <Grid container justify="flex-start" spacing={3}>
            {!priceMin && !priceMax
              ? products?.map((product) => (
                  <Grid item xs={3}>
                    <ProductCard product={product} />
                  </Grid>
                ))
              : priceMax && priceMin
              ? products
                  ?.filter(
                    (product) =>
                      +product.price < priceMax && +product.price > priceMin
                  )
                  .map((product) => (
                    <Grid item xs={3}>
                      <ProductCard product={product} />
                    </Grid>
                  ))
              : priceMax
              ? products
                  ?.filter((product) => +product.price < priceMax)
                  .map((product) => (
                    <Grid item xs={3}>
                      <ProductCard product={product} />
                    </Grid>
                  ))
              : priceMin
              ? products
                  ?.filter((product) => +product.price > priceMin)
                  .map((product) => (
                    <Grid item xs={3}>
                      <ProductCard product={product} />
                    </Grid>
                  ))
              : null}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Content;
