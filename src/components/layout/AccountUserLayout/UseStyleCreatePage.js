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
  HeadersTitle: {
    color: "white",
    fontSize: "1.5rem",
    margin: theme.spacing(1),
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

    height: 200,
  },
  ButtonAddPhoto: {
    textTransform: "none",
    margin: theme.spacing(1),
    width: "18ch",
    color: "white",
    backgroundColor: "#616161",
    "&:hover": {
      backgroundColor: "grey",
    },
  },
  inputPhoto: {
    display: "none",
  },
  flexPageCreateItem: {
    display: "flex",
    flexDirection: "row",
  },
  PaperPreviewPhoto: {
    marginTop: theme.spacing(14),
    marginLeft: theme.spacing(4),
    width: "60%",
    backgroundColor: "#242526",
    borderRadius: 14,
  },
  PreviewTitle: {
    fontSize: "1.2rem",
    color: "white",
    margin: theme.spacing(2),
  },
  PreviewPhotoContent: {
    width: "95%",
    height: 500,
    margin: "auto",
    borderRadius: 6,
    marginBottom: theme.spacing(2.5),
    display: "flex",
    flexDirection: "flex-start",
  },
  divInPreview: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    borderRadius: "6px 0px 0px 6px",
    backgroundColor: "#424242",
  },
  textInDiv: {
    fontSize: "1.5rem",

    color: "#616161",
  },
  titlePreview: {
    fontSize: "1.5rem",
    color: "white",
    margin: theme.spacing(2),
  },
  contentPreview: {
    fontSize: "1rem",
    color: "white",
    margin: theme.spacing(2),
  },
  ContainerContentPreview: {
    width: 450,
    overflow: "auto",
  },
  DividerModal: {
    width: "96%",
    margin: "auto",
    backgroundColor: "#616161",
  },
  NamePreview: {
    color: "white",
    margin: theme.spacing(1),
  },
  SellerPreview: {
    fontSize: "1.2rem",
    color: "white",
    margin: theme.spacing(2),
  },
}));
