function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { selectAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";
import Input from "./input";

var baseStyleField = props => {
  return _extends({}, Input.baseStyle.field, {
    bg: mode("white", "gray.700")(props),
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    "> option, > optgroup": {
      bg: mode("white", "gray.700")(props)
    }
  });
};

var baseStyleIcon = {
  width: "1.5rem",
  height: "100%",
  insetEnd: "0.5rem",
  position: "relative",
  color: "currentColor",
  fontSize: "1.25rem",
  _disabled: {
    opacity: 0.5
  }
};

var baseStyle = props => ({
  field: baseStyleField(props),
  icon: baseStyleIcon
});

var sizes = _extends({}, Input.sizes, {
  xs: _extends({}, Input.sizes.xs, {
    icon: {
      insetEnd: "0.25rem"
    }
  })
});

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  variants: Input.variants,
  defaultProps: Input.defaultProps
};
//# sourceMappingURL=select.js.map