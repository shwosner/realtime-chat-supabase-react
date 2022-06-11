"use strict";

exports.__esModule = true;
exports.ChakraProvider = void 0;

var _provider = require("@chakra-ui/provider");

var _theme = _interopRequireDefault(require("@chakra-ui/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ChakraProvider = _provider.ChakraProvider;
exports.ChakraProvider = ChakraProvider;
ChakraProvider.defaultProps = {
  theme: _theme["default"]
};
//# sourceMappingURL=chakra-provider.js.map