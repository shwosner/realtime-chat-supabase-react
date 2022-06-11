"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _themeTools = require("@chakra-ui/theme-tools");

var _lg, _md, _sm;

var $size = (0, _themeTools.cssVar)("close-button-size");

var baseStyle = function baseStyle(props) {
  var hoverBg = (0, _themeTools.mode)("blackAlpha.100", "whiteAlpha.100")(props);
  var activeBg = (0, _themeTools.mode)("blackAlpha.200", "whiteAlpha.200")(props);
  return {
    w: [$size.reference],
    h: [$size.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none"
    },
    _hover: {
      bg: hoverBg
    },
    _active: {
      bg: activeBg
    },
    _focus: {
      boxShadow: "outline"
    }
  };
};

var sizes = {
  lg: (_lg = {}, _lg[$size.variable] = "40px", _lg.fontSize = "16px", _lg),
  md: (_md = {}, _md[$size.variable] = "32px", _md.fontSize = "12px", _md),
  sm: (_sm = {}, _sm[$size.variable] = "24px", _sm.fontSize = "10px", _sm)
};
var defaultProps = {
  size: "md"
};
var _default = {
  baseStyle: baseStyle,
  sizes: sizes,
  defaultProps: defaultProps
};
exports["default"] = _default;
//# sourceMappingURL=close-button.js.map