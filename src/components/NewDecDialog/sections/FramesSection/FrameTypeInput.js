import { withStyles } from "@material-ui/core/styles";
import CustomInputShort from "../../common/CustomInputShort";

const FrameTypeInput = withStyles(theme => ({
    root: {
      width: "110px",
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      fontFamily: [
        "Arial",
        "sans-serif",
      ].join(","),
    },
  }))(CustomInputShort);
  
  export default FrameTypeInput;