import { popoverAnatomy as parts } from "@chakra-ui/anatomy";
import { cssVar, mode } from "@chakra-ui/theme-tools";
var $popperBg = cssVar("popper-bg");
var $arrowBg = cssVar("popper-arrow-bg");
var $arrowShadowColor = cssVar("popper-arrow-shadow-color");
var baseStylePopper = {
  zIndex: 10
};

var baseStyleContent = props => {
  var bg = mode("white", "gray.700")(props);
  var shadowColor = mode("gray.200", "whiteAlpha.300")(props);
  return {
    [$popperBg.variable]: "colors." + bg,
    bg: $popperBg.reference,
    [$arrowBg.variable]: $popperBg.reference,
    [$arrowShadowColor.variable]: "colors." + shadowColor,
    width: "xs",
    border: "1px solid",
    borderColor: "inherit",
    borderRadius: "md",
    boxShadow: "sm",
    zIndex: "inherit",
    _focus: {
      outline: 0,
      boxShadow: "outline"
    }
  };
};

var baseStyleHeader = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
};
var baseStyleBody = {
  px: 3,
  py: 2
};
var baseStyleFooter = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
};

var baseStyle = props => ({
  popper: baseStylePopper,
  content: baseStyleContent(props),
  header: baseStyleHeader,
  body: baseStyleBody,
  footer: baseStyleFooter,
  arrow: {}
});

export default {
  parts: parts.keys,
  baseStyle
};
//# sourceMappingURL=popover.js.map