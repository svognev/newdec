import React from "react";
import { connect } from "react-redux";

import Preview from "../common/Preview";
import ColorField from "../common/ColorField";
import ConnectToPreviousField from "../common/ConnectToPreviousField";
import { setColor } from "../actions";

const  FillingSection = ({ previewProps, fillingColor, changeFillingColor }) => {
    return (
        <div className="dialogGrid dialogGrid_2cols dialogGrid_flexStartAligned">
            <div className="dialogGrid dialogGrid_2minCols">
                <span>Filling color</span>
                <ColorField 
                    colorCode={fillingColor} 
                    changeColorCode={changeFillingColor}
                />
                <ConnectToPreviousField />
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
    };
};

const mapDispatchToProps = dispatch => {
    return {       
        changeFillingColor: setColor(dispatch)("fillingColor"),
    };
};
  
export default (connect(mapStateToProps, mapDispatchToProps)(FillingSection));