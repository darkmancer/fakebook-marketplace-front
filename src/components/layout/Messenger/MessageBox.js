import React, { useState, useContext, useEffect, useRef } from "react";
import axios from "axios";
import * as localStorage from "../../../services/localStorageService";
import { SocketContext } from "../../../context/SocketContextProvider";
import {
  Box,
  TextField,
  Typography,
  Button,
  Avatar,
  Divider,
  Paper,
  Modal,
  Slide,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Messages from "./Messages";
import SendIcon from "@material-ui/icons/Send";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const modalStyle = {
  top: `30%`,
  right: `5%`,
  //bottom: `0%`,
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
    // minHeight: 500,
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
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    minHeight: "3ch",
    backgroundColor: "#3A3B3C",
    borderRadius: 20,
    color: "#DCDCDC",
  },
}));

function MessageBox(props) {
  const classes = useStyles();
  const [newMessage, setNewMessage] = useState("");
  const { openChat, setOpenChat } = props;
  const { socket } = useContext(SocketContext);

  const handleSendTexts = async (e) => {
    e.preventDefault();

    // e.target.scroll({ top: target.scrollHeight, behavior: "smooth" });
    const receiverId = "16";

    socket.emit("sendMessage", { text: newMessage });

    try {
      const res = await axios.post(
        "http://localhost:8001/message/" + receiverId,

        { text: newMessage },

        { headers: { authorization: `Bearer ${localStorage.getToken()}` } }
      );
      console.log("res", res);
      setNewMessage("");
      //setText([...text, res.data.messages.text]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnClose = () => {
    setOpenChat(false);
  };

  const body = (
    <Paper square={false} className={classes.paper} style={modalStyle}>
      <Box className={classes.chatHeader}>
        <Avatar
          alt="receiver-profile"
          src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620209841/GroupProject/nIEli5jE_400x400_yjuvb2.jpg"
        />
        <Typography>RECEIVER_ID_NAME/SELLER_ID</Typography>

        <Button color="primary">
          <CloseIcon onClick={handleOnClose} />
        </Button>
      </Box>

      <Divider className={classes.dividerColor} />

      <Messages />

      <Box className={classes.chatFooter}>
        <TextField
          fullWidth
          margin="normal"
          multiline
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendTexts(e);
          }}
          value={newMessage}
          InputProps={{
            className: classes.searchInput,
          }}
        />
        <Button onClick={(e) => handleSendTexts(e)} color="primary">
          <SendIcon />
        </Button>
      </Box>
    </Paper>
  );

  return <Modal open={openChat}>{body}</Modal>;
}

export default MessageBox;
