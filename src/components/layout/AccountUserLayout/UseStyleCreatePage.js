import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  div: {
    marginLeft: theme.spacing(2),
  },
  drawerContainer: {
    overflow: "auto",
  },
  paperContainer: {
    width: "25%",
    minHeight: 600,
    borderRadius: 0,
    backgroundColor: "#242526",
  },
  FlexAvatar: {
    display: "flex",
    margin: theme.spacing(2, 1),
  },
  NameAvatar: {
    color: "white",
    margin: theme.spacing(0.5),
  },
  TextStatusAvatar: {
    color: "#616161",
    margin: theme.spacing(0.5),
  },
  ButtonCreate: {
    textTransform: "none",
    margin: theme.spacing(1),
    width: "16ch",
    color: "white",
    backgroundColor: "#424242",
    "&:hover": {
      backgroundColor: "grey",
    },
  },
  AvatarCreateDrawer: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  TextHeader: {
    color: "#616161",
    fontSize: "0.9rem",
    margin: theme.spacing(1, 2.5),
  },
  PaperAddPhoto: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: theme.spacing(2),
    width: "90%",
    backgroundColor: "#242526",
    borderWidth: 1,

    height: 200,
  },
  ButtonAddPhoto: {
    textTransform: "none",
    margin: theme.spacing(1),
    width: "16ch",
    color: "white",
    backgroundColor: "#616161",
    "&:hover": {
      backgroundColor: "grey",
    },
  },
}));
