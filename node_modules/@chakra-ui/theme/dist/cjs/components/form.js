"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _anatomy = require("@chakra-ui/anatomy");

var _themeTools = require("@chakra-ui/theme-tools");

var baseStyleRequiredIndicator = function baseStyleRequiredIndicator(props) {
  return {
    marginStart: 1,
    color: (0, _themeTools.mode)("red.500", "red.300")(props)
  };
};

var baseStyleHelperText = function baseStyleHelperText(props) {
  return {
    mt: 2,
    color: (0, _themeTools.mode)("gray.500", "whiteAlpha.600")(props),
    lineHeight: "normal",
    fontSize: "sm"
  };
};

var baseStyle = function baseStyle(props) {
  return {
    container: {
      width: "100%",
      position: "relative"
    },
    requiredIndicator: baseStyleRequiredIndicator(props),
    helperText: baseStyleHelperText(props)
  };
};

var _default = {
  parts: _anatomy.formAnatomy.keys,
  baseStyle: baseStyle
};
exports["default"] = _default;
//# sourceMappingURL=form.js.map