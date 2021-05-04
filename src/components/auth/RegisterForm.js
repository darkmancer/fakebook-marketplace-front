import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyle } from "../layout/UseStyleLogin";
import { MdEmail } from "react-icons/md";
import { Visibility, VisibilityOff } from "@material-ui/icons";
function RegisterForm({ getModalStyle }) {
  const classes = useStyle();
  const [modalStyle] = useState(getModalStyle);
  const [typePassword, setTypePassword] = useState(false);
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
        <form>
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
          <Button className={classes.buttonRegister}>SignUp</Button>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
