import React from 'react'
import CategoriesSideBar from '../layout/Categories/CategoriesSideBar'
import DynamicContent from './DynamicContent'
import Header from '../layout/Header'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid } from '@material-ui/core'

const drawerWidth = 360
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#18191a'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  //ถ้า sm ขึ้นไปจะทำอะไร
  content: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexGrow: 1,
      margin: theme.spacing(3)
    },
    [theme.breakpoints.down('sm')]: {
      flexShrink: 0,
      padding: theme.spacing(1)
    }
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  }
}))

function DynamicCategoryPage() {
  const { category } = useParams()
  console.log(`category`, category)

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header className={classes.appBar} position="fixed" />

      <nav className={classes.drawer}>
        <CategoriesSideBar category={category} />
      </nav>

      <main className={classes.content}>
        <DynamicContent category={category} />
      </main>
    </div>
  )
}

export default DynamicCategoryPage
