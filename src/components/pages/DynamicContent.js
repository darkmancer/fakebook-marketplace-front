import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Grid } from '@material-ui/core'
import { useStylesContent } from '../layout/UseStyleContent'
import RoomIcon from '@material-ui/icons/Room'
import { GeocodeContext } from '../../context/GeocodeContextProvider'
import ProductCard from '../layout/ProductCard'
import axios from '../../config/axios'
import {calcDistance} from '../../utilities/Geocode'
import '../layout/Content.css'
import { PriceContext } from '../../context/PriceContextProvider'

const useForceUpdate = () => useState()[1]

function Content({ category }) {
  const forceUpdate = useForceUpdate()
  const [products, setProducts] = useState([])
  const classes = useStylesContent()
  const { priceMin, priceMax, condition, search, sort } =
    useContext(PriceContext)
   const { geocode, setGeocode, setRadius, radius, address, setAddress } =
     useContext(GeocodeContext)
  const filterProducts = (products) => {
    return products
      ?.filter((product) => {
        if (!condition || condition === 'All') return product
        console.log('filtered works', product)
        return product.condition === condition
      })
      ?.filter((product) => {
        if (!search) return product
        if (
          product.title?.toLowerCase().includes(search.toLowerCase()) ||
          product.optional?.toLowerCase().includes(search.toLowerCase())
        ) {
          return product
        }
      })
  }
  const locationFilter = (products) => {
    return products?.filter((product) => {
      console.log("working")
      return calcDistance(product.location,geocode) <= +radius
    })
  }
  const fetchProduct = async () => {
    try {
      const res = await axios.get(`/product/get-by-category/${category}`)
      const filteredProducts = filterProducts(res.data.products)
      setProducts(filteredProducts)
    } catch (err) {
      console.log(`err`, err)
    }
  }
  const fetchBrowseAll = async () => {
    try {
      const res = await axios.get(`/product/get-all-product`)
      const filteredProducts = filterProducts(res.data.products)
      const filteredProducts2 = locationFilter(filteredProducts)
      setProducts(filteredProducts2)
      console.log(filteredProducts2)
    } catch (err) {
      console.log(`err`, err)
    }
  }



  useEffect(() => {
    if (!category) {
      fetchBrowseAll()
    } else {
      fetchProduct()
    }
  }, [category, condition, search,radius])





  return (
    <Box>
      <Box className={classes.containerText}>
        <h2 className={classes.text}>
          Today's Pick {priceMin} {priceMax} {condition} {search} {sort} {geocode} {address} {radius}
        </h2>
        <h5 className="location-text">
          <RoomIcon />
          Bangkok 60km
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
  )
}
export default Content
