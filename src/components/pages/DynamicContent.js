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
  const { priceMin, priceMax, condition, search } = useContext(PriceContext);
  console.log(search, search);
  const fetchProduct = async () => {
    try {
      const res = await axios.get(`/product/get-category/${category}`);

      const foundProducts = res?.data.products
        ?.filter((product) => {
          if (condition === "All") return product;
          console.log("filtered works", product);
          return product.condition === condition;
        })
        ?.filter((product) => {
          if (!search) return product;
          console.log("search works");
          if (
            product.title?.toLowerCase().includes(search.toLowerCase()) ||
            product.optional?.toLowerCase().includes(search.toLowerCase())
          ) {
            return product;
          }
        });
      setProducts(foundProducts);
    } catch (err) {
      console.log(`err`, err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [category, condition, search]);

  // useEffect(() => {
  //   fetchProduct();
  //   const filterProduct = async () => {
  //     const conditionedProduct = await products?.filter((product) => {
  //       console.log("this work");
  //       return product.condition === condition;
  //     });
  //     console.log(conditionedProduct);
  //     setProducts(conditionedProduct);
  //   };

  //   filterProduct();
  // }, [condition]);

  console.log(products);

  return (
    <Box>
      <Box className={classes.containerText}>
        <h2 className={classes.text}>
          Today's Picka {priceMin} {priceMax} {condition} {search}
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
                      +product.price <= priceMax && +product.price >= priceMin
                  )
                  .map((product) => (
                    <Grid item xs={3}>
                      <ProductCard product={product} />
                    </Grid>
                  ))
              : priceMax
              ? products
                  ?.filter((product) => +product.price <= priceMax)
                  .map((product) => (
                    <Grid item xs={3}>
                      <ProductCard product={product} />
                    </Grid>
                  ))
              : priceMin
              ? products
                  ?.filter((product) => +product.price >= priceMin)
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
