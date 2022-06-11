"use strict";

exports.__esModule = true;
var _exportNames = {
  t: true,
  transforms: true
};
exports.t = void 0;

var _createTransform = require("./create-transform");

var _propConfig = require("./prop-config");

var _transformFunctions = require("./transform-functions");

exports.transforms = _transformFunctions.transformFunctions;

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  exports[key] = _types[key];
});

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var t = {
  borderWidths: (0, _propConfig.toConfig)("borderWidths"),
  borderStyles: (0, _propConfig.toConfig)("borderStyles"),
  colors: (0, _propConfig.toConfig)("colors"),
  borders: (0, _propConfig.toConfig)("borders"),
  radii: (0, _propConfig.toConfig)("radii", _transformFunctions.transformFunctions.px),
  space: (0, _propConfig.toConfig)("space", _transformFunctions.transformFunctions.px),
  spaceT: (0, _propConfig.toConfig)("space", _transformFunctions.transformFunctions.px),
  degreeT: function degreeT(property) {
    return {
      property: property,
      transform: _transformFunctions.transformFunctions.degree
    };
  },
  prop: function prop(property, scale, transform) {
    return _extends({
      property: property,
      scale: scale
    }, scale && {
      transform: (0, _createTransform.createTransform)({
        scale: scale,
        transform: transform
      })
    });
  },
  propT: function propT(property, transform) {
    return {
      property: property,
      transform: transform
    };
  },
  sizes: (0, _propConfig.toConfig)("sizes", _transformFunctions.transformFunctions.px),
  sizesT: (0, _propConfig.toConfig)("sizes", _transformFunctions.transformFunctions.fraction),
  shadows: (0, _propConfig.toConfig)("shadows"),
  logical: _propConfig.logical,
  blur: (0, _propConfig.toConfig)("blur", _transformFunctions.transformFunctions.blur)
};
exports.t = t;
//# sourceMappingURL=index.js.map