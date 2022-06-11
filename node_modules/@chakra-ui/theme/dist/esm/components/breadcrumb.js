import { breadcrumbAnatomy as parts } from "@chakra-ui/anatomy";
var baseStyleLink = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focus: {
    boxShadow: "outline"
  }
};
var baseStyle = {
  link: baseStyleLink
};
export default {
  parts: parts.keys,
  baseStyle
};
//# sourceMappingURL=breadcrumb.js.map