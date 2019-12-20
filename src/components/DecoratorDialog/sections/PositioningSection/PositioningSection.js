import React from "react";
import { connect } from "react-redux";

import NativeSelect from "@material-ui/core/NativeSelect";
import Checkbox from "@material-ui/core/Checkbox";

import CustomInput from "../../common/CustomInput";
import CustomInputShort from "../../common/CustomInputShort";
import { backSpaceActions, decoratorsList } from "../../constants";
import BackSpaceActionInput from "./BackSpaceActionInput";
import { setValue, toggleValue } from "../../actions";

import "./style.css";

const PositioningSection = props => {
    const {
        indentationalLevel, changeIndentationalLevel,
        fixedIndentation, changeisFixedIndentation,
        backspaceActionWithContent, changeBackspaceActionWithContent,
        backspaceActionWithContentStyle, changeBackspaceActionWithContentStyle,
        returnActionNextSection, changeReturnActionNextSection,
        returnActionEmptySection, changeReturnActionEmptySection,
        tabAction, changeTabAction,
        shiftTabAction, changeShiftTabAction,
    } = props;

    const backSpaceActionStyleSettingsState = backspaceActionWithContent === "apply_other_pd" ? "shown" : "hidden";

    return (
        <div className="dialogGrid dialogGrid_positioning">
            <span id="r1c1">Identational level</span>
            <div>
                <NativeSelect
                    value={indentationalLevel}
                    onChange={changeIndentationalLevel}
                    id="r1c2" 
                    input={ <CustomInputShort /> }
                >
                    <option value="">...</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </NativeSelect>
            </div>

            <span id="r2c1">Fixed indentation</span>
            <div id="r2c2" className="unlabeledCheckbox">
                <Checkbox 
                    checked={fixedIndentation}
                    onChange={changeisFixedIndentation}
                    color="primary" 
                />
            </div>
            
            <div id="r3" className="sectionTitle">
                <span>BACKSPACE</span>
            </div>

            <span id="r4c1">At the beginning of a section with content</span>
            <div className="dialogGrid dialogGrid_2cols">
                <div>
                    <NativeSelect 
                        value={backspaceActionWithContent}
                        onChange={changeBackspaceActionWithContent}
                        id="r4c2" 
                        input={ <BackSpaceActionInput /> }
                    >
                        {backSpaceActions.map(action => (
                            <option value={action.key} key={`backSpace ${action.key}`}>{action.value}</option>
                        ))}
                    </NativeSelect>
                </div>
                <div className={`optionalSettings optionalSettings_${backSpaceActionStyleSettingsState} wideSelectBox`}>
                    <NativeSelect
                        value={backspaceActionWithContentStyle}
                        onChange={changeBackspaceActionWithContentStyle}
                        input={ <CustomInput /> }
                    >
                        <option value="default">Global Fallback Style</option>
                        { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
                    </NativeSelect>
                </div>
            </div>

            <div id="r5" className="sectionTitle">
                <span>RETURN</span>
            </div>

            <span id="r6c1">Style of next section</span>
            <div className="wideSelectBox">
                <NativeSelect
                    value={returnActionNextSection}
                    onChange={changeReturnActionNextSection}
                    id="r6c2" 
                    input={ <CustomInput /> }
                >
                    <option value="">Nothing</option>
                    <option value="default">Global Fallback Style</option>
                    { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
                </NativeSelect>
            </div>
            

            <span id="r7c1">In empty section change current style to</span>
            <div className="wideSelectBox">
                <NativeSelect 
                    value={returnActionEmptySection}
                    onChange={changeReturnActionEmptySection}
                    id="r7c2" 
                    input={ <CustomInput /> }
                >
                    <option value="">Nothing</option>
                    <option value="default">Global Fallback Style</option>
                    { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
                </NativeSelect>
            </div>

            <div id="r8" className="sectionTitle">
                <span>TAB / SHIFT+TAB</span>
            </div>

            <span id="r9c1">TAB – change current style to</span>
            <div className="wideSelectBox">
                <NativeSelect
                    value={tabAction}
                    onChange={changeTabAction}
                    id="r9c2" 
                    input={ <CustomInput /> }
                >
                    <option value="">Nothing</option>
                    { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
                </NativeSelect>
            </div>

            <span id="r10c1">SHIFT+TAB – change current style to</span>
            <div className="wideSelectBox">
                <NativeSelect
                    value={shiftTabAction}
                    onChange={changeShiftTabAction} 
                    id="r10c2" 
                    input={ <CustomInput /> }
                >
                    <option value="">Nothing</option>
                    { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
                </NativeSelect>
            </div>
        </div>
    );
}

const mapStateToProps = ({ decoratorDialog: { form }}) => {
    return { 
        indentationalLevel: form.indentationalLevel,
        backspaceActionWithContent: form.backspaceActionWithContent,
        backspaceActionWithContentStyle: form.backspaceActionWithContentStyle,
        returnActionNextSection: form.returnActionNextSection,
        returnActionEmptySection: form.returnActionEmptySection,
        tabAction: form.tabAction,
        shiftTabAction: form.shiftTabAction,
        fixedIndentation: form.fixedIndentation,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeIndentationalLevel: setValue(dispatch)("indentationalLevel"),
        changeBackspaceActionWithContent: setValue(dispatch)("backspaceActionWithContent"),
        changeBackspaceActionWithContentStyle: setValue(dispatch)("backspaceActionWithContentStyle"),
        changeBackspaceActionWithoutContent: setValue(dispatch)("backspaceActionWithoutContent"),
        changeBackspaceActionWithoutContentStyle: setValue(dispatch)("backspaceActionWithoutContentStyle"),
        changeReturnActionNextSection: setValue(dispatch)("returnActionNextSection"),
        changeReturnActionEmptySection: setValue(dispatch)("returnActionEmptySection"),
        changeTabAction: setValue(dispatch)("tabAction"),
        changeShiftTabAction: setValue(dispatch)("shiftTabAction"),
        changeisFixedIndentation: toggleValue(dispatch)("fixedIndentation"),
    };
};
  
export default (connect(mapStateToProps, mapDispatchToProps)(PositioningSection));