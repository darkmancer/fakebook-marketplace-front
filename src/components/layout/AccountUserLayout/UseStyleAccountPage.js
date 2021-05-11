import { makeStyles } from "@material-ui/core";
const drawerWidth = 300;
export const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#18191a",
    // boxShadow:
  },
  drawer: {
    width: drawerWidth,
    backgroundColor: "red",
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#242526",
    color: "white",
    borderColor: "grey",
  },
  drawerContainer: {
    overflow: "auto",
  },
  drawerSpacing: {
    margin: theme.spacing(0, 1),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  dividerLine: {
    backgroundColor: "grey",
  },
  searchInput: {
    margin: theme.spacing(1),
    width: "25ch",
    backgroundColor: "grey",
  },
  div: {
    marginLeft: theme.spacing(2),
  },
  buttonListAccount: {
    padding: theme.spacing(2),
    "&:hover": {
      borderRadius: 6,
      backgroundColor: "#424242",
    },
  },
  buttonListFilter: {
    padding: theme.spacing(2),
  },

  ListIcon: {
    "&.MuiListItemIcon-root": {
      minWidth: "30px",
      color: "white",
    },
  },
  AvatarProfile: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  buttonCreateNewList: {
    textTransform: "none",
    padding: theme.spacing(0.5),
    margin: theme.spacing(0, 2),
    width: 260,
    color: "#2D88FF",
    backgroundColor: "#2D88FF33",
    "&:hover": {
      borderRadius: 6,
      backgroundColor: "#424242",
    },
  },
  buttonManageList: {
    textTransform: "none",
    padding: theme.spacing(0.5),
    margin: theme.spacing(1, 2),
    width: 260,
    color: "#E4E6EB",
    backgroundColor: "#FFFFFF1A",
    "&:hover": {
      borderRadius: 6,
      backgroundColor: "#424242",
    },
  },
  divider: {
    color: "#424242",
    backgroundColor: "#424242",
    width: "96%",
    margin: "auto",
  },
}));
