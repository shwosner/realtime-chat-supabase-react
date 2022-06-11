import { t, transforms } from "../utils";

/**
 * The parser configuration for common outline properties
 */
export var ring = {
  ring: {
    transform: transforms.ring
  },
  ringColor: t.colors("--chakra-ring-color"),
  ringOffset: t.prop("--chakra-ring-offset-width"),
  ringOffsetColor: t.colors("--chakra-ring-offset-color"),
  ringInset: t.prop("--chakra-ring-inset")
};
//# sourceMappingURL=ring.js.map