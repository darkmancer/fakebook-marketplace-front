import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import { Typography, Container, Avatar, Button, Divider } from "@material-ui/core";
import axios from "../../config/axios";
import RoomIcon from "@material-ui/icons/Room";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import ProductCard from "./ProductCard";
import { setToken } from "../../services/localStorageService";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#242526",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "350px",
    color: "white",
    border: "1px solid grey",
    borderRadius: 5,
  
  },
  flexColCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#373A3B",
    color: "white",
  },
  dividerLine: {
    backgroundColor: "#373A3B",
    width: "90%",
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal({ open, setOpen, seller, trigger, setTrigger}) {
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(6);
  const classes = useStyles();
  setToken(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJLZWF2YXJpbkBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJTYWkiLCJsYXN0TmFtZSI6IktlYXZhcmluIiwiYmlvIjpudWxsLCJqb2luWWVhciI6IjIwMjEtMDUtMDRUMjE6MzU6MzIuMDAwWiIsImlhdCI6MTYyMDE2NDYxMSwiZXhwIjoxNjIyNzU2NjExfQ.bkssun3jfIZG3MsAzPxuIAjSzQxIes1uxUFNty6ahoY"
  );
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (seller) {
     
      const fetchProducts = async () => {
        try {
          const res = await axios.get(`/product/get-limit-product-by-id/${seller.id}/${offset}/${limit}`);
          
          setLimit(3)
          setOffset(6);
          setProducts(res.data.products);
        } catch (err) {
          console.log(`err`, err);
        }
      };
      fetchProducts();
    }
  }, [seller]);

  const seeMore = async () => {

    const res = await axios.get(
      `/product/get-limit-product-by-id/${seller.id}/${offset}/${limit}`
    );
    setProducts([...products, ...res.data.products])
    setOffset(limit + offset)
  }


  return (
    <div>
      <Container onClick={() => setOpen(true)}>
        <Avatar
          alt="name"
          src={seller?.avatar}
          className={classes.large}
          style={{
            margin: "0px 15px 0px 0px",
            width: "500",
            height: "600",
          }}
        />
        <div>
          <Typography variant="h6" component="h6">
            {seller?.firstName} {seller?.lastName} <br />
          </Typography>
          <Typography variant="caption" component="h8">
            Joined Marketplace in {seller?.joinYear.substring(0, 4)}
          </Typography>
        </div>
      </Container>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography
              variant="h5"
              component="h6"
              style={{ fontWeight: "500px" }}
            >
              Commerce Profile
            </Typography>
            <Container>
              <Avatar
                className={classes.large}
                alt="name"
                src={seller?.avatar}
              />

              <Typography variant="h6" component="h2">
                {seller?.firstName} {seller?.lastName}
              </Typography>
            </Container>
            <Container style={{ padding: "0", display: "flex-row" }}>
              <Button
                variant="contained"
                size="small"
                className={classes.button}
              >
                Follow
              </Button>
              <Button
                variant="contained"
                size="small"
                className={classes.button}
                onClick={() => alert("Apply")}
              >
                View Profile
              </Button>
              <Button
                variant="contained"
                size="small"
                className={classes.button}
                onClick={() => alert("Apply")}
              >
                Report
              </Button>
            </Container>
            <Divider />
            <Container>
              <Typography variant="h6" component="p">
                About
              </Typography>
              <Container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="body2" component="span">
                  <RoomIcon /> Lives in {seller?.location}
                </Typography>
                <Typography variant="body2" component="span">
                  <HowToRegIcon /> Joined MarketPlace in 2011
                </Typography>
              </Container>
            </Container>
            <Divider className={classes.dividerLine} />
            <Typography variant="body2" component="span">
              MarketPlace Listing
            </Typography>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                overflow: "scroll",
                height: "400px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                  alignItems: "flex-start",
                }}
              >
                {products?.map((product) => (
                  <div style={{ height: "100", width: "100" }}>
                    <ProductCard
                      product={product}
                      size="mini"
                      setOpen={setOpen}
                      setTrigger={setTrigger}
                      trigger={trigger}
                    />
                  </div>
                ))}
              </div>
              <div>
                <Button variant="contained" onClick={seeMore}>
                  See More
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
