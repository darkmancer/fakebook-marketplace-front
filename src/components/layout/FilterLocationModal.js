import React, { useState, useContext } from 'react'
import {
  Modal,
  TextField,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  IconButton
} from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { useStyles, theme, modalStyle } from './UseStyleFilterLocation'
import { GeocodeContext } from '../../context/GeocodeContextProvider'
import MyMapComponent from '../../utilities/GoogleMap'
import { MdClose } from 'react-icons/md'
import Geocode from 'react-geocode'
import { Icon } from '@material-ui/core'
const rad = [
  {
    value: '1',
    label: '1 km'
  },
  {
    value: '2',
    label: '2 km'
  },
  {
    value: '3',
    label: '3 km'
  },
  {
    value: '4',
    label: '4 km'
  },
  {
    value: '5',
    label: '5 km'
  },
  {
    value: '10',
    label: '10 km'
  },
  {
    value: '20',
    label: '20 km'
  },
  {
    value: '40',
    label: '40 km'
  },
  {
    value: '60',
    label: '60 km'
  },
  {
    value: '80',
    label: '80 km'
  },
  {
    value: '100',
    label: '100 km'
  },
  {
    value: '250',
    label: '250 km'
  },
  {
    value: '500',
    label: '500 km'
  }
]

function FilterLocationModal(props) {
  const classes = useStyles()
  const { openPopup, setOpenPopup } = props
  const { geocode, setGeocode, setRadius, radius, address, setAddress } =
    useContext(GeocodeContext)
  const handleApply = () => {}
  const handleChangeAddress = (event) => {
    const targetAddress = event.target.value
    setAddress(targetAddress)
    Geocode.fromAddress(targetAddress).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location
        setGeocode(`${lat},${lng}`)
      },
      (error) => {
        console.error(error)
      }
    )
  }

  const handleChangeRad = (event) => {
    setRadius(event.target.value)
  }
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography className={classes.Title}>Change Location</Typography>
      <IconButton
        className={classes.IconButtonClose}
        onClick={() => setOpenPopup(false)}
      >
        <MdClose size="30" />
      </IconButton>
      <form autoComplete="off">
        <Box>
          <TextField
            // InputProps={{
            //   className: classes.multilineColor,
            //   style: { backgroundColor: 'white' }
            // }}
            // style={{ backgroundColor: 'white' }}

            className={classes.multilineColor}
            id="location"
            placeholder="Location"
            variant="outlined"
            onChange={handleChangeAddress}
          />
        </Box>
        <Box>
          {/* <TextField
              id="radius-select-location"
              select
              native
              className={classes.multilineColor}
              value={radius}
              onChange={handleChangeRad}
              defaultValues="60"
              variant="outlined"
              fullWidth
              InputProps={{}}
            >
              {rad.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  style={{ backgroundColor: '#242526' }}
                >
                  {option.label}
                </option>
              ))}
            </TextField> */}
          <FormControl variant="outlined" className={classes.multilineColor}>
            <InputLabel
              htmlFor="radius-select-location"
              className={classes.label}
            >
              Radius
            </InputLabel>
            <Select
              label="Radius"
              id="radius-select-location"
              onChange={handleChangeRad}
              // style={{ color: 'white' }}
              value={radius}
              inputProps={{
                name: 'radius',
                id: 'radius-select-location',
                classes: {
                  icon: classes.SelectIcon
                }
              }}
            >
              {rad?.map((rad, idx) => {
                return (
                  <MenuItem key={idx} value={rad.value}>
                    {rad.label}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Box>
      </form>
      <MyMapComponent
        isMarkerShown={true}
        geocode={geocode}
        className={classes.Map}
      ></MyMapComponent>
      {/* <Button className={classes.button} onClick={() => setOpenPopup(false)}>
        close
      </Button> */}
      <Button
        onClick={() => setOpenPopup(false)}
        className={classes.ButtonApply}
      >
        Apply
      </Button>
    </div>
  )

  return (
    // <Dialog open={openPopup}>

    //     <DialogTitle>
    //       <div>Title this Filter will show here</div>
    //     </DialogTitle>
    //     <DialogContent>
    //       <div>Change location?</div>
    //     </DialogContent>

    // </Dialog>
    // <div className={classes.paper}>
    <Modal open={openPopup}>{body}</Modal>
    // </div>
  )
}
export default FilterLocationModal
