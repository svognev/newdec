import React from "react";
import { connect } from "react-redux";

import Checkbox from "@material-ui/core/Checkbox";

import Preview from "../common/Preview";
import ColorField from "../common/ColorField";
import { toggleValue, setColor } from "../actions";

const  FillingSection = props => {
    const { 
        previewProps,
        fillingColor, changeFillingColor,
        fillingConnectToPrevious, changefillingConnectToPrevious,
    } = props;

    return (
        <div className="dialogGrid dialogGrid_2cols dialogGrid_flexStartAligned">
            <div className="dialogGrid dialogGrid_2minCols">
                <span>Filling color</span>
                <ColorField 
                    colorCode={fillingColor} 
                    changeColorCode={changeFillingColor}
                />

                <span>Connect to previous</span>
                <div className="unlabeledCheckbox">
                    <Checkbox 
                        color="primary" 
                        checked={fillingConnectToPrevious} 
                        onChange={changefillingConnectToPrevious} 
                    />
                </div>
            </div>
            <div className="previewSide">
                <Preview {...previewProps} />
            </div>
            
        </div>
    );
};

const mapStateToProps = ({ decoratorDialog: { form }}) => {
    return { 
        fillingColor: form.fillingColor,
        fillingConnectToPrevious: form.fillingConnectToPrevious,
    };
};

const mapDispatchToProps = dispatch => {
    return {       
        changeFillingColor: setColor(dispatch)("fillingColor"),
        changefillingConnectToPrevious: toggleValue(dispatch)("fillingConnectToPrevious"),
    };
};
  
export default (connect(mapStateToProps, mapDispatchToProps)(FillingSection));