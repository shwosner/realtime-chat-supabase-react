"use strict";

exports.__esModule = true;

var _chakraProvider = require("./chakra-provider");

Object.keys(_chakraProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _chakraProvider[key]) return;
  exports[key] = _chakraProvider[key];
});
//# sourceMappingURL=index.js.map