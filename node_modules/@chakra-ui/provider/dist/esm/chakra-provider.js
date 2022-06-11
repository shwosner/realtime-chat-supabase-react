import CSSReset from "@chakra-ui/css-reset";
import { PortalManager } from "@chakra-ui/portal";
import { ColorModeProvider, GlobalStyle, ThemeProvider } from "@chakra-ui/system";
import { EnvironmentProvider } from "@chakra-ui/react-env";
import * as React from "react";
import { IdProvider } from "@chakra-ui/hooks";

/**
 * The global provider that must be added to make all Chakra components
 * work correctly
 */
export var ChakraProvider = props => {
  var {
    children,
    colorModeManager,
    portalZIndex,
    resetCSS = true,
    theme = {},
    environment,
    cssVarsRoot
  } = props;

  var _children = /*#__PURE__*/React.createElement(EnvironmentProvider, {
    environment: environment
  }, children);

  return /*#__PURE__*/React.createElement(IdProvider, null, /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme,
    cssVarsRoot: cssVarsRoot
  }, /*#__PURE__*/React.createElement(ColorModeProvider, {
    colorModeManager: colorModeManager,
    options: theme.config
  }, resetCSS && /*#__PURE__*/React.createElement(CSSReset, null), /*#__PURE__*/React.createElement(GlobalStyle, null), portalZIndex ? /*#__PURE__*/React.createElement(PortalManager, {
    zIndex: portalZIndex
  }, _children) : _children)));
};
//# sourceMappingURL=chakra-provider.js.map