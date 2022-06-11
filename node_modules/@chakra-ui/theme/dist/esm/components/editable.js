import { editableAnatomy as parts } from "@chakra-ui/anatomy";
var baseStylePreview = {
  borderRadius: "md",
  py: "3px",
  transitionProperty: "common",
  transitionDuration: "normal"
};
var baseStyleInput = {
  borderRadius: "md",
  py: "3px",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focus: {
    boxShadow: "outline"
  },
  _placeholder: {
    opacity: 0.6
  }
};
var baseStyle = {
  preview: baseStylePreview,
  input: baseStyleInput
};
export default {
  parts: parts.keys,
  baseStyle
};
//# sourceMappingURL=editable.js.map