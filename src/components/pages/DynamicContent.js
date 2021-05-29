import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Grid, Container, Typography } from '@material-ui/core'
import { useStylesContent } from '../layout/UseStyleContent'
import RoomIcon from '@material-ui/icons/Room'
import { GeocodeContext } from '../../context/GeocodeContextProvider'
import ProductCard from '../layout/ProductCard'
import axios from '../../config/axios'
import { calcDistance } from '../../utilities/Geocode'
import '../layout/Content.css'
import { PriceContext } from '../../context/PriceContextProvider'

const useForceUpdate = () => useState()[1]

function Content({ category }) {
  //ชื่อไม่ตรงกับชื่อคอมโพเน้น
  const [products, setProducts] = useState([])
  const classes = useStylesContent()
  const { priceMin, priceMax, condition, search, sort } =
    useContext(PriceContext)
  const { geocode, setGeocode, setRadius, radius, address, setAddress } =
    useContext(GeocodeContext)

  const filterProducts = (products) => {
    // ชื่อซ้ำใช้ Tool
    return products
      ?.filter((product) => {
        if (!condition || condition === 'All') return product //test ไม่มีคอนดิชั่นหรือเปนออลต้องได้เหมือนเดิม เงื่อนไขสองถ้าใส่คอนดิชั่นและไม่มีเสริชต้องได้โปรดัคนั้นเท่านั้น สามไม่มีคอนดิชั่นแต่มีเสริช สี่มีทั้งคู่

        return product.condition === condition
      })
      ?.filter((product) => {
        if (!search) return product //this is early return
        if (
          product.title?.toLowerCase().includes(search.toLowerCase()) ||
          product.optional?.toLowerCase().includes(search.toLowerCase()) // indexing แกะเอามาเทส
        ) {
          return product
        }
      })
  }
  const locationFilter = async (products) => {
    return products?.filter((product) => {
      if (calcDistance(product.location, geocode) <= +radius) return product
    })
  }
  const fetchProduct = async () => {
    try {
      const res = await axios.get(`/product/get-by-category/${category}`)

      const filteredProducts = filterProducts(res.data.products)
      const filteredProductsByLocation = await locationFilter(filteredProducts)
      setProducts(filteredProductsByLocation)
    } catch (err) {
      console.log(`err`, err)
    }
  }
  const fetchBrowseAll = async () => {
    try {
      const res = await axios.get(`/product/get-all-product`)

      if (res.data.products) {
        const filteredProducts = filterProducts(res.data.products)
        const filteredProductsByLocation = await locationFilter(
          filteredProducts
        )
        if (filteredProductsByLocation) {
          setProducts(filteredProductsByLocation)
        }
      } else {
        setProducts(res.data.products)
      }
    } catch (err) {
      console.log(`err`, err)
    }
  }

  useEffect(() => {
    if (category) {
      fetchProduct()
    } else {
      fetchBrowseAll()
    }
  }, [category, condition, search, radius, address])

  const priceFilterRender = () => {
    if (!priceMin && !priceMax)
      return products?.map((product) => (
        <Grid item xs={3}>
          <ProductCard product={product} />
        </Grid>
      ))
    else if (priceMax && priceMin)
      return products
        ?.filter(
          (product) => +product.price <= priceMax && +product.price >= priceMin
        )
        .map((product) => (
          <Grid item xs={3}>
            <ProductCard product={product} />
          </Grid>
        ))
    else if (priceMax)
      return products
        ?.filter((product) => +product.price <= priceMax)
        .map((product) => (
          <Grid item xs={3}>
            <ProductCard product={product} />
          </Grid>
        ))
    else if (priceMin)
      return products
        ?.filter((product) => +product.price >= priceMin)
        .map((product) => (
          <Grid item xs={3}>
            <ProductCard product={product} />
          </Grid>
        ))
    else return null
  }

  return (
    <div>
      <Box>
        <Box className={classes.containerText}>
          <h2 className={classes.text}>{category || "Today's Pick"}</h2>
          <Typography style={{ color: '#2D88FF' }}>
            <RoomIcon />
            {address} {radius}km
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Grid
              container
              justify={products.length < 4 ? 'space-evenly' : 'flex-start'}
              spacing={3}
            >
              {priceFilterRender()}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
export default Content

{
  /* {!priceMin && !priceMax //แยกออกมาเป็นRender Functionแล้ว ใช้Early Return คืน เปลี่ยนเปนฟังชั่น
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
                : null} */
}
