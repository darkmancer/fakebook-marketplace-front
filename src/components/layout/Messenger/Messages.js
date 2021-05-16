import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  CardActions,
  Button,
  Card,
  CardContent,
  Avatar,
  Divider,
  Paper,
  List,
  ListItem,
  ListSubheader,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  text: {
    backgroundColor: "blue",
    maxWidth: "200",
    borderRadius: 5,
    padding: theme.spacing(1),
  },
}));

function Messages({ own }) {
  const [message, setMessage] = useState("");
  const classes = useStyles();
  return (
    <List>
      <ListItem className={classes.root}>
        <ListItemText className={classes.text}>Messages Text</ListItemText>
      </ListItem>
    </List>
  );
}

export default Messages;
