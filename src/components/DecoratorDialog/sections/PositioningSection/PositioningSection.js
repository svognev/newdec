import React from "react";
import { connect } from "react-redux";

import NativeSelect from "@material-ui/core/NativeSelect";

import CustomInput from "../../common/CustomInput";
import CustomInputShort from "../../common/CustomInputShort";
import { backSpaceActions, decoratorsList } from "../../constants";
import BackSpaceActionInput from "./BackSpaceActionInput";
import { setValue } from "../../actions";

import "./style.css";

const PositioningSection = props => {
    const {
        indentationalLevel, changeIndentationalLevel,
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
            
            <div id="r2" className="sectionTitle">
                <span>BACKSPACE</span>
            </div>

            <span id="r3c1">At the beginning of a section with content</span>
            <div className="dialogGrid dialogGrid_2cols">
                <div>
                    <NativeSelect 
                        value={backspaceActionWithContent}
                        onChange={changeBackspaceActionWithContent}
                        id="r3c2" 
                        input={ <BackSpaceActionInput /> }
                    >
                        {backSpaceActions.map(action => (
                            <option value={action.key} key={`backSpace ${action.key}`}>{action.value}</option>
                        ))}
                    </NativeSelect>
                </div>
                <div className={`optionalSettings optionalSettings_${backSpaceActionStyleSettingsState}`}>
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

            <div id="r4" className="sectionTitle">
                <span>RETURN</span>
            </div>

            <span id="r5c1">Style of next section</span>
            <div className="positioning-styleInputBox">
                <NativeSelect
                    value={returnActionNextSection}
                    onChange={changeReturnActionNextSection}
                    id="r5c2" 
                    input={ <CustomInput /> }
                >
                    <option value="">Nothing</option>
                    <option value="default">Global Fallback Style</option>
                    { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
                </NativeSelect>
            </div>
            

            <span id="r6c1">In empty section change current style to</span>
            <div className="positioning-styleInputBox">
                <NativeSelect 
                    value={returnActionEmptySection}
                    onChange={changeReturnActionEmptySection}
                    id="r6c2" 
                    input={ <CustomInput /> }
                >
                    <option value="">Nothing</option>
                    <option value="default">Global Fallback Style</option>
                    { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
                </NativeSelect>
            </div>

            <div id="r7" className="sectionTitle">
                <span>TAB / SHIFT+TAB</span>
            </div>

            <span id="r8c1">TAB – change current style to</span>
            <div className="positioning-styleInputBox">
                <NativeSelect
                    value={tabAction}
                    onChange={changeTabAction}
                    id="r8c2" 
                    input={ <CustomInput /> }
                >
                    <option value="">Nothing</option>
                    { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
                </NativeSelect>
            </div>

            <span id="r9c1">SHIFT+TAB – change current style to</span>
            <div className="positioning-styleInputBox">
                <NativeSelect
                    value={shiftTabAction}
                    onChange={changeShiftTabAction} 
                    id="r9c2" 
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
        changeReturnActionEmptySection: setValue(dispatch)("returnActionEmptySectionStyle"),
        changeTabAction: setValue(dispatch)("tabAction"),
        changeShiftTabAction: setValue(dispatch)("shiftTabAction"),
    };
};
  
export default (connect(mapStateToProps, mapDispatchToProps)(PositioningSection));