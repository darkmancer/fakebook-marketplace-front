import ProductSelected from "../layout/ProductSelected";
import ProductDetail from "../layout/ProductDetail";
import Header from "../layout/Header";
import MessageBox from "../layout/Messenger/MessageBox";
import Chat from "../layout/Messenger/Chat";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "white",
  },
  content: {
    [theme.breakpoints.up("sm")]: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      width: 410,
      flexShrink: 0,
      padding: theme.spacing(1),
    },
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: 410,
      //flexShrink: 0,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${400}px)`,
    },
  },
}));

function MessengerPage() {
  const classes = useStyles();
  return (
    <>
      {/* <div className={classes.root}>
        <Header className={classes.appBar} position="fixed" />

        <main className={classes.content}>
          <ProductSelected />
        </main> */}

      {/* <nav className={classes.drawer} position="fixed"> */}
      <MessageBox />
      {/* </nav> */}
      {/* </div> */}
    </>
  );
}
export default MessengerPage;
