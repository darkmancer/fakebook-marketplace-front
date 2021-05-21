import React, { useState, useEffect } from 'react'
import ProductSelected from '../layout/ProductSelected'
import ProductDetail from '../layout/ProductDetail'
import Header from '../layout/Header'
import { Paper, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import axios from '../../config/axios'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#18191a'
  },
  content: {
    [theme.breakpoints.up('sm')]: {
      flexGrow: 1,
      padding: theme.spacing(2)
    },
    [theme.breakpoints.down('sm')]: {
      width: 410,
      flexShrink: 0,
      padding: theme.spacing(1)
    }
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 410,
      flexShrink: 0
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${400}px)`
    }
  }
}))

function SelectProductPage() {
  const [product, setProduct] = useState(null)
  const [trigger, setTrigger] = useState(false)
  const classes = useStyles()
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  console.log(id)
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/product/${id}`)
        console.log('selected product :>>>>', res.data.product)
        setProduct(res.data.product)
        setIsLoading(false)
      } catch (err) {
        console.log(`err`, err)
      }
    }
    fetchProduct()
  }, [])
  if (isLoading) return <p>loading</p>
  return (
    <>
      {product ? (
        <div className={classes.root}>
          <Header className={classes.appBar} position="fixed" />

          <main className={classes.content}>
            <ProductSelected product={product} />
          </main>

          <nav className={classes.drawer}>
            <ProductDetail
              product={product}
              setTrigger={setTrigger}
              trigger={trigger}
              id={id}
            />
          </nav>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  )
}
export default SelectProductPage
