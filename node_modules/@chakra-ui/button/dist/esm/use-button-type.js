import * as React from "react";
export function useButtonType(value) {
  var [isButton, setIsButton] = React.useState(!value);
  var refCallback = React.useCallback(node => {
    if (!node) return;
    setIsButton(node.tagName === "BUTTON");
  }, []);
  var type = isButton ? "button" : undefined;
  return {
    ref: refCallback,
    type
  };
}
//# sourceMappingURL=use-button-type.js.map