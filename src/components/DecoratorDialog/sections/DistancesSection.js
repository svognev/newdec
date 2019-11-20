import React from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputAdornment from "@material-ui/core/InputAdornment";

import CustomInputShort from "../common/CustomInputShort";
import Preview from "../common/Preview";
import { setValue, setNumber } from "../actions";
import { DEFAULT_MARGIN, DEFAULT_WORD_SPACING } from "../constants";
import { selectAllOnClick, focusInput, changeAndScroll } from "../helpers";

class DistancesSection extends React.Component {
    customLineSpacingInputRef = React.createRef();

    onLineSpacingChange = e => {
        this.props.changeLineSpacing(e);
        if (e.target.value === "custom") {
            focusInput(this.customLineSpacingInputRef);
        }
    };

    render() {
        const {
            previewProps,
            marginTop, changeMarginTop,
            marginBottom, changeMarginBottom,
            firstRowIndent, changeFirstRowIndent,
            otherRowsIndent, changeOtherRowsIndent,
            lineSpacing,
            customLineSpacing, changeCustomLineSpacing,
            wordSpacing, changeWordSpacing,
        } = this.props;

        const optionalFieldState = lineSpacing === "custom" ? "optionalField_shown" : "optionalField_hidden";
        
        return (
            <div className="dialogGrid dialogGrid_2cols dialogGrid_flexStartAligned">
                <div className="flexibleGrid">
                    <span>Margin top</span>
                    <div className="inputWithAdornment">
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            className="numberInput"
                            value={marginTop}
                            onChange={changeMarginTop}
                            onClick={selectAllOnClick(DEFAULT_MARGIN)}
                        />                                            
                        <InputAdornment variant="filled" position="end">pt</InputAdornment>
                    </div> 
    
                    <span>Margin bottom</span>
                    <div className="inputWithAdornment">
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            className="numberInput"
                            value={marginBottom}
                            onChange={changeMarginBottom}
                            onClick={selectAllOnClick(DEFAULT_MARGIN)}
                        />                                            
                        <InputAdornment variant="filled" position="end">pt</InputAdornment>
                    </div> 
    
                    <span>1st row indent</span>
                    <div className="inputWithAdornment">
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            className="numberInput"
                            value={firstRowIndent}
                            onChange={changeFirstRowIndent}
                        />                                            
                        <InputAdornment variant="filled" position="end">cm</InputAdornment>
                    </div>
    
                    <span>Other rows indent</span>
                    <div className="inputWithAdornment">
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            className="numberInput"
                            value={otherRowsIndent}
                            onChange={changeOtherRowsIndent}
                        />                                            
                        <InputAdornment variant="filled" position="end">cm</InputAdornment>
                    </div>
    
                    <span>Line spacing</span>
                    <div>
                        <NativeSelect 
                            input={ <CustomInputShort /> } 
                            value={lineSpacing} 
                            onChange={changeAndScroll(this.onLineSpacingChange, 500)} 
                        >
                            <option value="1.0">1.0</option>
                            <option value="1.15">1.15</option>
                            <option value="1.5">1.5</option>
                            <option value="2.0">2.0</option>
                            <option value="2.5">2.5</option>
                            <option value="3.0">3.0</option>
                            <option value="custom" className="highlightedOption">Custom</option>
                        </NativeSelect> 
                    </div>

                    <div className={`optionalField ${optionalFieldState}`}>
                    </div>
                    <div className={`optionalField ${optionalFieldState}`}>
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            className="numberInput"
                            value={customLineSpacing}
                            onChange={changeCustomLineSpacing}
                            placeholder="Your value"
                            inputRef={this.customLineSpacingInputRef}
                        />                                            
                    </div>
                        
                    <span>Word spacing</span>
                    <div className="inputWithAdornment">
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            className="numberInput"
                            value={wordSpacing}
                            onChange={changeWordSpacing}
                            onClick={selectAllOnClick(DEFAULT_WORD_SPACING)}
                        />                                            
                        <InputAdornment variant="filled" position="end">pt</InputAdornment>
                    </div> 
                </div>
                <div className="previewSide">
                    <Preview {...previewProps} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ decoratorDialog: { form }}) => {
    return { 
        marginTop: form.marginTop,
        marginBottom: form.marginBottom,
        firstRowIndent: form.firstRowIndent,
        otherRowsIndent: form.otherRowsIndent,
        lineSpacing: form.lineSpacing,
        customLineSpacing: form.customLineSpacing,
        wordSpacing: form.wordSpacing,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeMarginTop: setNumber(dispatch)("marginTop"),
        changeMarginBottom: setNumber(dispatch)("marginBottom"),
        changeFirstRowIndent: setNumber(dispatch)("firstRowIndent"),
        changeOtherRowsIndent: setNumber(dispatch)("otherRowsIndent"),
        changeLineSpacing: setValue(dispatch)("lineSpacing"),
        changeCustomLineSpacing: setNumber(dispatch)("customLineSpacing"),
        changeWordSpacing: setNumber(dispatch)("wordSpacing"),
    };
};
  
export default (connect(mapStateToProps, mapDispatchToProps)(DistancesSection));