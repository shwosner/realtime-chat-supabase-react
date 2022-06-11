"use strict";

exports.__esModule = true;
var _exportNames = {
  tokenToCSSVar: true
};
exports.tokenToCSSVar = void 0;

var _config = require("./config");

Object.keys(_config).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _config[key]) return;
  exports[key] = _config[key];
});

var _css = require("./css");

Object.keys(_css).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _css[key]) return;
  exports[key] = _css[key];
});

var _system = require("./system.types");

Object.keys(_system).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _system[key]) return;
  exports[key] = _system[key];
});

var _theming = require("./theming.types");

Object.keys(_theming).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _theming[key]) return;
  exports[key] = _theming[key];
});

var _system2 = require("./system");

Object.keys(_system2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _system2[key]) return;
  exports[key] = _system2[key];
});

var _createThemeVars = require("./create-theme-vars");

Object.keys(_createThemeVars).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _createThemeVars[key]) return;
  exports[key] = _createThemeVars[key];
});

var _createTransform = require("./utils/create-transform");

exports.tokenToCSSVar = _createTransform.tokenToCSSVar;
//# sourceMappingURL=index.js.map