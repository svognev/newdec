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
// const decPropsMap = new Map(Object.keys(decProps.reduce((acc, cur) => {})));
class DecDataParser {
    static parseToSend(dec) {
        return dec;
    }

    static parseToEdit(dec) {
        return dec;
    }

    static mapDecFields = {};
}

export default DecDataParser;