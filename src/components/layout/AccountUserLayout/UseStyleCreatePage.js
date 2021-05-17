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
    maxHeight: 700,
    overflow: "auto",
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
    height: 35,
    color: "white",
    backgroundColor: "#424242",
    "&:hover": {
      backgroundColor: "grey",
    },
  },
  ButtonPublish: {
    textTransform: "none",
    margin: theme.spacing(1),
    width: "95%",
    color: "white",
    height: 50,
    fontSize: "1.2rem",
    backgroundColor: "#2196F3",
    "&:hover": {
      backgroundColor: "#40c4ff",
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
  gridList: {
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  photo: {
    margin: theme.spacing(1),
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
  PaperMultiPhotos: {
    display: "flex",
    marginLeft: theme.spacing(2),
    width: "90%",
    backgroundColor: "#242526",

    minHeight: 200,
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
  ButtonAddMultiPhoto: {
    textTransform: "none",
    margin: theme.spacing(1),
    fontSize: "0.5rem",
    width: "14ch",
    height: 80,
    color: "white",
    backgroundColor: "#616161",
    "&:hover": {
      backgroundColor: "grey",
    },
  },
  CancelIcon: {
    position: "relative",
    bottom: 90,
    left: 68,
    color: "#616161",
    "&:hover": {
      color: "grey",
    },
    margin: theme.spacing(0.5, 2, 0, 0),
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
  InputTextField: {
    borderRadius: 6,
    margin: theme.spacing(2),
    width: "80%",
    "& .MuiInputBase-root": {
      color: "#eeeeee",
    },
    "& .MuiInputLabel-root": {
      color: "grey",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#757575",
      },

      "&:hover fieldset": {
        borderColor: "#757575",
      },
    },
  },
  InputTextFieldCategory: {
    borderRadius: 6,
    margin: theme.spacing(2),
    width: "80%",
    "& .MuiOutlinedInput-input": {
      color: "grey",
      borderRadius: 6,
    },
    "& .MuiInputLabel-root": {
      color: "grey",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "grey",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "grey",
    },
    "&:hover .MuiInputLabel-root": {
      color: "grey",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "grey",
      },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "grey",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "grey",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "grey",
      },
  },
  InputTag: {
    borderRadius: 6,
    margin: theme.spacing(2, 2, 0.5, 2),
    width: "80%",
    "& .MuiInputBase-root": {
      color: "#eeeeee",
    },
    "& .MuiInputLabel-root": {
      color: "grey",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#757575",
      },

      "&:hover fieldset": {
        borderColor: "#757575",
      },
    },
  },
  SelectIcon: { color: "grey" },
  labelTextField: {
    color: "grey",
  },
  iconTag: {
    color: "grey",
    fontSize: "1.5rem",
    "&:hover": {
      color: "white",
    },
  },
  paperTag: {
    display: "flex",

    flexWrap: "wrap",
    listStyle: "none",

    margin: theme.spacing(2),
  },
  chipTags: {
    margin: theme.spacing(0.5),
    backgroundColor: "grey",
  },
  BoostButton: {
    margin: theme.spacing(2),
    color: "grey",
  },
  flexBoost: {
    display: "flex",
    justifyContent: "space-around",
  },
  BoostText: {
    color: "grey",
    margin: theme.spacing(2),
  },
  flexPhotos: {
    margin: theme.spacing(2),

    display: "flex",
    flexWrap: "wrap",
  },
  CloseButton: {
    textTransform: "none",
    borderRadius: "70%",
    width: "4ch",
    height: 35,
    color: "white",
    margin: theme.spacing(1, 0.3),

    backgroundColor: "#424242",
    "&:hover": {
      backgroundColor: "grey",
    },
  },
}));

// root: {
//   '& label.Mui-focused': {
//     color: 'white',
//   },
//   '& .MuiInput-underline:after': {
//     borderBottomColor: 'yellow',
//   },
//   '& .MuiOutlinedInput-root': {
//     '& fieldset': {
//       borderColor: 'white',
//     },
//     '&:hover fieldset': {
//       borderColor: 'white',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: 'yellow',
//     },
// เปลียน borderTextField
// "&:hover fieldset": {
//   borderColor: "grey",
// },
//   },
// },
