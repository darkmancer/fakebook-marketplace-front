import { makeStyles } from "@material-ui/core/styles";
export const useStylesHeader = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#242526",
  },
}));
