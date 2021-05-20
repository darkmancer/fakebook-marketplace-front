import React, { useEffect, useState, useContext } from "react";
import { Typography, Image, Box, Button } from "@material-ui/core";
import axios from "../../../../config/axios";
import { PayloadContext } from "../../../../context/PayloadContextProvider";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import MessageIcon from "@material-ui/icons/Message";

function SellItem({ talksUser, setOpenPopup, setOpenChat, seller }) {
  const getMessages = async () => {
    try {
      const res = await axios.get(`/message/${seller?.id}`);

      console.log(res.data.messages);
      //setTexts(res.data.messages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);
  return (
    <>
      {talksUser.map((t, index) => (
        <Typography>
          name
          {t.firstName} {t.lastName}
          <Button button onClick={() => setOpenChat(true)}>
            <MessageIcon />
          </Button>
          <Button button onClick={() => setOpenPopup(true)}>
            <MoreHorizIcon />
          </Button>
        </Typography>
      ))}
    </>
  );
}
export default SellItem;
