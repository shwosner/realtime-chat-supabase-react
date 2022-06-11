function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { progressAnatomy as parts } from "@chakra-ui/anatomy";
import { generateStripe, getColor, mode } from "@chakra-ui/theme-tools";

function filledStyle(props) {
  var {
    colorScheme: c,
    theme: t,
    isIndeterminate,
    hasStripe
  } = props;
  var stripeStyle = mode(generateStripe(), generateStripe("1rem", "rgba(0,0,0,0.1)"))(props);
  var bgColor = mode(c + ".500", c + ".200")(props);
  var gradient = "linear-gradient(\n    to right,\n    transparent 0%,\n    " + getColor(t, bgColor) + " 50%,\n    transparent 100%\n  )";
  var addStripe = !isIndeterminate && hasStripe;
  return _extends({}, addStripe && stripeStyle, isIndeterminate ? {
    bgImage: gradient
  } : {
    bgColor
  });
}

var baseStyleLabel = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
};

var baseStyleTrack = props => {
  return {
    bg: mode("gray.100", "whiteAlpha.300")(props)
  };
};

var baseStyleFilledTrack = props => {
  return _extends({
    transitionProperty: "common",
    transitionDuration: "slow"
  }, filledStyle(props));
};

var baseStyle = props => ({
  label: baseStyleLabel,
  filledTrack: baseStyleFilledTrack(props),
  track: baseStyleTrack(props)
});

var sizes = {
  xs: {
    track: {
      h: "0.25rem"
    }
  },
  sm: {
    track: {
      h: "0.5rem"
    }
  },
  md: {
    track: {
      h: "0.75rem"
    }
  },
  lg: {
    track: {
      h: "1rem"
    }
  }
};
var defaultProps = {
  size: "md",
  colorScheme: "blue"
};
export default {
  parts: parts.keys,
  sizes,
  baseStyle,
  defaultProps
};
//# sourceMappingURL=progress.js.map