"use strict";

exports.__esModule = true;

var _color = require("./color");

Object.keys(_color).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _color[key]) return;
  exports[key] = _color[key];
});

var _component = require("./component");

Object.keys(_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _component[key]) return;
  exports[key] = _component[key];
});

var _createBreakpoints = require("./create-breakpoints");

Object.keys(_createBreakpoints).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createBreakpoints[key]) return;
  exports[key] = _createBreakpoints[key];
});

var _anatomy = require("./anatomy");

Object.keys(_anatomy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _anatomy[key]) return;
  exports[key] = _anatomy[key];
});

var _cssCalc = require("./css-calc");

Object.keys(_cssCalc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _cssCalc[key]) return;
  exports[key] = _cssCalc[key];
});

var _cssVar = require("./css-var");

Object.keys(_cssVar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _cssVar[key]) return;
  exports[key] = _cssVar[key];
});
//# sourceMappingURL=index.js.map