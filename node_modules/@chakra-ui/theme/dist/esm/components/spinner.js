import { cssVar } from "@chakra-ui/theme-tools";
var $size = cssVar("spinner-size");
var baseStyle = {
  width: [$size.reference],
  height: [$size.reference]
};
var sizes = {
  xs: {
    [$size.variable]: "0.75rem"
  },
  sm: {
    [$size.variable]: "1rem"
  },
  md: {
    [$size.variable]: "1.5rem"
  },
  lg: {
    [$size.variable]: "2rem"
  },
  xl: {
    [$size.variable]: "3rem"
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
//# sourceMappingURL=spinner.js.map