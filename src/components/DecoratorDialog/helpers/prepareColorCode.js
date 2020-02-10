const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const prepareColorCode = color => {
    if (!color || typeof color !== "string") {
        return;
    }

    if (!/#/.test(color)) {
        const rgbMatch = color.match(/(\d{1,3}).*?(\d{1,3}).*?(\d{1,3})/);
        if (rgbMatch.length === 4) {
            const [, r, g, b] = rgbMatch;
            return rgbToHex(+r, +g, +b).trim().slice(1);
        }
    } else {
        return color.trim().slice(1);
    }
};

export default prepareColorCode;