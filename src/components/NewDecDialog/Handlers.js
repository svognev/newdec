import getShortCutUtils from "./utils/getShortCutUtils";

const Handlers = (update, formState) => class {    
    static toggleStateProperty = propName => e => {
        update({
            [propName]: e.target.checked
        });
    };

    static setStateProperty = propName => (e, secondArg = "") => {
        const newValue = (e && e.target.value !== "" && e.target.value !== undefined) ? e.target.value : secondArg;
        update({
            [propName]: newValue,
        });
    };

    static setBullet = propName => e => {
        const newBullet = e.target.value.length > 1 ? e.target.value[e.target.value.length - 1] : e.target.value;
        update({
            [propName]: newBullet,
        });
        return newBullet;
    };

    static setColor = propName => (e, secondArg) => {
        let input = e ? (e.target.value || "") : secondArg;
        
        const filteredInput = input.replace("#", "").trim().match(/[0-9a-f]+/i) 
                              ? input.replace("#", "").trim().match(/[0-9a-f]+/i)[0].slice(0, 6)
                              : "" ;
        
        if (filteredInput !== formState[propName]) {
            update({
                [propName]: filteredInput,
            });
        }
        return filteredInput;
    };

    static setNumber = propName => e => {
        let input = e.target.value || "";

        const filteredInput = input.replace(",", ".").trim().match(/[0-9]+/i) 
                              ? input.replace(",", ".").trim().match(/\d+[.,]?\d*/)[0]
                              : "" ;

        if (filteredInput !== formState[propName]) {
          update({
              [propName]: filteredInput,
          });
        }
        return filteredInput;
    };

    static setShortCut = (valuePropName, viewPropName, isMac) => e => {
        const systemName = isMac ? "MacOS" : "Windows";
        const shortCut = getShortCutUtils(systemName).convertEventToShortCut(e);
        if (shortCut && shortCut.deleteKey) {
          setTimeout(() => {
            update({ [valuePropName]: "" });
            update({ [viewPropName]: "" });
          }, 100);
        } else if (shortCut) {
          update({ [valuePropName]: shortCut.value });
          update({ [viewPropName]: shortCut.stringValue });
        }
    };
};

export default Handlers;