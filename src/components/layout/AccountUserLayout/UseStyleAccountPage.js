import { makeStyles } from "@material-ui/core";
const drawerWidth = 300;
export const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: 240,
      flexShrink: 0,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  //ถ้า sm ขึ้นไปจะทำอะไร
  content: {
    [theme.breakpoints.up("sm")]: {
      width: 240,
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      flexShrink: 0,
      padding: theme.spacing(1),
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${240}px)`,
    },
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
  RadioCheck: {
    color: "#424242",
    "&.MuiRadio-colorSecondary.Mui-checked": {
      color: "#2D88FF",
    },
  },
  paperContent: {
    position: "relative",
    top: 260,
    left: 600,
    textAlign: "center",
    width: "30ch",
  },
  buttonListings: {
    padding: theme.spacing(2),

    "&:hover": {
      borderRadius: 6,
      backgroundColor: "#424242",
    },
  },
  buttonListingsClicked: {
    backgroundColor: "#2196f3",
    borderRadius: 6,
    padding: theme.spacing(2),
    "&:hover": {
      borderRadius: 6,
      backgroundColor: "#42a5f5",
    },
    // "$.MuiListItem-button": {
    //   borderRadius: 6,
    // },
  },
  boxContentListType: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    position: "relative",
    left: 120,
    height: 600,
  },
  divCategoryList: {
    maxWidth: "200px",
    height: 180,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#242526",
    borderRadius: 6,
    textAlign: "center",
    margin: theme.spacing(0, 1),
    padding: theme.spacing(3, 1, 2, 1),
    "&:hover": {
      borderRadius: 6,
      backgroundColor: "#424242",
    },
  },
  AvatarList: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  contentList: {
    color: "#bdbdbd",
  },
  FlexListCate: {
    display: "flex",
    flexWrap: "wrap",
  },
  contentHaveListing: {
    position: "fixed",
    top: 80,
    left: 400,
  },
  contentCommenceProfile: {
    position: "fixed",
    top: 80,
    left: 1120,
  },
  paperSearchListing: {
    backgroundColor: "#242526",
    width: "80ch",
    display: "flex",
    borderRadius: 10,
    padding: theme.spacing(1, 1),

    justifyContent: "space-between",
  },

  paperCommence: {
    backgroundColor: "#242526",
    width: "30ch",
    display: "flex",
    borderRadius: 10,
    padding: theme.spacing(1, 1),

    justifyContent: "space-between",
  },
  ButtonSearch: {
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    margin: theme.spacing(2),
    height: 40,
    "&.MuiFormControl-root": {
      flexDirection: "row",
    },
  },
  iconSearch: {
    color: "#424242",
    marginRight: 10,
  },
  FlexAvatar: {
    display: "flex",
    margin: theme.spacing(2, 1),
  },
  NameAvatar: {
    color: "white",
    margin: theme.spacing(0.5),
  },
  ActiveListings: {
    color: "#bdbdbd",
    margin: theme.spacing(0.5),
  },
  AvatarCommence: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  buttonCreateNewListAvatar: {
    textTransform: "none",
    padding: theme.spacing(0.5),
    margin: theme.spacing(0.5, 0.5),
    width: 250,
    color: "#2D88FF",
    backgroundColor: "#2D88FF33",
    "&:hover": {
      borderRadius: 6,
      backgroundColor: "#2851A3",
    },
  },
  buttonProfile: {
    textTransform: "none",
    padding: theme.spacing(0.5),
    margin: theme.spacing(0.5, 0.5),
    width: 250,
    color: "white",
    backgroundColor: "#424242",
    "&:hover": {
      borderRadius: 6,
      backgroundColor: "#616161",
    },
  },
  paper: {
    position: "absolute",
    width: "60ch",
    borderRadius: 4,
    overflow: "scroll",
  },
  paperCommenceModal: {
    backgroundColor: "#242526",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  CommenceHeaderModal: {
    textAlign: "center",
    color: "white",
  },
  AvatarCommenceModal: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: theme.spacing(2, 0, 0, 0),
    position: "relative",
    left: 220,
  },
  nameCommenceModal: {
    color: "white",
    textAlign: "center",
  },
  buttonCommenceModal: {
    textTransform: "none",
    padding: theme.spacing(0.5),
    margin: theme.spacing(0.5, 0.5),
    width: 100,
    color: "white",
    borderRadius: 6,
    backgroundColor: "#424242",
    "&:hover": {
      borderRadius: 6,
      backgroundColor: "#616161",
    },
  },
  FlexCenter: {
    display: "flex",
    justifyContent: "center",
  },
  DividerModal: {
    width: "96%",
    margin: "auto",
    backgroundColor: "#616161",
  },
  RatingModal: {
    color: "#616161",
    fontSize: 36,
  },
  RatingText: {
    color: "#616161",
    fontSize: 20,
  },
  RatingsubText: {
    color: "#616161",
    fontSize: 14,
  },
  RatingHead: {
    color: "white",
    fontSize: 24,
  },
  FlexIcon: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  IconHome: {
    marginRight: 5,
    color: "white",
  },
  TextHome: {
    color: "white",
    fontSize: 20,
    margin: theme.spacing(0, 1),
  },
  paperImg: {
    borderRadius: 6,
    margin: theme.spacing(1),
    height: theme.spacing(16),
    width: theme.spacing(16),
  },
  GridFlex: {
    display: "flex",
    flexDirection: "row",
  },
}));
