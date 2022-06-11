function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { createTransform } from "./create-transform";
import { logical, toConfig } from "./prop-config";
import { transformFunctions as transforms } from "./transform-functions";
export { transforms };
export * from "./types";
export var t = {
  borderWidths: toConfig("borderWidths"),
  borderStyles: toConfig("borderStyles"),
  colors: toConfig("colors"),
  borders: toConfig("borders"),
  radii: toConfig("radii", transforms.px),
  space: toConfig("space", transforms.px),
  spaceT: toConfig("space", transforms.px),

  degreeT(property) {
    return {
      property,
      transform: transforms.degree
    };
  },

  prop(property, scale, transform) {
    return _extends({
      property,
      scale
    }, scale && {
      transform: createTransform({
        scale,
        transform
      })
    });
  },

  propT(property, transform) {
    return {
      property,
      transform
    };
  },

  sizes: toConfig("sizes", transforms.px),
  sizesT: toConfig("sizes", transforms.fraction),
  shadows: toConfig("shadows"),
  logical,
  blur: toConfig("blur", transforms.blur)
};
//# sourceMappingURL=index.js.map