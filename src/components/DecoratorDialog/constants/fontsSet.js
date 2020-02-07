import { DEFAULT_FONT } from "./initialFormState";
import isFontAvailable from "../helpers/isFontAvailable";

const standartFonts = [
    DEFAULT_FONT,
    "Source Sans Pro",
    "Dejavu Sans",
    "Dejavu Serif",
    "Open Sans",
    "Montserrat",
    "Arial",
    "Georgia",
    "Verdana",
    "Times New Roman",
];

const fontsSet = standartFonts.filter(font => (font === DEFAULT_FONT || isFontAvailable(font)));

export default fontsSet;