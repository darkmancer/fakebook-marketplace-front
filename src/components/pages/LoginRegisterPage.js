import { Grid } from "@material-ui/core";
import { Height } from "@material-ui/icons";
import React from "react";
import Login from "../auth/Login";
import BodyLoginLogo from "../layout/BodyLoginLogo";

function LoginRegister() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#f0f2f5",
          width: "100%",
          height: "100%",
        }}>
        <Grid
          container
          spacing={0}
          direction="row"
          display="flex"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}>
          <Grid item xs={6}>
            <BodyLoginLogo />
          </Grid>
          <Grid item xs={6}>
            <Login />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default LoginRegister;
