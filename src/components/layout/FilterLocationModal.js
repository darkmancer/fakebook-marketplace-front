import React, { useState, useContext } from "react";
import { Modal, TextField, Box } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { useStyles, theme, modalStyle } from "./UseStyleFilterLocation";
import { GeocodeContext } from '../../context/GeocodeContextProvider'

import Geocode from 'react-geocode'
const rad = [
  {
    value: "1",
    label: "1 km",
  },
  {
    value: "2",
    label: "2 km",
  },
  {
    value: "3",
    label: "3 km",
  },
  {
    value: "4",
    label: "4 km",
  },
  {
    value: "5",
    label: "5 km",
  },
  {
    value: "10",
    label: "10 km",
  },
  {
    value: "20",
    label: "20 km",
  },
  {
    value: "40",
    label: "40 km",
  },
  {
    value: "60",
    label: "60 km",
  },
  {
    value: "80",
    label: "80 km",
  },
  {
    value: "100",
    label: "100 km",
  },
  {
    value: "250",
    label: "250 km",
  },
  {
    value: "500",
    label: "500 km",
  },
];

function FilterLocationModal(props) {
  const classes = useStyles();
  const { openPopup, setOpenPopup } = props;
   const { geocode, setGeocode, setRadius, radius, address, setAddress } = useContext(GeocodeContext)
  const handleApply = () => {
    
  }
  const handleChangeAddress = (event) => {
    const targetAddress = event.target.value;
    setAddress(targetAddress);
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
    setRadius(event.target.value);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2>Filter Location</h2>

      <form autoComplete="off">
        <MuiThemeProvider theme={theme}>
          <Box>
            <TextField
              InputProps={{
                className: classes.multilineColor,
                style: { backgroundColor: 'white', color:'black' }
              }}
              className={classes.margin}
              fullWidth
              id="location"
              label="Location"
              variant="outlined"
              onChange={handleChangeAddress}
            />
          </Box>
          <Box>
            {' '}
            <TextField
              id="radius-select-location"
              select
              value={radius}
              onChange={handleChangeRad}
              SelectProps={{
                native: true
              }}
              defaultValues="60"
              variant="outlined"
              fullWidth
              InputProps={{
                className: classes.multilineColor
              }}
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
            </TextField>
          </Box>
        </MuiThemeProvider>
      </form>

      <button onClick={() => setOpenPopup(false)}>close</button>
      <button onClick={() => alert('Apply')}>Apply</button>
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
  );
}
export default FilterLocationModal;
