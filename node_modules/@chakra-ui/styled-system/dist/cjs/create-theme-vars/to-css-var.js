"use strict";

exports.__esModule = true;
exports.toCSSVar = toCSSVar;

var _utils = require("@chakra-ui/utils");

var _createThemeVars2 = require("./create-theme-vars");

var _themeTokens = require("./theme-tokens");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function toCSSVar(rawTheme) {
  var _theme$config;

  /**
   * In the case the theme has already been converted to css-var (e.g extending the theme),
   * we can omit the computed css vars and recompute it for the extended theme.
   */
  var theme = (0, _themeTokens.omitVars)(rawTheme); // omit components and breakpoints from css variable map

  var tokens = (0, _themeTokens.extractTokens)(theme);
  var cssVarPrefix = (_theme$config = theme.config) == null ? void 0 : _theme$config.cssVarPrefix;

  var _createThemeVars = (0, _createThemeVars2.createThemeVars)(tokens, {
    cssVarPrefix: cssVarPrefix
  }),
      cssMap = _createThemeVars.cssMap,
      cssVars = _createThemeVars.cssVars;

  var defaultCssVars = {
    "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-ring-offset-width": "0px",
    "--chakra-ring-offset-color": "#fff",
    "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
    "--chakra-ring-offset-shadow": "0 0 #0000",
    "--chakra-ring-shadow": "0 0 #0000",
    "--chakra-space-x-reverse": "0",
    "--chakra-space-y-reverse": "0"
  };
  Object.assign(theme, {
    __cssVars: _extends({}, defaultCssVars, cssVars),
    __cssMap: cssMap,
    __breakpoints: (0, _utils.analyzeBreakpoints)(theme.breakpoints)
  });
  return theme;
}
//# sourceMappingURL=to-css-var.js.map