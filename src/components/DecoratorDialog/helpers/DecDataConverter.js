//const decProps = {
//    key: "decKey",
//    name: "name",
//    initial_indentation: "indentationalLevel",
//    backspace_action: "backspaceActionWithContent",
//    item_order: "orderLevel",
//    numerated_list_format: "numberingStyle",
//};
//
//
//
//const modification = {
//    hidden: "active",
//    backspace_action_value: "backspaceActionWithContentStyle",
//    create_new_section_on_return_if_empty: "returnActionNextSection", 
//    pd_for_new_section_on_return_if_empty: "returnActionNextSection",
//    change_pd_on_return_if_empty: "change_pd_on_return_if_empty",
//    pd_for_current_section_on_return_if_empty: "pd_for_current_section_on_return_if_empty",
//    on_tab_key: "tabAction",
//    on_shift_tab_key: "shiftTabAction",
//    list_key: "listName",
//
//}
import { sectionTypesMap, GLOBAL_FALLBACK_MARK } from "../constants";

const replaceDecNameIfDefault = decName => {
    if (decName === DEFAULT_DECORATOR) {
        return GLOBAL_FALLBACK_MARK;
    }
    if (decName === GLOBAL_FALLBACK_MARK) {
        return DEFAULT_DECORATOR;
    }
    return decName;
};
const getNumber = val => val ? +val : null;
const getNumberString = val => typeof val === "number" ? `${val}` : "";
const DEFAULT_DECORATOR = "Text 2000";

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
        res.change_pd_on_return_if_empty = !!dec.returnActionEmptySection;
        res.pd_for_current_section_on_return_if_empty = replaceDecNameIfDefault(dec.returnActionEmptySection);
        res.on_tab_key = dec.tabAction;
        res.on_shift_tab_key = dec.shiftTabAction;
        
        res.list_key = dec.listKey;
        res.item_order = getNumber(dec.orderLevel);
        // res.numerated_list_format, dec.prefix, dec.suffix, dec.OrderLevel
        res.extra_hanging_indentation = dec.suffixDistance === "0.25" ? null : `${dec.suffixDistance}cm`;
        res.extra_hanging_indentation_at_grid = dec.magicTabs;
        //const hasCustomBulletButEmpty = dec.listItem === "custom" && !dec.unicodeNumber;
        //res.bullet_list_format = hasCustomBulletButEmpty ? null : `\\${dec.unicodeNumber || dec.listItem}`;

        console.log(res);

        return { ...rawDec, ...res };
    }

    static convertToEdit(rawDec) {
        const dec = {};
        // eslint-disable-next-line
        for (let key in rawDec) {
            dec[key] = rawDec[key] !== null ? rawDec[key] : "";
        }

        const res = {};
        res.decKey = dec.key;
        res.sectionTypes = sectionTypesMap.map(({ key }) => key).reduce((acc, cur) => ({
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
        res.returnActionNextSection = replaceDecNameIfDefault(dec.pd_for_new_section_on_return_if_empty);
        res.returnActionEmptySection = replaceDecNameIfDefault(dec.pd_for_current_section_on_return_if_empty);
        res.tabAction = dec.on_tab_key;
        res.shiftTabAction = dec.on_shift_tab_key;
        // res.numerated_list_format, dec.prefix, dec.suffix, dec.OrderLevel
        const suffixDistanceMatch = `${(dec.extra_hanging_indentation||"0.25cm")}`.match(/[\d.]*/);
        res.suffixDistance = suffixDistanceMatch ? suffixDistanceMatch[0] : "0.25";
        //res.listItem = bullet_list_format
        console.log(res);

        return { ...rawDec, ...res };
    }

    static mapDecFields = {};
}

export default DecDataConverter;