"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _anatomy = require("@chakra-ui/anatomy");

var _themeTools = require("@chakra-ui/theme-tools");

var baseStyleList = function baseStyleList(props) {
  return {
    bg: (0, _themeTools.mode)("#fff", "gray.700")(props),
    boxShadow: (0, _themeTools.mode)("sm", "dark-lg")(props),
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px"
  };
};

var baseStyleItem = function baseStyleItem(props) {
  return {
    py: "0.4rem",
    px: "0.8rem",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      bg: (0, _themeTools.mode)("gray.100", "whiteAlpha.100")(props)
    },
    _active: {
      bg: (0, _themeTools.mode)("gray.200", "whiteAlpha.200")(props)
    },
    _expanded: {
      bg: (0, _themeTools.mode)("gray.100", "whiteAlpha.100")(props)
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  };
};

var baseStyleGroupTitle = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
};
var baseStyleCommand = {
  opacity: 0.6
};
var baseStyleDivider = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "0.5rem",
  opacity: 0.6
};
var baseStyleButton = {
  transitionProperty: "common",
  transitionDuration: "normal"
};

var baseStyle = function baseStyle(props) {
  return {
    button: baseStyleButton,
    list: baseStyleList(props),
    item: baseStyleItem(props),
    groupTitle: baseStyleGroupTitle,
    command: baseStyleCommand,
    divider: baseStyleDivider
  };
};

var _default = {
  parts: _anatomy.menuAnatomy.keys,
  baseStyle: baseStyle
};
exports["default"] = _default;
//# sourceMappingURL=menu.js.map