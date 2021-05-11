import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { Paper, Button, Grid } from "@material-ui/core";
import { useStyle } from "../layout/UseStyleLogin";
import RegisterForm from "./ModalRegister";

function Login() {
  const classes = useStyle();
  return (
    <>
      <Paper elevation={3} className={classes.pageContent}>
        <LoginForm />
        <Grid container justify="center">
          <RegisterForm />
        </Grid>
      </Paper>
    </>
  );
}

export default Login;
