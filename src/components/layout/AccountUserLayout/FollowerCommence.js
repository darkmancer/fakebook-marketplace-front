import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useStyles } from "./UseStyleAccountPage";

function FollowerCommence() {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false);
  console.log(editMode);
  return (
    <Box className={classes.contentHaveListing}>
      <Paper className={classes.paperFollowing}>
        <Box className={classes.flexHeaderFollwering}>
          <div>
            <Typography className={classes.textHeaderFollowing}>
              Your Following
            </Typography>
          </div>
          <div>
            <Typography
              onClick={() => setEditMode((prev) => !prev)}
              className={classes.editMode}>
              {editMode ? "Done" : "Edit"}
            </Typography>
          </div>
        </Box>

        <Paper
          className={classes.paperContentFollowing}
          elevation={0}>
          <Box className={classes.flexSpace}>
            <Box style={{ display: "flex" }}>
              <Avatar
                alt="name?"
                src="https://res.cloudinary.com/risingnova/image/upload/v1620469040/bid7rhzw3w5dbpaspzm1.jpg"
                className={classes.avatar}
              />
              <Typography className={classes.Namefollowing}>
                UserNameFollowing
              </Typography>
            </Box>
            {editMode ? (
              <Box>
                <IconButton
                  className={classes.IconDel}
                  onClick={() => console.log("delete")}>
                  <MdDelete />
                </IconButton>
              </Box>
            ) : null}
          </Box>
          <Box>
            <Typography className={classes.ListingPostingText}>
              Number? : Listings
            </Typography>
          </Box>
        </Paper>
      </Paper>
    </Box>
  );
}

export default FollowerCommence;
