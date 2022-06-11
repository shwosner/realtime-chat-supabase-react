import { switchAnatomy as parts } from "@chakra-ui/anatomy";
import { calc, cssVar, mode } from "@chakra-ui/theme-tools";
var $width = cssVar("switch-track-width");
var $height = cssVar("switch-track-height");
var $diff = cssVar("switch-track-diff");
var diffValue = calc.subtract($width, $height);
var $translateX = cssVar("switch-thumb-x");

var baseStyleTrack = props => {
  var {
    colorScheme: c
  } = props;
  return {
    borderRadius: "full",
    p: "2px",
    width: [$width.reference],
    height: [$height.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    bg: mode("gray.300", "whiteAlpha.400")(props),
    _focus: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      bg: mode(c + ".500", c + ".200")(props)
    }
  };
};

var baseStyleThumb = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [$height.reference],
  height: [$height.reference],
  _checked: {
    transform: "translateX(" + $translateX.reference + ")"
  }
};

var baseStyle = props => ({
  container: {
    [$diff.variable]: diffValue,
    [$translateX.variable]: $diff.reference,
    _rtl: {
      [$translateX.variable]: calc($diff).negate().toString()
    }
  },
  track: baseStyleTrack(props),
  thumb: baseStyleThumb
});

var sizes = {
  sm: {
    container: {
      [$width.variable]: "1.375rem",
      [$height.variable]: "0.75rem"
    }
  },
  md: {
    container: {
      [$width.variable]: "1.875rem",
      [$height.variable]: "1rem"
    }
  },
  lg: {
    container: {
      [$width.variable]: "2.875rem",
      [$height.variable]: "1.5rem"
    }
  }
};
var defaultProps = {
  size: "md",
  colorScheme: "blue"
};
export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  defaultProps
};
//# sourceMappingURL=switch.js.map