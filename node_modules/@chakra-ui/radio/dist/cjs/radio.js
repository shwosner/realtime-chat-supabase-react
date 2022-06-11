"use strict";

exports.__esModule = true;
exports.Radio = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

var _radioGroup = require("./radio-group");

var _useRadio2 = require("./use-radio");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Radio component is used in forms when a user needs to select a single value from
 * several options.
 *
 * @see Docs https://chakra-ui.com/radio
 */
var Radio = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var _props$name;

  var group = (0, _radioGroup.useRadioGroupContext)();
  var onChangeProp = props.onChange,
      valueProp = props.value;
  var styles = (0, _system.useMultiStyleConfig)("Radio", _extends({}, group, props));
  var ownProps = (0, _system.omitThemingProps)(props);

  var _ownProps$spacing = ownProps.spacing,
      spacing = _ownProps$spacing === void 0 ? "0.5rem" : _ownProps$spacing,
      children = ownProps.children,
      isFullWidth = ownProps.isFullWidth,
      _ownProps$isDisabled = ownProps.isDisabled,
      isDisabled = _ownProps$isDisabled === void 0 ? group == null ? void 0 : group.isDisabled : _ownProps$isDisabled,
      _ownProps$isFocusable = ownProps.isFocusable,
      isFocusable = _ownProps$isFocusable === void 0 ? group == null ? void 0 : group.isFocusable : _ownProps$isFocusable,
      rest = _objectWithoutPropertiesLoose(ownProps, ["spacing", "children", "isFullWidth", "isDisabled", "isFocusable"]);

  var isChecked = props.isChecked;

  if ((group == null ? void 0 : group.value) != null && valueProp != null) {
    isChecked = group.value === valueProp;
  }

  var onChange = onChangeProp;

  if (group != null && group.onChange && valueProp != null) {
    onChange = (0, _utils.callAll)(group.onChange, onChangeProp);
  }

  var name = (_props$name = props == null ? void 0 : props.name) != null ? _props$name : group == null ? void 0 : group.name;

  var _useRadio = (0, _useRadio2.useRadio)(_extends({}, rest, {
    isChecked: isChecked,
    isFocusable: isFocusable,
    isDisabled: isDisabled,
    onChange: onChange,
    name: name
  })),
      getInputProps = _useRadio.getInputProps,
      getCheckboxProps = _useRadio.getCheckboxProps,
      getLabelProps = _useRadio.getLabelProps,
      getRootProps = _useRadio.getRootProps,
      htmlProps = _useRadio.htmlProps;

  var _split = (0, _utils.split)(htmlProps, _system.layoutPropNames),
      layoutProps = _split[0],
      otherProps = _split[1];

  var checkboxProps = getCheckboxProps(otherProps);
  var inputProps = getInputProps({}, ref);
  var labelProps = getLabelProps();
  var rootProps = Object.assign(layoutProps, getRootProps());

  var rootStyles = _extends({
    width: isFullWidth ? "full" : undefined,
    display: "inline-flex",
    alignItems: "center",
    verticalAlign: "top"
  }, styles.container);

  var checkboxStyles = _extends({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  }, styles.control);

  var labelStyles = _extends({
    userSelect: "none",
    marginStart: spacing
  }, styles.label);

  return /*#__PURE__*/React.createElement(_system.chakra.label, _extends({
    className: "chakra-radio"
  }, rootProps, {
    __css: rootStyles
  }), /*#__PURE__*/React.createElement("input", _extends({
    className: "chakra-radio__input"
  }, inputProps)), /*#__PURE__*/React.createElement(_system.chakra.span, _extends({
    className: "chakra-radio__control"
  }, checkboxProps, {
    __css: checkboxStyles
  })), children && /*#__PURE__*/React.createElement(_system.chakra.span, _extends({
    className: "chakra-radio__label"
  }, labelProps, {
    __css: labelStyles
  }), children));
});
exports.Radio = Radio;

if (_utils.__DEV__) {
  Radio.displayName = "Radio";
}
//# sourceMappingURL=radio.js.map