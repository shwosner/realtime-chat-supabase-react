import { mode, cssVar } from "@chakra-ui/theme-tools";
var $bg = cssVar("tooltip-bg");
var $arrowBg = cssVar("popper-arrow-bg");

var baseStyle = props => {
  var bg = mode("gray.700", "gray.300")(props);
  return {
    [$bg.variable]: "colors." + bg,
    px: "8px",
    py: "2px",
    bg: [$bg.reference],
    [$arrowBg.variable]: [$bg.reference],
    color: mode("whiteAlpha.900", "gray.900")(props),
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "sm",
    boxShadow: "md",
    maxW: "320px",
    zIndex: "tooltip"
  };
};

export default {
  baseStyle
};
//# sourceMappingURL=tooltip.js.map