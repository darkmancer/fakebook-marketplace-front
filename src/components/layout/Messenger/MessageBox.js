import React, { useState, useContext, useEffect } from "react";
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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Messages from "./Messages";
import SendIcon from "@material-ui/icons/Send";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import useChat from "./_useChat";
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
    margin: theme.spacing(1),
    minHeight: "3ch",
    backgroundColor: "#3A3B3C",
    borderRadius: 20,
    color: "#DCDCDC",
  },
  messageList: {
    overflow: "auto",
  },
}));

function MessageBox(props) {
  const classes = useStyles();
  const [text, setText] = useState("");
  const { openChat, setOpenChat } = props;
  const { socket } = useContext(SocketContext);
  const { messages, sendMessage } = useChat();
  console.log(text);
  let own = null;

  const handleSendTexts = async (e) => {
    e.preventDefault();

    const receiverId = "16";

    try {
      await axios.post(
        "http://localhost:8001/message/" + receiverId,

        { text: text },

        { headers: { authorization: `Bearer ${localStorage.getToken()}` } }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnClose = () => {
    setOpenChat(false);
  };
  //onSendMessage={(message) => {sendMessage({ message });}}
  return (
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

      <Messages own={own} messages={messages} />

      <Box className={classes.chatFooter}>
        <TextField
          fullWidth
          margin="normal"
          multiline
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendTexts(e);
          }}
          value={text}
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
}

export default MessageBox;
