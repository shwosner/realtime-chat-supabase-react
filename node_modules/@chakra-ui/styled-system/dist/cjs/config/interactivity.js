"use strict";

exports.__esModule = true;
exports.interactivity = void 0;

var _utils = require("../utils");

var interactivity = {
  appearance: true,
  cursor: true,
  resize: true,
  userSelect: true,
  pointerEvents: true,
  outline: {
    transform: _utils.transforms.outline
  },
  outlineOffset: true,
  outlineColor: _utils.t.colors("outlineColor")
};
exports.interactivity = interactivity;
//# sourceMappingURL=interactivity.js.map