import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Grid } from '@material-ui/core'
import { useStylesContent } from './UseStyleContent'
import RoomIcon from '@material-ui/icons/Room'
import GoodsCard from './Categories/Goods/GoodsCard'
import VehicleCard from './Categories/Vehicles/VehicleCard'
import HomeCard from './Categories/Homes/HomeCard'
import ProductCard from './ProductCard'
import axios from '../../config/axios'

import './Content.css'

function Content() {
  const [products, setProducts] = useState([])
  const classes = useStylesContent()
  const history = useHistory()
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/product/get-all-product`)
        console.log(res)
        setProducts(res.data.products)
      } catch (err) {
        console.log(`err`, err)
      }
    }
    fetchProduct()
  }, [])
  console.log('product', products)
  return (
    <Box>
      <Box className={classes.containerText}>
        <h2 className={classes.text}>Today's Pick</h2>
        <h5 className="location-text">
          <RoomIcon />
          bangkok 60km
        </h5>
      </Box>

      <Grid container spacing={1}>
        <Grid item xs={15}>
          <Grid container justify="flex-start">
            {products?.map((product) => (
              <Grid item xs={3}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
export default Content
