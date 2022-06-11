"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _anatomy = require("@chakra-ui/anatomy");

var baseStyleLink = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focus: {
    boxShadow: "outline"
  }
};
var baseStyle = {
  link: baseStyleLink
};
var _default = {
  parts: _anatomy.breadcrumbAnatomy.keys,
  baseStyle: baseStyle
};
exports["default"] = _default;
//# sourceMappingURL=breadcrumb.js.map