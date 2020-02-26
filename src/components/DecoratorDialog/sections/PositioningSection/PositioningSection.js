import React from "react";
import { connect } from "react-redux";

import NativeSelect from "@material-ui/core/NativeSelect";
import Checkbox from "@material-ui/core/Checkbox";

import CustomInput from "../../common/CustomInput";
import CustomInputShort from "../../common/CustomInputShort";
import SectionTitle from "../../common/SectionTitle";
import { backSpaceActionsMap, decoratorsList, GLOBAL_FALLBACK_MARK } from "../../constants";
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

    const onBackspaceActionChange = e => {
        if (e.target.value === "apply_other_pd") {
            changeBackspaceActionWithContentStyle(null, GLOBAL_FALLBACK_MARK);
        } else if (backspaceActionWithContentStyle) {
            changeBackspaceActionWithContentStyle(null, "");
        }
        changeBackspaceActionWithContent(e);
    };

    const backSpaceActionStyleSettingsState = backspaceActionWithContent === "apply_other_pd" ? "shown" : "hidden";

    return (
        <div className="dialogGrid dialogGrid_2cols">
            <span>Indentational level</span>
            <div>
                <NativeSelect
                    value={indentationalLevel}
                    onChange={changeIndentationalLevel}
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

            <span>Fixed indentation</span>
            <div className="unlabeledCheckbox">
                <Checkbox 
                    checked={fixedIndentation}
                    onChange={changeisFixedIndentation}
                    color="primary" 
                />
            </div>
            
            <SectionTitle text="BACKSPACE" />

            <span>At the beginning of a section with content</span>
            <div className="dialogGrid dialogGrid_2cols">
                <div>
                    <NativeSelect 
                        value={backspaceActionWithContent}
                        onChange={onBackspaceActionChange}
                        input={ <BackSpaceActionInput /> }
                    >
                        {Array.from(backSpaceActionsMap).map(([key, value]) => (
                            <option value={key} key={key}>{value}</option>
                        ))}
                    </NativeSelect>
                </div>
                <div className={`optionalSettings optionalSettings_${backSpaceActionStyleSettingsState} wideSelectBox`}>
                    <NativeSelect
                        value={backspaceActionWithContentStyle}
                        onChange={changeBackspaceActionWithContentStyle}
                        input={ <CustomInput /> }
                    >
                        <option value={GLOBAL_FALLBACK_MARK}>Global Fallback Style</option>
                        { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
                    </NativeSelect>
                </div>
            </div>

            <SectionTitle text="RETURN" />


            <span>Style of next section</span>
            <div className="wideSelectBox">
                <NativeSelect
                    value={returnActionNextSection}
                    onChange={changeReturnActionNextSection}
                    input={ <CustomInput /> }
                >
                    <option value="">Nothing</option>
                    <option value={GLOBAL_FALLBACK_MARK}>Global Fallback Style</option>
                    { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
                </NativeSelect>
            </div>
            

            <span>PD for new section on return if empty</span>
            <div className="wideSelectBox">
                <NativeSelect 
                    value={returnActionEmptySection}
                    onChange={changeReturnActionEmptySection}
                    input={ <CustomInput /> }
                >
                    <option value="">Nothing</option>
                    <option value={GLOBAL_FALLBACK_MARK}>Global Fallback Style</option>
                    { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
                </NativeSelect>
            </div>

            <SectionTitle text="TAB / SHIFT+TAB" />

            <span>TAB – change current style to</span>
            <div className="wideSelectBox">
                <NativeSelect
                    value={tabAction}
                    onChange={changeTabAction}
                    input={ <CustomInput /> }
                >
                    <option value="">Nothing</option>
                    { decoratorsList.map(dec => <option value={dec.value} key={dec.value}>{dec.name}</option>) }
                </NativeSelect>
            </div>

            <span>SHIFT+TAB – change current style to</span>
            <div className="wideSelectBox">
                <NativeSelect
                    value={shiftTabAction}
                    onChange={changeShiftTabAction} 
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