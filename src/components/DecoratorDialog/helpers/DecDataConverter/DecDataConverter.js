import { 
    sectionTypesMap, 
    bulletNamesMap, 
    orderedListStylesMap,
    initialFormState,
} from "../../constants";
import {
    replaceDecNameIfDefault,
    getNumber,
    getNumberString,
    getNumeratedListPattern,
    getStyleString,
    getSideNumberStyleString,
    getStylesObject,
} from "./converterUtils";
import decToSendDefaultProps from "./decToSendDefaultProps";
import { unicodeNumberToChar, getShortCutUtils } from "../index";

class DecDataConverter {
    static convertToSend(rawDec) {
        const dec = {};
        // eslint-disable-next-line
        for (let key in rawDec) {
            dec[key] = rawDec[key] !== "" ? rawDec[key] : null;
        }

        const res = {};
        res.key = dec.decKey;
        res.section_types = Object.entries(dec.sectionTypes).filter(([, value]) => value).map(([key]) => key);
        res.hidden = !dec.active;
        res.name = dec.name;

        res.initial_indentation = getNumber(dec.indentationalLevel);
        res.is_fixed_indentation = dec.fixedIndentation;
        res.content_in_second_line = dec.softReturn;
        res.backspace_action = dec.backspaceActionWithContent;
        res.backspace_action_value = replaceDecNameIfDefault(dec.backspaceActionWithContentStyle);
        res.create_new_section_on_return_if_empty = !!dec.returnActionNextSection;
        res.pd_for_new_section_on_return_if_empty = replaceDecNameIfDefault(dec.returnActionNextSection);
        res.pd_for_current_section_on_return_if_empty = !!dec.returnActionEmptySection;
        res.change_pd_on_return_if_empty = replaceDecNameIfDefault(dec.returnActionEmptySection);
        res.on_tab_key = dec.tabAction;
        res.on_shift_tab_key = dec.shiftTabAction;

        if (dec.isList) {
            res.list_key = dec.listName;
            res.item_order = dec.orderLevel ? getNumber(dec.orderLevel) : null;
            res.extra_hanging_indentation = dec.suffixDistance === "0.5" ? null : `${dec.suffixDistance}cm`;
            res.extra_hanging_indentation_at_grid = dec.magicTabs;
            if (dec.listType === "ordered") {
                // for ordered list
                res.numerated_list_format = dec.numberingStyle;
                if (dec.patternMode) {
                    // for composite numbering
                    res.numerated_list_pattern = dec.listPattern;
                } else {
                    // for simple numbering
                    res.numerated_list_pattern = getNumeratedListPattern(dec.orderLevel, dec.prefix, dec.suffix);
                }
                res.is_auto_restart_numbering = !dec.continueNumbering;
                res.allow_restart_numbering = dec.allowRestartNumbering;
                res.numerated_list_start = dec.includePreviousFrom;
                res.numerated_list_style = "styles settings";
            } else {
                // for unordered list
                if ((dec.listItem === "custom" && !dec.unicodeNumber)) {
                    res.bullet_list_format = null;
                } else if (dec.listItem === "string") {
                    res.bullet_list_format = dec.listItemString;
                } else {
                    res.bullet_list_format = `\\${dec.unicodeNumber || dec.listItem}`;
                }
            }
        }

        if (dec.referenceGroup) {
            res.xref_target_type_group_key = dec.referenceGroup;
            res.is_possible_xref_target = true;
        }

        if (dec.alignment && dec.alignment !== "left") {
            res.style_properties = { alignment: dec.alignment };
        }
        res.read_only = dec.readOnly;

        if (dec.tocIndentation) {
            res.show_in_editor_toc = true;
            res.editor_toc_indentation = +dec.tocIndentation;
            res.editor_toc_filter_level = +dec.tocIndentation;
        }

        if (dec.shortCutMac) {
            res.keyboard_shortcut = dec.shortCutMac;
        }

        res.editor_style = getStyleString(rawDec, initialFormState);
        res.numerated_list_style = dec.sideNumber ? getSideNumberStyleString(rawDec) : "";

        const unchangingProps = {
            group: rawDec.group,
            groupToCreate: rawDec.groupToCreate,
            referenceGroup: rawDec.referenceGroup,
            referenceGroupToCreate: rawDec.referenceGroupToCreate,
            shortCutWin: rawDec.shortCutWin,
            shortCutWinView: rawDec.shortCutWinView,
        };
                
        console.log("send", {...decToSendDefaultProps, ...res});

        return { ...rawDec, ...decToSendDefaultProps, ...res,  ...unchangingProps };
    }

