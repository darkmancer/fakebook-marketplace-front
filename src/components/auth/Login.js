import React from "react";
import {
  Box,
  Button,
  CardActionArea,
  CardContent,
  Divider,
  FormControl,
  FormLabel,
  Input,
  InputLabel,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { FormHelperText } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({});
function Login() {
  const classes = useStyles;
  return (
    <>
      <Box
        width="100%"
        height="500px"
        bgcolor="#f0f2f5"
        display="Flex"
        alignItems="center"
        justifyContent="center">
        <div>Form</div>
        <Card className={classes.root}>
          <CardActionArea />
          <CardContent>
            <FormControl>
              <InputLabel htmlFor="my-input">Email</InputLabel>
              <Input id="my-input" />
            </FormControl>
            <div>
              <FormControl>
                <InputLabel htmlFor="passwordInput">
                  Password
                </InputLabel>
                <Input id="passwordInput" type="password" />

                <Button className={classes.button} type="submit">
                  Login
                </Button>
              </FormControl>
            </div>
            <Divider />
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default Login;
