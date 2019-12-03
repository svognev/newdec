import React from "react";

import Tabs from "@material-ui/core/Tabs";
import { withStyles } from "@material-ui/core/styles";

class CustomTabs extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.value !== this.props.value;
    }

    render() {
        return (<Tabs {...this.props}/>);
    }
}

const styles = {
    indicator: {
        backgroundColor: "#1890ff",
        opacity: 0.5,
        width: "190px",
        zIndex: 5,
        display: "none",
    }
};

export default withStyles(styles)(CustomTabs);