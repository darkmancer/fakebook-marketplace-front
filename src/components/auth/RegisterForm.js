import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  RadioGroup,
  Radio,
  TextField,
  FormControlLabel,
  Grid,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyle } from "../layout/UseStyleLogin";
import { MdEmail } from "react-icons/md";
import { Visibility, VisibilityOff } from "@material-ui/icons";
function RegisterForm({ getModalStyle }) {
  const classes = useStyle();
  const [modalStyle] = useState(getModalStyle);
  const [typePassword, setTypePassword] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClickShowPassword = () => {
    if (typePassword === true) {
      setTypePassword(false);
    } else {
      setTypePassword(true);
    }
  };
  return (
    <>
      <div style={modalStyle} className={classes.paper}>
        <h1 style={{ marginLeft: 16 }}>Sign up</h1>
        <Divider />
        <form
          style={{
            display: "flex",
            flexDirection: "column",
          }}>
          <span>
            <TextField
              placeholder="Firstname"
              variant="outlined"
              className={classes.inputBase}
            />
            <TextField
              placeholder="Lastname"
              variant="outlined"
              className={classes.inputBase}
            />
          </span>
          <TextField
            placeholder="Email Address"
            variant="outlined"
            type="email"
            className={classes.inputEmail}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MdEmail color="grey" size="24px" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="outlined-adornment-password"
            variant="outlined"
            placeholder="Password"
            type={typePassword ? "text" : "password"}
            className={classes.inputEmail}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    style={{
                      boxShadow: "none",
                      position: "absolute",
                      right: "5px",
                    }}
                    onClick={handleClickShowPassword}>
                    {typePassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="outlined-adornment-password"
            variant="outlined"
            placeholder="ConfirmPassword"
            type={typePassword ? "text" : "password"}
            className={classes.inputEmail}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    style={{
                      boxShadow: "none",
                      position: "absolute",
                      right: "5px",
                    }}
                    onClick={handleClickShowPassword}>
                    {typePassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Grid container>
            <Grid item xs={7}>
              <TextField
                id="date"
                label="Date of birth"
                type="date"
                variant="outlined"
                className={classes.inputBirthdate}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={5}>
              <FormControl component="fieldset">
                <FormLabel className={classes.labelGender}>
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={value}
                  onChange={handleChange}>
                  <FormControlLabel
                    value="FEMALE"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="MALE"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="OTHER"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            style={{ marginLeft: "160px" }}
            className={classes.buttonRegister}>
            Sign Up
          </Button>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
