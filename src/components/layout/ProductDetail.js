import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MessageIcon from "@material-ui/icons/Message";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ShareIcon from "@material-ui/icons/Share";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import MessageBox from "./Messenger/MessageBox";

import { useStylesProductDetail } from "./UseStyleProductDetail";
import CommerceProfileModal from "./CommerceProfileModal";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function ProductDetail() {
  const classes = useStylesProductDetail();
  const [openPopup, setOpenPopup] = useState(false);
  const [openChat, setOpenChat] = useState(false);

  const history = useHistory();
  return (
    <>
      <Drawer
        // className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.closeButton}>
          <CloseIcon button onClick={() => history.push("/HomePage")} />
        </div>
        <div className={classes.drawerContainer}>
          <List>
            <ListItem>Product Title</ListItem>
          </List>

          <List>
            <ListItem>Price</ListItem>
            <ListItem>Type</ListItem>
          </List>

          <Box className={classes.buttonList}>
            <Box flexGrow={1}>
              <Button
                onClick={() => setOpenChat(true)}
                fullWidth
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<MessageIcon />}
              >
                Message
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                color="default"
                className={classes.buttonSave}
                startIcon={<BookmarkIcon />}
              >
                save
              </Button>
            </Box>

            <Box>
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<ShareIcon />}
              >
                share
              </Button>
            </Box>
          </Box>
          <Divider className={classes.dividerLine} />
          <List>
            <ListItem>Description</ListItem>
            <ListItem>Location</ListItem>
          </List>
          <Divider className={classes.dividerLine} />
          <List>
            <ListItem>Seller Information</ListItem>
            <ListItem button onClick={() => setOpenPopup(true)}>
              <Avatar
                alt="name"
                src="https://res.cloudinary.com/dux0yt3qn/image/upload/v1620209841/GroupProject/nIEli5jE_400x400_yjuvb2.jpg"
              />
              Chiba Chiba <br />
              Joined FaKebookMarketPlace in 2011
            </ListItem>
          </List>
        </div>
      </Drawer>
      <CommerceProfileModal openPopup={openPopup} setOpenPopup={setOpenPopup} />

      <MessageBox openChat={openChat} setOpenChat={setOpenChat} />
    </>
  );
}
export default ProductDetail;
