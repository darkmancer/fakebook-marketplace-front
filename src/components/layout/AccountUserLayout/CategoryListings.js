import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./UseStyleAccountPage";
import { FcAutomotive, FcOrganization, FcShop } from "react-icons/fc";
import { useHistory } from "react-router-dom";
function CategoryListings() {
  const history = useHistory();
  const ListingType = [
    {
      type: "Item for Sale",
      description: "Create a single listing for one more item sell.",
      image: FcShop,
      bgColor: "#c5e1a5",
    },
    {
      type: "Vehicle for Sale",
      description: "Sell car,truck or other type of vehicle.",
      image: FcAutomotive,
      bgColor: "#ffebee",
    },
    {
      type: "Home for Sale or Rent",
      description: "List a house or aparment for sale or rent.",
      image: FcOrganization,
      bgColor: "#e0f7fa",
    },
  ];
  const handleClickList = (value) => {
    const valuePush = value.split(" ");

    history.push(`/${valuePush[0]}`);
  };
  const classes = useStyles();
  return (
    <div>
      <Box>
        <h3>Choose Listing Type</h3>
        <div className={classes.FlexListCate}>
          {ListingType.map((item, idx) => {
            return (
              <div
                className={classes.divCategoryList}
                key={idx}
                onClick={() => handleClickList(item.type)}>
                <Avatar
                  className={classes.AvatarList}
                  style={{ backgroundColor: item.bgColor }}>
                  <item.image size="60" />
                </Avatar>
                <h3>{item.type}</h3>
                <p className={classes.contentList}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Box>
    </div>
  );
}

export default CategoryListings;
