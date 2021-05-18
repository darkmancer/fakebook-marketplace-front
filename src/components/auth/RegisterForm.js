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
import axios from "../../config/axios";
import React, { useContext, useState } from "react";
import { useStyle } from "../layout/UseStyleLogin";
import { MdEmail } from "react-icons/md";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";
import { setToken } from "../../services/localStorageService";
function RegisterForm({ getModalStyle }) {
  const classes = useStyle();
  const history = useHistory();
  const { setIsAuthenticated } = useContext(AuthContext);

  const [modalStyle] = useState(getModalStyle);
  const [typePassword, setTypePassword] = useState(false);
  const [value, setValue] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    gender: "",
    birthDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };
  const handleClickShowPassword = () => {
    if (typePassword === true) {
      setTypePassword(false);
    } else {
      setTypePassword(true);
    }
  };
  const handleSignUp = async () => {
    const {
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
      gender,
      birthDate,
    } = value;
    try {
      const res = await axios.post("/register", {
        email,
        firstName,
        lastName,
        password,
        confirmPassword,
        gender,
        birthDate,
      });
      if (res) {
        console.log(res);
        setIsAuthenticated(true);
        setToken(res.data.token);
        history.push("/homepage");
      }
    } catch (err) {
      console.log(err.response);
      console.dir(err.response.message);
    }
  };
  console.log(value);
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
              name="firstName"
              onChange={handleChange}
              className={classes.inputBase}
            />
            <TextField
              name="lastName"
              onChange={handleChange}
              placeholder="Lastname"
              variant="outlined"
              className={classes.inputBase}
            />
          </span>
          <TextField
            placeholder="Email Address"
            variant="outlined"
            onChange={handleChange}
            name="email"
            type="email"
            className={classes.inputEmail}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {/* <MdEmail color="grey" size="24px" /> */}
                </InputAdornment>
              ),
            }}
          />

          <TextField
            id="outlined-adornment-password"
            variant="outlined"
            name="password"
            placeholder="Password"
            onChange={handleChange}
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
            name="confirmPassword"
            onChange={handleChange}
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
                onChange={handleChange}
                label="Date of birth"
                type="date"
                name="birthDate"
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
                  name="gender"
                  value={value.gender}
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
            onClick={handleSignUp}
            className={classes.buttonRegister}>
            Sign Up
          </Button>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
