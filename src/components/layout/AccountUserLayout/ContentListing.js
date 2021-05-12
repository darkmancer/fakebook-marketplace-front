import { Box, Paper, TextField } from "@material-ui/core";
import React from "react";
import { MdSearch } from "react-icons/md";
import { useStyles } from "./UseStyleAccountPage";

function ContentListing() {
  const classes = useStyles();
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
