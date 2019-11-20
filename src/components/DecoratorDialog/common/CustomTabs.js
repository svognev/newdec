import Tabs from "@material-ui/core/Tabs";
import { withStyles } from "@material-ui/core/styles";

const CustomTabs = withStyles(theme => ({
    indicator: {
        backgroundColor: "#1890ff",
        opacity: 0.5,
        width: "190px",
        zIndex: 5,
        display: "none",
      }
  }))(Tabs);

  export default CustomTabs;