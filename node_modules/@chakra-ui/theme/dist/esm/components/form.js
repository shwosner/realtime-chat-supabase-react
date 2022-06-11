import { formAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";

var baseStyleRequiredIndicator = props => {
  return {
    marginStart: 1,
    color: mode("red.500", "red.300")(props)
  };
};

var baseStyleHelperText = props => {
  return {
    mt: 2,
    color: mode("gray.500", "whiteAlpha.600")(props),
    lineHeight: "normal",
    fontSize: "sm"
  };
};

var baseStyle = props => ({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: baseStyleRequiredIndicator(props),
  helperText: baseStyleHelperText(props)
});

export default {
  parts: parts.keys,
  baseStyle
};
//# sourceMappingURL=form.js.map