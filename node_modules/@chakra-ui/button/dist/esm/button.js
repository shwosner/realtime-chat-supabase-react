function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { useMergeRefs } from "@chakra-ui/hooks";
import { chakra, forwardRef, omitThemingProps, useStyleConfig } from "@chakra-ui/system";
import { cx, dataAttr, mergeWith, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { useButtonGroup } from "./button-group";
import { ButtonSpinner } from "./button-spinner";
import { ButtonIcon } from "./button-icon";
import { useButtonType } from "./use-button-type";
export var Button = /*#__PURE__*/forwardRef((props, ref) => {
  var group = useButtonGroup();
  var styles = useStyleConfig("Button", _extends({}, group, props));

  var _omitThemingProps = omitThemingProps(props),
      {
    isDisabled = group == null ? void 0 : group.isDisabled,
    isLoading,
    isActive,
    isFullWidth,
    children,
    leftIcon,
    rightIcon,
    loadingText,
    iconSpacing = "0.5rem",
    type,
    spinner,
    spinnerPlacement = "start",
    className,
    as
  } = _omitThemingProps,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["isDisabled", "isLoading", "isActive", "isFullWidth", "children", "leftIcon", "rightIcon", "loadingText", "iconSpacing", "type", "spinner", "spinnerPlacement", "className", "as"]);
  /**
   * When button is used within ButtonGroup (i.e flushed with sibling buttons),
   * it is important to add a `zIndex` on focus.
   *
   * So let's read the component styles and then add `zIndex` to it.
   */


  var buttonStyles = React.useMemo(() => {
    var _styles$_focus;

    var _focus = mergeWith({}, (_styles$_focus = styles == null ? void 0 : styles["_focus"]) != null ? _styles$_focus : {}, {
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
      _focus
    });
  }, [styles, group, isFullWidth]);
  var {
    ref: _ref,
    type: defaultType
  } = useButtonType(as);
  var contentProps = {
    rightIcon,
    leftIcon,
    iconSpacing,
    children
  };
  return /*#__PURE__*/React.createElement(chakra.button, _extends({
    disabled: isDisabled || isLoading,
    ref: useMergeRefs(ref, _ref),
    as: as,
    type: type != null ? type : defaultType,
    "data-active": dataAttr(isActive),
    "data-loading": dataAttr(isLoading),
    __css: buttonStyles,
    className: cx("chakra-button", className)
  }, rest), isLoading && spinnerPlacement === "start" && /*#__PURE__*/React.createElement(ButtonSpinner, {
    className: "chakra-button__spinner--start",
    label: loadingText,
    placement: "start"
  }, spinner), isLoading ? loadingText || /*#__PURE__*/React.createElement(chakra.span, {
    opacity: 0
  }, /*#__PURE__*/React.createElement(ButtonContent, contentProps)) : /*#__PURE__*/React.createElement(ButtonContent, contentProps), isLoading && spinnerPlacement === "end" && /*#__PURE__*/React.createElement(ButtonSpinner, {
    className: "chakra-button__spinner--end",
    label: loadingText,
    placement: "end"
  }, spinner));
});

if (__DEV__) {
  Button.displayName = "Button";
}

function ButtonContent(props) {
  var {
    leftIcon,
    rightIcon,
    children,
    iconSpacing
  } = props;
  return /*#__PURE__*/React.createElement(React.Fragment, null, leftIcon && /*#__PURE__*/React.createElement(ButtonIcon, {
    marginEnd: iconSpacing
  }, leftIcon), children, rightIcon && /*#__PURE__*/React.createElement(ButtonIcon, {
    marginStart: iconSpacing
  }, rightIcon));
}
//# sourceMappingURL=button.js.map