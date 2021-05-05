import Product from "../layout/Product";
import ProductDetail from "../layout/ProductDetail";
import Header from "../layout/Header";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#18191a",
    //backgroundColor: "#18191a",

    // flexGrow: 1,
    // height: 100,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    height: 100,
    marginTop: 64,
    color: "white",
  },
}));

function SelectProductPage() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>

          <Grid item xs={8}>
            <Product />
          </Grid>
          <Grid item xs={4} className={classes.paper}>
            <ProductDetail />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
export default SelectProductPage;
