import { formErrorAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";

var baseStyleText = props => {
  return {
    color: mode("red.500", "red.300")(props),
    mt: 2,
    fontSize: "sm"
  };
};

var baseStyleIcon = props => {
  return {
    marginEnd: "0.5em",
    color: mode("red.500", "red.300")(props)
  };
};

var baseStyle = props => ({
  text: baseStyleText(props),
  icon: baseStyleIcon(props)
});

export default {
  parts: parts.keys,
  baseStyle
};
//# sourceMappingURL=form-error.js.map