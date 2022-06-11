"use strict";

exports.__esModule = true;
exports.background = void 0;

var _utils = require("../utils");

var background = {
  background: _utils.t.colors("background"),
  backgroundColor: _utils.t.colors("backgroundColor"),
  backgroundImage: _utils.t.propT("backgroundImage", _utils.transforms.bgImage),
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundClip: {
    transform: _utils.transforms.bgClip
  },
  bgSize: _utils.t.prop("backgroundSize"),
  bgPosition: _utils.t.prop("backgroundPosition"),
  bg: _utils.t.colors("background"),
  bgColor: _utils.t.colors("backgroundColor"),
  bgPos: _utils.t.prop("backgroundPosition"),
  bgRepeat: _utils.t.prop("backgroundRepeat"),
  bgAttachment: _utils.t.prop("backgroundAttachment"),
  bgGradient: _utils.t.propT("backgroundImage", _utils.transforms.gradient),
  bgClip: {
    transform: _utils.transforms.bgClip
  }
};
exports.background = background;
Object.assign(background, {
  bgImage: background.backgroundImage,
  bgImg: background.backgroundImage
});
//# sourceMappingURL=background.js.map