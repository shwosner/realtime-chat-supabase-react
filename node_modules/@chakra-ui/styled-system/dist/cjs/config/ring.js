"use strict";

exports.__esModule = true;
exports.ring = void 0;

var _utils = require("../utils");

/**
 * The parser configuration for common outline properties
 */
var ring = {
  ring: {
    transform: _utils.transforms.ring
  },
  ringColor: _utils.t.colors("--chakra-ring-color"),
  ringOffset: _utils.t.prop("--chakra-ring-offset-width"),
  ringOffsetColor: _utils.t.colors("--chakra-ring-offset-color"),
  ringInset: _utils.t.prop("--chakra-ring-inset")
};
exports.ring = ring;
//# sourceMappingURL=ring.js.map