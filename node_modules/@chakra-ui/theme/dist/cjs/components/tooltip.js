"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _themeTools = require("@chakra-ui/theme-tools");

var $bg = (0, _themeTools.cssVar)("tooltip-bg");
var $arrowBg = (0, _themeTools.cssVar)("popper-arrow-bg");

var baseStyle = function baseStyle(props) {
  var _ref;

  var bg = (0, _themeTools.mode)("gray.700", "gray.300")(props);
  return _ref = {}, _ref[$bg.variable] = "colors." + bg, _ref.px = "8px", _ref.py = "2px", _ref.bg = [$bg.reference], _ref[$arrowBg.variable] = [$bg.reference], _ref.color = (0, _themeTools.mode)("whiteAlpha.900", "gray.900")(props), _ref.borderRadius = "sm", _ref.fontWeight = "medium", _ref.fontSize = "sm", _ref.boxShadow = "md", _ref.maxW = "320px", _ref.zIndex = "tooltip", _ref;
};

var _default = {
  baseStyle: baseStyle
};
exports["default"] = _default;
//# sourceMappingURL=tooltip.js.map