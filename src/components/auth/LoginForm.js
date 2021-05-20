import React, { useContext } from "react";
import { Button, Divider, Grid, TextField } from "@material-ui/core";
import { useStyle } from "../layout/UseStyleLogin";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "../../config/axios";
import { AuthContext } from "../../context/AuthContextProvider";
import { setToken } from "../../services/localStorageService";
import { PayloadContext } from "../../context/PayloadContextProvider";
import Alert from "@material-ui/lab/Alert";

function LoginForm() {
  const classes = useStyle();
  const history = useHistory();
  const { setIsAuthenticated } = useContext(AuthContext);
  const { payload, setPayload } = useContext(PayloadContext);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  console.log("payload", payload);
  const handleFormLoginChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleOnClick = async () => {
    const { email, password } = user;
    if (email === "" || password === "") {
      return setError(true);
    }
    const res = await axios.post("/sign-in", { email, password });
    if (res) {
      // console.log(res);
      setIsAuthenticated(true);
      setPayload(res.data.payload);
      await setToken(res.data.token);
      history.push("/homepage");
    }
  };
  const handleEnter = async (e) => {
    const { email, password } = user;
    if (e.key === "Enter" && email !== "" && password !== "") {
      const res = await axios.post("/sign-in", { email, password });
      if (res) {
        // console.log(res);
        setIsAuthenticated(true);
        setPayload(res.data.payload);
        await setToken(res.data.token);
        history.push("/homepage");
      }
    }
  };

  return (
    <>
      <form className={classes.FormTextField}>
        <Grid container justify="center">
          <TextField
            error={error}
            variant="outlined"
            placeholder="Email"
            name="email"
            autoComplete="off"
            onFocus={() => setError(false)}
            onChange={handleFormLoginChange}
          />
          <TextField
            error={error}
            onChange={handleFormLoginChange}
            variant="outlined"
            placeholder="Password"
            type="password"
            name="password"
            autoComplete="off"
            onKeyUp={(e) => handleEnter(e)}
          />
          <br></br>

          <Button className={classes.buttonLogin} onClick={handleOnClick}>
            Sign In
          </Button>
          {error ? (
            <Alert severity="error" className={classes.alertErr}>
              Please enter Email and Password
            </Alert>
          ) : null}
          <Divider width="98%" />
        </Grid>
      </form>
    </>
  );
}

export default LoginForm;
