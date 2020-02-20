import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";

const CustomDialog = withStyles(theme => ({
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
        minWidth: "700px",
    },
    scrollBody: {
        "&:after": {
            height: "100%",
        }
    },
    paperFullWidth: {
        maxWidth: "1280px",
        maxHeight: "850px",
        minHeight: "550px",
        width: "calc(100vw - 150px)",
        minWidth: "600px",
        height: "calc(100% - 96px)",
        display: "inline-flex",
        flexDirection: "column",
        border: "none",
    },
    paperScrollBody: {
        verticalAlign: "middle",
    },
  }))(Dialog);
  
  export default CustomDialog;