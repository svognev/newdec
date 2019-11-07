const { body } = document;
let width;

const container = document.createElement('span');
container.innerHTML = Array(100).join('wi');
container.style.cssText = [
    'position:absolute',
    'width:auto',
    'font-size:128px',
    'left:-99999px'
].join(' !important;');

const getWidth = fontFamily => {
    container.style.fontFamily = fontFamily;

    body.appendChild(container);
    width = container.clientWidth;
    body.removeChild(container);

    return width;
};

const monoWidth  = getWidth('monospace');
const serifWidth = getWidth('serif');
const sansWidth  = getWidth('sans-serif');

const isFontAvailable = font => {
    return monoWidth !== getWidth(font + ',monospace') ||
    sansWidth !== getWidth(font + ',sans-serif') ||
    serifWidth !== getWidth(font + ',serif');
};

export default isFontAvailable;