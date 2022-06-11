"use strict";

exports.__esModule = true;
exports.ButtonSpinner = void 0;

var _spinner = require("@chakra-ui/spinner");

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ButtonSpinner = function ButtonSpinner(props) {
  var label = props.label,
      placement = props.placement,
      spacing = props.spacing,
      _props$children = props.children,
      children = _props$children === void 0 ? /*#__PURE__*/React.createElement(_spinner.Spinner, {
    color: "currentColor",
    width: "1em",
    height: "1em"
  }) : _props$children,
      className = props.className,
      __css = props.__css,
      rest = _objectWithoutPropertiesLoose(props, ["label", "placement", "spacing", "children", "className", "__css"]);

  var _className = (0, _utils.cx)("chakra-button__spinner", className);

  var marginProp = placement === "start" ? "marginEnd" : "marginStart";
  var spinnerStyles = React.useMemo(function () {
    var _extends2;

    return _extends((_extends2 = {
      display: "flex",
      alignItems: "center",
      position: label ? "relative" : "absolute"
    }, _extends2[marginProp] = label ? "0.5rem" : 0, _extends2.fontSize = "1em", _extends2.lineHeight = "normal", _extends2), __css);
  }, [__css, label, marginProp]);
  return /*#__PURE__*/React.createElement(_system.chakra.div, _extends({
    className: _className
  }, rest, {
    __css: spinnerStyles
  }), children);
};

exports.ButtonSpinner = ButtonSpinner;

if (_utils.__DEV__) {
  ButtonSpinner.displayName = "ButtonSpinner";
}
//# sourceMappingURL=button-spinner.js.map