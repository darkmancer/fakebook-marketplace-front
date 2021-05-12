import { makeStyles } from "@material-ui/core/styles";
export const useStylesHeader = makeStyles((theme) => ({
  root: {
    "&:hover:not(.Mui-disabled)": {
      cursor: "pointer",
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#242526",
  },
}));
