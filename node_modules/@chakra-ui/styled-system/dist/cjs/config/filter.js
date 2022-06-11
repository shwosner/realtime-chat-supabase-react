"use strict";

exports.__esModule = true;
exports.filter = void 0;

var _utils = require("../utils");

var filter = {
  filter: {
    transform: _utils.transforms.filter
  },
  blur: _utils.t.blur("--chakra-blur"),
  brightness: _utils.t.propT("--chakra-brightness", _utils.transforms.brightness),
  contrast: _utils.t.propT("--chakra-contrast", _utils.transforms.contrast),
  hueRotate: _utils.t.degreeT("--chakra-hue-rotate"),
  invert: _utils.t.propT("--chakra-invert", _utils.transforms.invert),
  saturate: _utils.t.propT("--chakra-saturate", _utils.transforms.saturate),
  dropShadow: _utils.t.propT("--chakra-drop-shadow", _utils.transforms.dropShadow),
  backdropFilter: {
    transform: _utils.transforms.backdropFilter
  },
  backdropBlur: _utils.t.blur("--chakra-backdrop-blur"),
  backdropBrightness: _utils.t.propT("--chakra-backdrop-brightness", _utils.transforms.brightness),
  backdropContrast: _utils.t.propT("--chakra-backdrop-contrast", _utils.transforms.contrast),
  backdropHueRotate: _utils.t.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: _utils.t.propT("--chakra-backdrop-invert", _utils.transforms.invert),
  backdropSaturate: _utils.t.propT("--chakra-backdrop-saturate", _utils.transforms.saturate)
};
exports.filter = filter;
//# sourceMappingURL=filter.js.map