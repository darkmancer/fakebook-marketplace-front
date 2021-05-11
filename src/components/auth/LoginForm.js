import React from "react";
import { Button, Divider, Grid, TextField } from "@material-ui/core";
import { useStyle } from "../layout/UseStyleLogin";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const classes = useStyle();
  const history = useHistory();
  const handleOnClick = () => {
    history.push("/homepage");
  };
  return (
    <>
      <form className={classes.FormTextField}>
        <Grid container justify="center">
          <TextField variant="outlined" placeholder="Email" />
          <TextField
            variant="outlined"
            placeholder="Password"
            type="password"
          />
          <br></br>
          <Button
            className={classes.buttonLogin}
            onClick={handleOnClick}>
            Sign In
          </Button>
          <Divider width="98%" />
        </Grid>
      </form>
    </>
  );
}

export default LoginForm;
