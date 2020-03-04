import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";

const CustomInnerDialog = withStyles(theme => ({
    root: {
        minWidth: "1250px",
        minHeight: "1100px !important",
        height: "100%",
    },
    container: {
        height: "100vh",
        display: "flex",
        width: "100vw",
        justifyContent: "center",
        minWidth: "500px",
        marginLeft: "15px",
        marginTop: "75px",
    },
    scrollBody: {
        "&:after": {
            height: "100%",
        }
    },
    paperFullWidth: {
        maxWidth: "980px",
        maxHeight: "690px",
        minHeight: "350px",
        width: "calc(100vw - 250px)",
        minWidth: "350px",
        height: "calc(100% - 250px)",
        display: "inline-flex",
        flexDirection: "column",
        border: "none",
    },
    paperScrollBody: {
        verticalAlign: "middle",
    },
    scrollPaper: {
        alignItems: "flex-start",
    },
  }))(Dialog);
  
  export default CustomInnerDialog;