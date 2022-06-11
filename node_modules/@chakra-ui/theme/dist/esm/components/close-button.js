import { cssVar, mode } from "@chakra-ui/theme-tools";
var $size = cssVar("close-button-size");

var baseStyle = props => {
  var hoverBg = mode("blackAlpha.100", "whiteAlpha.100")(props);
  var activeBg = mode("blackAlpha.200", "whiteAlpha.200")(props);
  return {
    w: [$size.reference],
    h: [$size.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none"
    },
    _hover: {
      bg: hoverBg
    },
    _active: {
      bg: activeBg
    },
    _focus: {
      boxShadow: "outline"
    }
  };
};

var sizes = {
  lg: {
    [$size.variable]: "40px",
    fontSize: "16px"
  },
  md: {
    [$size.variable]: "32px",
    fontSize: "12px"
  },
  sm: {
    [$size.variable]: "24px",
    fontSize: "10px"
  }
};
var defaultProps = {
  size: "md"
};
export default {
  baseStyle,
  sizes,
  defaultProps
};
//# sourceMappingURL=close-button.js.map