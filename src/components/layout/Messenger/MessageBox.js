import React, { useState, useContext, useEffect } from "react";
import { SocketContext } from "../../../context/SocketContextProvider";
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
import Messages from "./Messages";
import SendIcon from "@material-ui/icons/Send";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const modalStyle = {
  top: `30%`,
  right: `5%`,
  bottom: `0%`,
  //transform: `translate(-50%, -50%)`,
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#242526",
    color: "white",
  },
  paper: {
    zIndex: theme.zIndex.drawer + 1,
    position: "absolute",
    width: 400,
    backgroundColor: "#242526",
    color: "white",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
  },
  chatHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  chatFooter: {
    display: "flex",
  },
  dividerColor: {
    color: "white",
  },
  searchInput: {
    margin: theme.spacing(1),
    miHeight: "3ch",
    backgroundColor: "#3A3B3C",
    borderRadius: 20,
    color: "#DCDCDC",
  },
}));

function MessageBox(props) {
  const [message, setMessage] = useState("");
  const classes = useStyles();
  const { openChat, setOpenChat } = props;
  const { socket } = useContext(SocketContext);
  let own = null;

  useEffect(() => {
    socket.on("connect", function () {
      socket.send("hi");

      socket.on("message", function (msg) {});
    });

    //  socket.on("JOIN_REQUEST_ACCEPTED", handleInviteAccepted);
    //const socket = io("http://localhost:5000/");

    //   socket.on("message", function (msg) {});
    // })

    // return () => {
    //   socket.disconnect();
    // };
  }, []);
  return (
    <Paper square={false} className={classes.paper} style={modalStyle}>
      <Box className={classes.chatHeader}>
        <Avatar
          alt="receiver-profile"
          src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620209841/GroupProject/nIEli5jE_400x400_yjuvb2.jpg"
        />
        <Typography>Chiwawa</Typography>

        <Button color="primary" onClick={() => setOpenChat(false)}>
          <CloseIcon />
        </Button>
      </Box>

      <Divider className={classes.dividerColor} />

      <Messages own={own} />
      <Messages own={own} />

      <Box className={classes.chatFooter}>
        <TextField
          fullWidth
          margin="normal"
          multiline
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setMessage("");
            }
          }}
          value={message}
          InputProps={{
            className: classes.searchInput,
          }}
        />
        <Button color="primary">
          <SendIcon />
        </Button>
      </Box>
    </Paper>
  );
}

export default MessageBox;
