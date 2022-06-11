"use strict";

exports.__esModule = true;
exports.flexbox = void 0;

var _utils = require("../utils");

var _createTransform = require("../utils/create-transform");

var _templates = require("../utils/templates");

var flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: {
    transform: _utils.transforms.flexDirection
  },
  experimental_spaceX: {
    "static": _templates.spaceXTemplate,
    transform: (0, _createTransform.createTransform)({
      scale: "space",
      transform: function transform(value) {
        return value !== null ? {
          "--chakra-space-x": value
        } : null;
      }
    })
  },
  experimental_spaceY: {
    "static": _templates.spaceYTemplate,
    transform: (0, _createTransform.createTransform)({
      scale: "space",
      transform: function transform(value) {
        return value != null ? {
          "--chakra-space-y": value
        } : null;
      }
    })
  },
  flex: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: _utils.t.sizes("flexBasis"),
  justifySelf: true,
  alignSelf: true,
  order: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true
};
exports.flexbox = flexbox;
Object.assign(flexbox, {
  flexDir: flexbox.flexDirection
});
//# sourceMappingURL=flexbox.js.map