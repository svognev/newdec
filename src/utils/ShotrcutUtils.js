import keycode from 'keycode';
import isEqual from 'lodash/isEqual';

export default class ShortcutUtils {
  static CMD_KEYS = {
    altKey: 'Alt',
    shiftKey: 'Shift',
    ctrlKey: 'Ctrl',
    metaKey: 'Command',
  };

  static isDeadKey(e) {
    return e.keyCode === 229;
  }

  static prevent(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  static convertEventToShortCut(e) {
    if (ShortcutUtils.isDeadKey(e)) {
      ShortcutUtils.prevent(e);
      return { deleteKey: true };
    }
    ShortcutUtils.prevent(e);
    const shortCut = {
      keyCode: e.keyCode,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      altKey: e.altKey,
      metaKey: e.metaKey,
    };
    const deleteKeys = [8, 46];
    const cmdKeysCodes = [16, 91, 18, 17];
    const shortCutForView = ShortcutUtils.convertShortcutToMeta(shortCut);
    if (deleteKeys.indexOf(e.keyCode) > -1) {
      return { deleteKey: true };
    } else if (shortCutForView.isCmdPressed && cmdKeysCodes.indexOf(e.keyCode) === -1) {
      return {
        value: shortCut,
        stringValue: shortCutForView.stringValue,
      };
    }
    return null;
  }

  static convertShortcutToString(shortCut = {}) {
    return ShortcutUtils.convertShortcutToMeta(shortCut).stringValue;
  }

  static convertShortcutToMeta(shortCut = {}) {
    let shortCutForView = '';
    let isCmdPressed = false;
    Object.keys(ShortcutUtils.CMD_KEYS).forEach((key) => {
      if (shortCut && shortCut[key]) {
        isCmdPressed = true;
        shortCutForView += `${ShortcutUtils.CMD_KEYS[key]} + `;
      }
    });
    if (shortCut && shortCut.keyCode) {
      shortCutForView += keycode(shortCut.keyCode);
    }
    return { stringValue: shortCutForView, isCmdPressed };
  }

  static removeDuplicateShortcuts = function (decorators, newPdShortcut) {
    let removed = false;
    Object.keys(decorators).forEach((decoratorKey) => {
      const item = decorators[decoratorKey];
      const itemType = item.item_type;
      if (itemType === 'style') {
        if (isEqual(item.keyboard_shortcut, newPdShortcut)) {
          decorators[decoratorKey].keyboard_shortcut = null;
          removed = true;
        }
      } else {
        const childItems = item.child_items;
        Object.keys(childItems).forEach((itemKey) => {
          const style = childItems[itemKey];
          if (isEqual(style.keyboard_shortcut, newPdShortcut)) {
            style.keyboard_shortcut = null;
            removed = true;
          }
        });
      }
    });
    return removed;
  };

  static removeDuplicateShortcutsInInlineStyle = function (inlineStyles, newPdShortcut) {
    let removed = false;
    Object.keys(inlineStyles).forEach((styleKey) => {
      const item = inlineStyles[styleKey];
      if (isEqual(item.keyboard_shortcut, newPdShortcut)) {
        inlineStyles[styleKey].keyboard_shortcut = null;
        removed = true;
      }
    });
    return removed;
  };
}
