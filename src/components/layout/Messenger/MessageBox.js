import React, { useState, useContext, useEffect, useRef } from "react";
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
import axios from "../../../config/axios";

const modalStyle = {
  top: `30%`,
  right: `5%`,
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
  const { openChat, setOpenChat, seller } = props; //seller fetch จากหน้า ProductDetail มาไม่ทันเลยใส่ isloading ไว้หน้า productdetail
  const { socket } = useContext(SocketContext);

  //id ที่รับเข้ามาคือ id.param ของ product

  const handleSendTexts = async (e) => {
    e.preventDefault();

    // e.target.scroll({ top: target.scrollHeight, behavior: "smooth" });
    //const receiverId = "16";

    socket.emit("sendMessage", { text: newMessage });

    try {
      const res = await axios.post(`/message/${seller?.id}`, {
        text: newMessage,
      });
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
        <Avatar alt="receiver-profile" src={seller.Avatar} />
        <Typography>
          {seller.firstName} {seller.lastName}
        </Typography>
        <Button color="primary">
          <CloseIcon onClick={handleOnClose} />
        </Button>
      </Box>

      <Divider className={classes.dividerColor} />

      <Messages receiverId={seller.id} seller={seller} />

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
