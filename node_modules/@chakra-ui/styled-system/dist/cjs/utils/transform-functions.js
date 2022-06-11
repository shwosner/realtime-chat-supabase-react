"use strict";

exports.__esModule = true;
exports.transformFunctions = void 0;

var _utils = require("@chakra-ui/utils");

var _templates = require("./templates");

var _parseGradient = require("./parse-gradient");

var analyzeCSSValue = function analyzeCSSValue(value) {
  var num = parseFloat(value.toString());
  var unit = value.toString().replace(String(num), "");
  return {
    unitless: !unit,
    value: num,
    unit: unit
  };
};

var wrap = function wrap(str) {
  return function (value) {
    return str + "(" + value + ")";
  };
};

var transformFunctions = {
  filter: function filter(value) {
    return value !== "auto" ? value : _templates.filterTemplate;
  },
  backdropFilter: function backdropFilter(value) {
    return value !== "auto" ? value : _templates.backdropFilterTemplate;
  },
  ring: function ring(value) {
    return (0, _templates.getRingTemplate)(transformFunctions.px(value));
  },
  bgClip: function bgClip(value) {
    return value === "text" ? {
      color: "transparent",
      backgroundClip: "text"
    } : {
      backgroundClip: value
    };
  },
  transform: function transform(value) {
    if (value === "auto") return (0, _templates.getTransformTemplate)();
    if (value === "auto-gpu") return (0, _templates.getTransformGpuTemplate)();
    return value;
  },
  px: function px(value) {
    if (value == null) return value;

    var _analyzeCSSValue = analyzeCSSValue(value),
        unitless = _analyzeCSSValue.unitless;

    return unitless || (0, _utils.isNumber)(value) ? value + "px" : value;
  },
  fraction: function fraction(value) {
    return !(0, _utils.isNumber)(value) || value > 1 ? value : value * 100 + "%";
  },
  "float": function float(value, theme) {
    var map = {
      left: "right",
      right: "left"
    };
    return theme.direction === "rtl" ? map[value] : value;
  },
  degree: function degree(value) {
    if ((0, _utils.isCssVar)(value) || value == null) return value;
    var unitless = (0, _utils.isString)(value) && !value.endsWith("deg");
    return (0, _utils.isNumber)(value) || unitless ? value + "deg" : value;
  },
  gradient: _parseGradient.gradientTransform,
  blur: wrap("blur"),
  opacity: wrap("opacity"),
  brightness: wrap("brightness"),
  contrast: wrap("contrast"),
  dropShadow: wrap("drop-shadow"),
  grayscale: wrap("grayscale"),
  hueRotate: wrap("hue-rotate"),
  invert: wrap("invert"),
  saturate: wrap("saturate"),
  sepia: wrap("sepia"),
  bgImage: function bgImage(value) {
    if (value == null) return value;

    var prevent = (0, _parseGradient.isCSSFunction)(value) || _parseGradient.globalSet.has(value);

    return !prevent ? "url(" + value + ")" : value;
  },
  outline: function outline(value) {
    var isNoneOrZero = String(value) === "0" || String(value) === "none";
    return value !== null && isNoneOrZero ? {
      outline: "2px solid transparent",
      outlineOffset: "2px"
    } : {
      outline: value
    };
  },
  flexDirection: function flexDirection(value) {
    var _flexDirectionTemplat;

    var _ref = (_flexDirectionTemplat = _templates.flexDirectionTemplate[value]) != null ? _flexDirectionTemplat : {},
        space = _ref.space,
        divide = _ref.divide;

    var result = {
      flexDirection: value
    };
    if (space) result[space] = 1;
    if (divide) result[divide] = 1;
    return result;
  }
};
exports.transformFunctions = transformFunctions;
//# sourceMappingURL=transform-functions.js.map