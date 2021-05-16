import React, { useState, useEffect } from "react";
import axios from "../../config/axios";
import { useHistory } from "react-router-dom";
import MessageIcon from "@material-ui/icons/Message";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ShareIcon from "@material-ui/icons/Share";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useStylesProductDetail } from "./UseStyleProductDetail";
import NewCommerceProfileModal from "./NewCommerceProfileModal";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

function ProductDetail({ product, trigger, setTrigger }) {
  const [seller, setSeller] = useState(null);
  const classes = { ...useStylesProductDetail(), ...useStyles() };
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  console.log(product);
  useEffect(() => {
    const fetchSeller = async () => {
      try {
        const res = await axios.get(`/seller/${product.userId}`);
        console.log(res);
        setSeller(res.data.sellerProfile);
      } catch (err) {
        console.log(`err`, err);
      }
    };
    fetchSeller();
  }, [product]);
  console.log(seller);
  return (
    <div style={{ overflow: "scroll" }}>
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
            <ListItem>
              <Typography variant="h4" component="h3">
                {product?.title}
              </Typography>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Typography variant="h5" component="h3">
                ฿{product.price} · {product.productStatus}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h9" component="h9">
                {product.category}
                <NavigateNextIcon style={{ height: "12px" }} />
                {product.subCategory}{" "}
              </Typography>
            </ListItem>
          </List>

          <Box className={classes.buttonList}>
            <Box flexGrow={1}>
              <Button
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
            <Typography variant="h6" component="h1">
              <ListItem>Details</ListItem>
            </Typography>
            <ListItem>
              <Typography variant="h9" component="h9">
                Condition: {product.condition}
              </Typography>
            </ListItem>
            <Typography variant="h9" component="h9">
              <ListItem>{product.description}</ListItem>
            </Typography>
          </List>
          <Divider className={classes.dividerLine} />
          <List>
            <Typography
              variant="h5"
              component="h2"
              style={{ fontWeight: "600" }}
            >
              <ListItem>Seller Information</ListItem>
            </Typography>
            <NewCommerceProfileModal
              open={open}
              setOpen={setOpen}
              setTrigger={setTrigger}
              trigger={trigger}
              seller={seller}
            />
          </List>
        </div>
      </Drawer>
    </div>
  );
}
export default ProductDetail;
