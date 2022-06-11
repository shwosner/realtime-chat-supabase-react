"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _anatomy = require("@chakra-ui/anatomy");

var _themeTools = require("@chakra-ui/theme-tools");

var _container2, _container3, _container4;

var $width = (0, _themeTools.cssVar)("switch-track-width");
var $height = (0, _themeTools.cssVar)("switch-track-height");
var $diff = (0, _themeTools.cssVar)("switch-track-diff");

var diffValue = _themeTools.calc.subtract($width, $height);

var $translateX = (0, _themeTools.cssVar)("switch-thumb-x");

var baseStyleTrack = function baseStyleTrack(props) {
  var c = props.colorScheme;
  return {
    borderRadius: "full",
    p: "2px",
    width: [$width.reference],
    height: [$height.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    bg: (0, _themeTools.mode)("gray.300", "whiteAlpha.400")(props),
    _focus: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      bg: (0, _themeTools.mode)(c + ".500", c + ".200")(props)
    }
  };
};

var baseStyleThumb = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [$height.reference],
  height: [$height.reference],
  _checked: {
    transform: "translateX(" + $translateX.reference + ")"
  }
};

var baseStyle = function baseStyle(props) {
  var _rtl, _container;

  return {
    container: (_container = {}, _container[$diff.variable] = diffValue, _container[$translateX.variable] = $diff.reference, _container._rtl = (_rtl = {}, _rtl[$translateX.variable] = (0, _themeTools.calc)($diff).negate().toString(), _rtl), _container),
    track: baseStyleTrack(props),
    thumb: baseStyleThumb
  };
};

var sizes = {
  sm: {
    container: (_container2 = {}, _container2[$width.variable] = "1.375rem", _container2[$height.variable] = "0.75rem", _container2)
  },
  md: {
    container: (_container3 = {}, _container3[$width.variable] = "1.875rem", _container3[$height.variable] = "1rem", _container3)
  },
  lg: {
    container: (_container4 = {}, _container4[$width.variable] = "2.875rem", _container4[$height.variable] = "1.5rem", _container4)
  }
};
var defaultProps = {
  size: "md",
  colorScheme: "blue"
};
var _default = {
  parts: _anatomy.switchAnatomy.keys,
  baseStyle: baseStyle,
  sizes: sizes,
  defaultProps: defaultProps
};
exports["default"] = _default;
//# sourceMappingURL=switch.js.map