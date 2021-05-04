import React from "react";
import { Button, Divider, Grid, TextField } from "@material-ui/core";
import { useStyle } from "../layout/UseStyleLogin";

function LoginForm() {
  const classes = useStyle();

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
          <Button className={classes.buttonLogin}>Sign In</Button>
          <Divider width="98%" />
        </Grid>
      </form>
    </>
  );
}

export default LoginForm;
