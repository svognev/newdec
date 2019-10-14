import React from "react";

import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";

const CustomTab = withStyles(theme => ({
    root: {
      overflow: "initial",
      backgroundColor: "white",
      transition: "0.2s",

      "&:before": {
        transition: "0.2s",
      },

      "&:hover": {
        color: "#000",
      },
      "&$selected": {
        backgroundColor: "#2196f3",
        color: "white",
        opacity: 1,
      },
      "&:hover:active": {
        backgroundColor: "white",
        transition: "0.2s",
      },
      "&$selected:hover:active": {
        backgroundColor: "#2ca4ff",
      },
    },
    selected: {},
    
  }))(props => <Tab {...props} />);

  export default CustomTab;