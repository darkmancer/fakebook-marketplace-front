import { Box, Paper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useStyles } from './UseStyleAccountPage'
import axios from '../../../config/axios'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function ContentSavedListing() {
  const history = useHistory()
  const classes = useStyles()
  const [showSave, setShowSave] = useState([])
  const getSaved = async () => {
    const res = await axios.get('/saved/')
    setShowSave(res.data.saveds)
  }
  useEffect(() => {
    getSaved()
  }, [])
  console.log(showSave)
  return (
    <>
      <Box className={classes.boxSaved}>
        {showSave?.map((item, idx) => {
          return (
            <Paper
              className={classes.paperSaved}
              onClick={() =>
                history.push('/select/product/' + item?.Product?.id)
              }
            >
              <Box>
                <img
                  src={item?.Product?.Photos[0]?.post}
                  alt=""
                  style={{
                    width: 205,
                    height: 150,
                    borderRadius: 6,
                    margin: 8
                  }}
                />
              </Box>
              <Box>
                <Typography className={classes.textCommeceForm}>
                  $ {item.Product.price}
                </Typography>
                <Typography className={classes.textCommeceForm}>
                  {item.Product.title}
                </Typography>
              </Box>
            </Paper>
          )
        })}
      </Box>
    </>
  )
}

export default ContentSavedListing
