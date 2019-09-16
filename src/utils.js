export const getCorrectColor = (hex) => {
    const correctColor = typeof hex === "string" && (hex.length === 6 || hex.length === 3) ? hex : "FFF";
    return correctColor;
}

export const selectAllOnClick = defaultValue => e => {
    if (!defaultValue || e.target.value === defaultValue) {
        e.target.focus();
        e.target.select();
    }
}