import { Box, Paper, TextField } from "@material-ui/core";
import React,{useContext} from "react";
import { MdSearch } from "react-icons/md";
import { useStyles } from "./UseStyleAccountPage";
import {PriceContext} from "../../../context/PriceContextProvider"

function ContentListing() {
    const { search, setSearch } =
      useContext(PriceContext)
  const classes = useStyles();
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  return (
    <>
      <Box className={classes.contentHaveListing}>
        <Paper className={classes.paperSearchListing}>
          <div>
            <h2 style={{ color: "white", marginLeft: 18 }}>
              Your Listing 
            </h2>
          </div>
          <TextField
            placeholder="Search your listings"
            variant="outlined"
            className={classes.ButtonSearch}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <MdSearch size="30" className={classes.iconSearch} />
              ),
            }}
          />
        </Paper>
      </Box>
    </>
  );
}

export default ContentListing;
