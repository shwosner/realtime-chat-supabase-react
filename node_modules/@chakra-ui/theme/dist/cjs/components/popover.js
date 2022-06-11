"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _anatomy = require("@chakra-ui/anatomy");

var _themeTools = require("@chakra-ui/theme-tools");

var $popperBg = (0, _themeTools.cssVar)("popper-bg");
var $arrowBg = (0, _themeTools.cssVar)("popper-arrow-bg");
var $arrowShadowColor = (0, _themeTools.cssVar)("popper-arrow-shadow-color");
var baseStylePopper = {
  zIndex: 10
};

var baseStyleContent = function baseStyleContent(props) {
  var _ref;

  var bg = (0, _themeTools.mode)("white", "gray.700")(props);
  var shadowColor = (0, _themeTools.mode)("gray.200", "whiteAlpha.300")(props);
  return _ref = {}, _ref[$popperBg.variable] = "colors." + bg, _ref.bg = $popperBg.reference, _ref[$arrowBg.variable] = $popperBg.reference, _ref[$arrowShadowColor.variable] = "colors." + shadowColor, _ref.width = "xs", _ref.border = "1px solid", _ref.borderColor = "inherit", _ref.borderRadius = "md", _ref.boxShadow = "sm", _ref.zIndex = "inherit", _ref._focus = {
    outline: 0,
    boxShadow: "outline"
  }, _ref;
};

var baseStyleHeader = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
};
var baseStyleBody = {
  px: 3,
  py: 2
};
var baseStyleFooter = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
};

var baseStyle = function baseStyle(props) {
  return {
    popper: baseStylePopper,
    content: baseStyleContent(props),
    header: baseStyleHeader,
    body: baseStyleBody,
    footer: baseStyleFooter,
    arrow: {}
  };
};

var _default = {
  parts: _anatomy.popoverAnatomy.keys,
  baseStyle: baseStyle
};
exports["default"] = _default;
//# sourceMappingURL=popover.js.map