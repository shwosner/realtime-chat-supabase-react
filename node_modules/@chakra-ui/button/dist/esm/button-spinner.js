function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { Spinner } from "@chakra-ui/spinner";
import { chakra } from "@chakra-ui/system";
import { cx, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
export var ButtonSpinner = props => {
  var {
    label,
    placement,
    children = /*#__PURE__*/React.createElement(Spinner, {
      color: "currentColor",
      width: "1em",
      height: "1em"
    }),
    className,
    __css
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["label", "placement", "spacing", "children", "className", "__css"]);

  var _className = cx("chakra-button__spinner", className);

  var marginProp = placement === "start" ? "marginEnd" : "marginStart";
  var spinnerStyles = React.useMemo(() => _extends({
    display: "flex",
    alignItems: "center",
    position: label ? "relative" : "absolute",
    [marginProp]: label ? "0.5rem" : 0,
    fontSize: "1em",
    lineHeight: "normal"
  }, __css), [__css, label, marginProp]);
  return /*#__PURE__*/React.createElement(chakra.div, _extends({
    className: _className
  }, rest, {
    __css: spinnerStyles
  }), children);
};

if (__DEV__) {
  ButtonSpinner.displayName = "ButtonSpinner";
}
//# sourceMappingURL=button-spinner.js.map