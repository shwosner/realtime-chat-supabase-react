"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _anatomy = require("@chakra-ui/anatomy");

var _themeTools = require("@chakra-ui/theme-tools");

var baseStyleText = function baseStyleText(props) {
  return {
    color: (0, _themeTools.mode)("red.500", "red.300")(props),
    mt: 2,
    fontSize: "sm"
  };
};

var baseStyleIcon = function baseStyleIcon(props) {
  return {
    marginEnd: "0.5em",
    color: (0, _themeTools.mode)("red.500", "red.300")(props)
  };
};

var baseStyle = function baseStyle(props) {
  return {
    text: baseStyleText(props),
    icon: baseStyleIcon(props)
  };
};

var _default = {
  parts: _anatomy.formErrorAnatomy.keys,
  baseStyle: baseStyle
};
exports["default"] = _default;
//# sourceMappingURL=form-error.js.map