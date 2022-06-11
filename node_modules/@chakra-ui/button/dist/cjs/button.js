"use strict";

exports.__esModule = true;
exports.Button = void 0;

var _hooks = require("@chakra-ui/hooks");

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

var _buttonGroup = require("./button-group");

var _buttonSpinner = require("./button-spinner");

var _buttonIcon = require("./button-icon");

var _useButtonType2 = require("./use-button-type");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Button = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var group = (0, _buttonGroup.useButtonGroup)();
  var styles = (0, _system.useStyleConfig)("Button", _extends({}, group, props));

  var _omitThemingProps = (0, _system.omitThemingProps)(props),
      _omitThemingProps$isD = _omitThemingProps.isDisabled,
      isDisabled = _omitThemingProps$isD === void 0 ? group == null ? void 0 : group.isDisabled : _omitThemingProps$isD,
      isLoading = _omitThemingProps.isLoading,
      isActive = _omitThemingProps.isActive,
      isFullWidth = _omitThemingProps.isFullWidth,
      children = _omitThemingProps.children,
      leftIcon = _omitThemingProps.leftIcon,
      rightIcon = _omitThemingProps.rightIcon,
      loadingText = _omitThemingProps.loadingText,
      _omitThemingProps$ico = _omitThemingProps.iconSpacing,
      iconSpacing = _omitThemingProps$ico === void 0 ? "0.5rem" : _omitThemingProps$ico,
      type = _omitThemingProps.type,
      spinner = _omitThemingProps.spinner,
      _omitThemingProps$spi = _omitThemingProps.spinnerPlacement,
      spinnerPlacement = _omitThemingProps$spi === void 0 ? "start" : _omitThemingProps$spi,
      className = _omitThemingProps.className,
      as = _omitThemingProps.as,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["isDisabled", "isLoading", "isActive", "isFullWidth", "children", "leftIcon", "rightIcon", "loadingText", "iconSpacing", "type", "spinner", "spinnerPlacement", "className", "as"]);
  /**
   * When button is used within ButtonGroup (i.e flushed with sibling buttons),
   * it is important to add a `zIndex` on focus.
   *
   * So let's read the component styles and then add `zIndex` to it.
   */


  var buttonStyles = React.useMemo(function () {
    var _styles$_focus;

    var _focus = (0, _utils.mergeWith)({}, (_styles$_focus = styles == null ? void 0 : styles["_focus"]) != null ? _styles$_focus : {}, {
      zIndex: 1
    });

    return _extends({
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      width: isFullWidth ? "100%" : "auto"
    }, styles, !!group && {
      _focus: _focus
    });
  }, [styles, group, isFullWidth]);

  var _useButtonType = (0, _useButtonType2.useButtonType)(as),
      _ref = _useButtonType.ref,
      defaultType = _useButtonType.type;

  var contentProps = {
    rightIcon: rightIcon,
    leftIcon: leftIcon,
    iconSpacing: iconSpacing,
    children: children
  };
  return /*#__PURE__*/React.createElement(_system.chakra.button, _extends({
    disabled: isDisabled || isLoading,
    ref: (0, _hooks.useMergeRefs)(ref, _ref),
    as: as,
    type: type != null ? type : defaultType,
    "data-active": (0, _utils.dataAttr)(isActive),
    "data-loading": (0, _utils.dataAttr)(isLoading),
    __css: buttonStyles,
    className: (0, _utils.cx)("chakra-button", className)
  }, rest), isLoading && spinnerPlacement === "start" && /*#__PURE__*/React.createElement(_buttonSpinner.ButtonSpinner, {
    className: "chakra-button__spinner--start",
    label: loadingText,
    placement: "start"
  }, spinner), isLoading ? loadingText || /*#__PURE__*/React.createElement(_system.chakra.span, {
    opacity: 0
  }, /*#__PURE__*/React.createElement(ButtonContent, contentProps)) : /*#__PURE__*/React.createElement(ButtonContent, contentProps), isLoading && spinnerPlacement === "end" && /*#__PURE__*/React.createElement(_buttonSpinner.ButtonSpinner, {
    className: "chakra-button__spinner--end",
    label: loadingText,
    placement: "end"
  }, spinner));
});
exports.Button = Button;

if (_utils.__DEV__) {
  Button.displayName = "Button";
}

function ButtonContent(props) {
  var leftIcon = props.leftIcon,
      rightIcon = props.rightIcon,
      children = props.children,
      iconSpacing = props.iconSpacing;
  return /*#__PURE__*/React.createElement(React.Fragment, null, leftIcon && /*#__PURE__*/React.createElement(_buttonIcon.ButtonIcon, {
    marginEnd: iconSpacing
  }, leftIcon), children, rightIcon && /*#__PURE__*/React.createElement(_buttonIcon.ButtonIcon, {
    marginStart: iconSpacing
  }, rightIcon));
}
//# sourceMappingURL=button.js.map