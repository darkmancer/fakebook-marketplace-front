import React, { useState } from 'react'
import {
  Modal,
  TextField,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  Box,
  Button
} from '@material-ui/core'

import { MuiThemeProvider } from '@material-ui/core'
import { theme, useStyles, modalStyle } from './StyleSellItem'

function SellItemModal(props) {
  const classes = useStyles()
  const { openPopup, setOpenPopup, label, setLabel } = props
  const [value, setValue] = useState('')

  console.log('label', label)
  const handleChange = (event) => {
    setValue(event.target.value)
    setLabel(event.target.value)
  }
  const handleLabel = (event) => {
    alert('change label success')
  }

  const body = (
    <Box className={classes.paper} style={modalStyle}>
      <MuiThemeProvider theme={theme}>
        <FormControl>
          <FormLabel style={{ color: 'white' }}>Label Chat</FormLabel>
          <RadioGroup
            aria-label="status"
            name="statusGroup"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="pending"
              control={<Radio />}
              label="pending Payment"
            />
            <FormControlLabel value="paid" control={<Radio />} label="Paid" />
            <FormControlLabel
              value="toBeShipped"
              control={<Radio />}
              label="To be shipped"
            />

            <FormControlLabel
              value="shipped"
              control={<Radio />}
              label="Shipped"
            />
            <FormControlLabel
              value="cashOnDelivery"
              control={<Radio />}
              label="Cash On Delivery"
            />
            <FormControlLabel
              value="complete"
              control={<Radio />}
              label="Complete"
            />
          </RadioGroup>
          <Box>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={(e) => handleLabel(e)}
            >
              OK
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => setOpenPopup(false)}
            >
              Clear
            </Button>
          </Box>
        </FormControl>
      </MuiThemeProvider>
    </Box>
  )

  return <Modal open={openPopup}>{body}</Modal>
}
export default SellItemModal
