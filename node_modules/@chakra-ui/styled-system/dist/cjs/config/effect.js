"use strict";

exports.__esModule = true;
exports.effect = void 0;

var _utils = require("../utils");

var effect = {
  boxShadow: _utils.t.shadows("boxShadow"),
  mixBlendMode: true,
  blendMode: _utils.t.prop("mixBlendMode"),
  backgroundBlendMode: true,
  bgBlendMode: _utils.t.prop("backgroundBlendMode"),
  opacity: true
};
exports.effect = effect;
Object.assign(effect, {
  shadow: effect.boxShadow
});
/**
 * Types for box and text shadow properties
 */
//# sourceMappingURL=effect.js.map