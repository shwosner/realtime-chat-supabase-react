"use strict";

exports.__esModule = true;
exports.layout = void 0;

var _utils = require("../utils");

var layout = {
  width: _utils.t.sizesT("width"),
  inlineSize: _utils.t.sizesT("inlineSize"),
  height: _utils.t.sizes("height"),
  blockSize: _utils.t.sizes("blockSize"),
  boxSize: _utils.t.sizes(["width", "height"]),
  minWidth: _utils.t.sizes("minWidth"),
  minInlineSize: _utils.t.sizes("minInlineSize"),
  minHeight: _utils.t.sizes("minHeight"),
  minBlockSize: _utils.t.sizes("minBlockSize"),
  maxWidth: _utils.t.sizes("maxWidth"),
  maxInlineSize: _utils.t.sizes("maxInlineSize"),
  maxHeight: _utils.t.sizes("maxHeight"),
  maxBlockSize: _utils.t.sizes("maxBlockSize"),
  d: _utils.t.prop("display"),
  overflow: true,
  overflowX: true,
  overflowY: true,
  overscrollBehavior: true,
  overscrollBehaviorX: true,
  overscrollBehaviorY: true,
  display: true,
  verticalAlign: true,
  boxSizing: true,
  boxDecorationBreak: true,
  "float": _utils.t.propT("float", _utils.transforms["float"]),
  objectFit: true,
  objectPosition: true,
  visibility: true,
  isolation: true
};
exports.layout = layout;
Object.assign(layout, {
  w: layout.width,
  h: layout.height,
  minW: layout.minWidth,
  maxW: layout.maxWidth,
  minH: layout.minHeight,
  maxH: layout.maxHeight,
  overscroll: layout.overscrollBehavior,
  overscrollX: layout.overscrollBehaviorX,
  overscrollY: layout.overscrollBehaviorY
});
/**
 * Types for layout related CSS properties
 */
//# sourceMappingURL=layout.js.map