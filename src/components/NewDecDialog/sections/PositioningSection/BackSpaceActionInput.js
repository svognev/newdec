import { withStyles } from "@material-ui/core/styles";
import CustomInputShort from "../../common/CustomInputShort";

const BackSpaceActionInput = withStyles(theme => ({
    root: {
      minWidth: "175px",
      width: "175px",
    },
  }))(CustomInputShort);
  
  export default BackSpaceActionInput;