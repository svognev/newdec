export const getCorrectColor = (hex) => {
    const correctColor = typeof hex === "string" && (hex.length === 6 || hex.length === 3) ? hex : "FFF";
    return correctColor;
}