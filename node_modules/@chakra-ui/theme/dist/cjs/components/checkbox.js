"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _anatomy = require("@chakra-ui/anatomy");

var _themeTools = require("@chakra-ui/theme-tools");

var baseStyleControl = function baseStyleControl(props) {
  var c = props.colorScheme;
  return {
    w: "100%",
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: (0, _themeTools.mode)(c + ".500", c + ".200")(props),
      borderColor: (0, _themeTools.mode)(c + ".500", c + ".200")(props),
      color: (0, _themeTools.mode)("white", "gray.900")(props),
      _hover: {
        bg: (0, _themeTools.mode)(c + ".600", c + ".300")(props),
        borderColor: (0, _themeTools.mode)(c + ".600", c + ".300")(props)
      },
      _disabled: {
        borderColor: (0, _themeTools.mode)("gray.200", "transparent")(props),
        bg: (0, _themeTools.mode)("gray.200", "whiteAlpha.300")(props),
        color: (0, _themeTools.mode)("gray.500", "whiteAlpha.500")(props)
      }
    },
    _indeterminate: {
      bg: (0, _themeTools.mode)(c + ".500", c + ".200")(props),
      borderColor: (0, _themeTools.mode)(c + ".500", c + ".200")(props),
      color: (0, _themeTools.mode)("white", "gray.900")(props)
    },
    _disabled: {
      bg: (0, _themeTools.mode)("gray.100", "whiteAlpha.100")(props),
      borderColor: (0, _themeTools.mode)("gray.100", "transparent")(props)
    },
    _focus: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: (0, _themeTools.mode)("red.500", "red.300")(props)
    }
  };
};

var baseStyleLabel = {
  userSelect: "none",
  _disabled: {
    opacity: 0.4
  }
};
var baseStyleIcon = {
  transitionProperty: "transform",
  transitionDuration: "normal"
};

var baseStyle = function baseStyle(props) {
  return {
    icon: baseStyleIcon,
    control: baseStyleControl(props),
    label: baseStyleLabel
  };
};

var sizes = {
  sm: {
    control: {
      h: 3,
      w: 3
    },
    label: {
      fontSize: "sm"
    },
    icon: {
      fontSize: "0.45rem"
    }
  },
  md: {
    control: {
      w: 4,
      h: 4
    },
    label: {
      fontSize: "md"
    },
    icon: {
      fontSize: "0.625rem"
    }
  },
  lg: {
    control: {
      w: 5,
      h: 5
    },
    label: {
      fontSize: "lg"
    },
    icon: {
      fontSize: "0.625rem"
    }
  }
};
var defaultProps = {
  size: "md",
  colorScheme: "blue"
};
var _default = {
  parts: _anatomy.checkboxAnatomy.keys,
  baseStyle: baseStyle,
  sizes: sizes,
  defaultProps: defaultProps
};
exports["default"] = _default;
//# sourceMappingURL=checkbox.js.map