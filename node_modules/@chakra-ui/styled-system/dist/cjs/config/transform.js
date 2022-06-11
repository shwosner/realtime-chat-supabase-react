"use strict";

exports.__esModule = true;
exports.transform = void 0;

var _utils = require("../utils");

var transform = {
  clipPath: true,
  transform: _utils.t.propT("transform", _utils.transforms.transform),
  transformOrigin: true,
  translateX: _utils.t.spaceT("--chakra-translate-x"),
  translateY: _utils.t.spaceT("--chakra-translate-y"),
  skewX: _utils.t.degreeT("--chakra-skew-x"),
  skewY: _utils.t.degreeT("--chakra-skew-y"),
  scaleX: _utils.t.prop("--chakra-scale-x"),
  scaleY: _utils.t.prop("--chakra-scale-y"),
  scale: _utils.t.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: _utils.t.degreeT("--chakra-rotate")
};
exports.transform = transform;
//# sourceMappingURL=transform.js.map