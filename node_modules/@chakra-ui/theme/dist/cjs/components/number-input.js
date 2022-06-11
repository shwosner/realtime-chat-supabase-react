"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _anatomy = require("@chakra-ui/anatomy");

var _themeTools = require("@chakra-ui/theme-tools");

var _typography = _interopRequireDefault(require("../foundations/typography"));

var _input = _interopRequireDefault(require("./input"));

var _baseStyleRoot, _Input$baseStyle$fiel, _Input$baseStyle;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var variants = _input["default"].variants,
    defaultProps = _input["default"].defaultProps;
var $stepperWidth = (0, _themeTools.cssVar)("number-input-stepper-width");
var $inputPadding = (0, _themeTools.cssVar)("number-input-input-padding");
var inputPaddingValue = (0, _themeTools.calc)($stepperWidth).add("0.5rem").toString();
var baseStyleRoot = (_baseStyleRoot = {}, _baseStyleRoot[$stepperWidth.variable] = "24px", _baseStyleRoot[$inputPadding.variable] = inputPaddingValue, _baseStyleRoot);
var baseStyleField = (_Input$baseStyle$fiel = (_Input$baseStyle = _input["default"].baseStyle) == null ? void 0 : _Input$baseStyle.field) != null ? _Input$baseStyle$fiel : {};
var baseStyleStepperGroup = {
  width: [$stepperWidth.reference]
};

var baseStyleStepper = function baseStyleStepper(props) {
  return {
    borderStart: "1px solid",
    borderStartColor: (0, _themeTools.mode)("inherit", "whiteAlpha.300")(props),
    color: (0, _themeTools.mode)("inherit", "whiteAlpha.800")(props),
    _active: {
      bg: (0, _themeTools.mode)("gray.200", "whiteAlpha.300")(props)
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  };
};

var baseStyle = function baseStyle(props) {
  return {
    root: baseStyleRoot,
    field: baseStyleField,
    stepperGroup: baseStyleStepperGroup,
    stepper: baseStyleStepper(props)
  };
};

function getSize(size) {
  var _sizeStyle$field$font, _sizeStyle$field;

  var sizeStyle = _input["default"].sizes[size];
  var radius = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  };

  var _fontSize = (_sizeStyle$field$font = (_sizeStyle$field = sizeStyle.field) == null ? void 0 : _sizeStyle$field.fontSize) != null ? _sizeStyle$field$font : "md";

  var fontSize = _typography["default"].fontSizes[_fontSize.toString()];

  return {
    field: _extends({}, sizeStyle.field, {
      paddingInlineEnd: $inputPadding.reference,
      verticalAlign: "top"
    }),
    stepper: {
      fontSize: (0, _themeTools.calc)(fontSize).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: radius[size]
      },
      _last: {
        borderBottomEndRadius: radius[size],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  };
}

var sizes = {
  xs: getSize("xs"),
  sm: getSize("sm"),
  md: getSize("md"),
  lg: getSize("lg")
};
var _default = {
  parts: _anatomy.numberInputAnatomy.keys,
  baseStyle: baseStyle,
  sizes: sizes,
  variants: variants,
  defaultProps: defaultProps
};
exports["default"] = _default;
//# sourceMappingURL=number-input.js.map