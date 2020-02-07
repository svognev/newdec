import React from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputAdornment from "@material-ui/core/InputAdornment";

import CustomInputShort from "../common/CustomInputShort";
import Preview from "../common/Preview";
import { setValue, setNumber } from "../actions";
import { DEFAULT_MARGIN, DEFAULT_WORD_SPACING, lineSpacings } from "../constants";
import { selectAllOnClick, focusInput, changeAndScroll } from "../helpers";
import ConnectToPreviousField from "../common/ConnectToPreviousField";

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
            connectToPrevious,
            marginTop, changeMarginTop,
            marginBottom, changeMarginBottom,
            firstRowIndent, changeFirstRowIndent,
            otherRowsIndent, changeOtherRowsIndent,
            lineSpacing,
            customLineSpacing, changeCustomLineSpacing,
            wordSpacing, changeWordSpacing,
        } = this.props;

        const customLineSpacingFieldState = lineSpacing === "custom" ? "optionalField_shown" : "optionalField_hidden";
        const marginFieldsState = !connectToPrevious ? "optionalField_shown" : "optionalField_hidden";

        return (
            <div className="dialogGrid dialogGrid_2cols dialogGrid_flexStartAligned">
                <div className="flexibleGrid">
                    <ConnectToPreviousField />
                    <div className={`optionalField optionalField ${marginFieldsState}`}>
                      <span>Margin top</span>
                    </div>
                    <div className={`inputWithAdornment optionalField ${marginFieldsState}`}>
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
    
                    <div className={`optionalField ${marginFieldsState}`}>
                        <span>Margin bottom</span>
                    </div>

                    <div className={`inputWithAdornment optionalField ${marginFieldsState}`}>
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
                            { lineSpacings.map(value => (
                                <option value={value} key={value}>{value}</option>
                            ))}
                            <option value="custom" className="highlightedOption">Custom</option>
                        </NativeSelect> 
                    </div>

                    <div className={`optionalField ${customLineSpacingFieldState}`}>
                    </div>
                    <div className={`optionalField ${customLineSpacingFieldState}`}>
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
        connectToPrevious: form.connectToPrevious,
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
        changeCustomLineSpacing: setValue(dispatch)("customLineSpacing"),
        changeWordSpacing: setNumber(dispatch)("wordSpacing"),
    };
};
  
export default (connect(mapStateToProps, mapDispatchToProps)(DistancesSection));