    static convertToEdit(rawDec) {
        const dec = {};
        // eslint-disable-next-line
        for (let key in rawDec) {
            dec[key] = rawDec[key] !== null ? rawDec[key] : "";
        }

        const res = {};
        res.decKey = dec.key;
        res.sectionTypes = Array.from(sectionTypesMap).map(([ key ]) => key).reduce((acc, cur) => ({
            ...acc,
            [cur]: dec.section_types.includes(cur),
        }), {});
        res.active = !dec.hidden;
        res.name = dec.name;

        res.indentationalLevel = getNumberString(dec.initial_indentation);
        res.fixedIndentation = dec.is_fixed_indentation;
        res.softReturn = dec.content_in_second_line;
        res.backspaceActionWithContent = dec.backspace_action;
        res.backspaceActionWithContentStyle = replaceDecNameIfDefault(dec.backspace_action_value);
        res.returnActionNextSection = replaceDecNameIfDefault(dec.pd_for_current_section_on_return_if_empty);
        res.returnActionEmptySection = replaceDecNameIfDefault(dec.pd_for_new_section_on_return_if_empty);
        res.tabAction = dec.on_tab_key;
        res.shiftTabAction = dec.on_shift_tab_key;

        // res.numerated_list_format, dec.prefix, dec.suffix, dec.OrderLevel
        if (dec.list_key || dec.bullet_list_format) {
            res.isList = true;
            res.listName = dec.list_key;
            res.orderLevel = dec.item_order ? getNumberString(dec.item_order) : "0";
            const suffixDistanceMatch = `${(dec.extra_hanging_indentation||"0.5cm")}`.match(/[\d.]*/);
            res.suffixDistance = suffixDistanceMatch ? suffixDistanceMatch[0] : "0.5";
            res.magicTabs = dec.extra_hanging_indentation_at_grid;
            if (dec.numerated_list_pattern) {
                // for ordered list
                res.listType = "ordered";
                if (/{.*?{/.test(dec.numerated_list_pattern)) {
                    // for composite numbering
                    res.patternMode = true;
                    res.listPattern = dec.numerated_list_pattern;
                } else {
                    // for simple numbering
                    const prefixAndSuffixMatch = dec.numerated_list_pattern.match(/(.*?){.*}(.*)/);
                    if (prefixAndSuffixMatch) {
                        res.prefix = prefixAndSuffixMatch[1] || "";
                        res.suffix = prefixAndSuffixMatch[2] || "";
                    }
                }
                res.numberingStyle = orderedListStylesMap.has(dec.numerated_list_format) ? dec.numerated_list_format : "decimal";
                res.continueNumbering = !dec.is_auto_restart_numbering;
                res.allowRestartNumbering = dec.allow_restart_numbering;
                res.includePreviousFrom = dec.numerated_list_start;
            } else {
                // for unordered list
                res.listType = "unordered";
                if ((dec.bullet_list_format || "").match(/^\\[\da-f]+/i)) {
                    const bullet = dec.bullet_list_format.slice(1);
                    if (bulletNamesMap.has(bullet)) {
                        res.listItem = bullet;
                    } else {
                        res.listItem = "custom";
                        res.unicodeNumber = bullet;
                        res.unicodeChar = unicodeNumberToChar(bullet);
                    }
                } else {
                    // strings or empty bullets
                    res.listItem = dec.bullet_list_format ? "string" : "custom";
                    res.listItemString = dec.bullet_list_format;
                }
            }
        }

        res.referenceGroup = dec.xref_target_type_group_key || "";

        if (dec.style_properties.alignment) {
            res.alignment = dec.style_properties.alignment;
        }
        res.readOnly = !!dec.read_only;
        res.tocIndentation = getNumberString(dec.editor_toc_indentation);

        if ((dec.keyboard_shortcut||{}).hasOwnProperty("keyCode")) {
            res.shortCutMac = dec.keyboard_shortcut;
            res.shortCutMacView = getShortCutUtils("MacOS").convertShortcutToString(dec.keyboard_shortcut);
        }

        const stylesProps = getStylesObject(dec.editor_style, dec.numerated_list_style);

        const unchangingProps = {
            group: rawDec.group,
            groupToCreate: rawDec.groupToCreate,
            referenceGroup: rawDec.referenceGroup,
            referenceGroupToCreate: rawDec.referenceGroupToCreate,
            shortCutWin: rawDec.shortCutWin,
            shortCutWinView: rawDec.shortCutWinView,
        };

        console.log("recieve", { ...initialFormState, ...res, ...stylesProps });

        return { ...rawDec, ...initialFormState, ...res, ...stylesProps, ...unchangingProps };
    }

    static mapDecFields = {};
}

export default DecDataConverter;