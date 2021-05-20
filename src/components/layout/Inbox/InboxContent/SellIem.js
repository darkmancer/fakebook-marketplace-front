import React, { useEffect, useState, useContext } from "react";
import { Typography, Image, Box, Button } from "@material-ui/core";
import axios from "../../../../config/axios";
import { PayloadContext } from "../../../../context/PayloadContextProvider";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import MessageIcon from "@material-ui/icons/Message";

function SellItem({ talksUser, setOpenPopup, setOpenChat }) {
  return (
    <>
      {talksUser.map((t, index) => (
        <Typography>
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
