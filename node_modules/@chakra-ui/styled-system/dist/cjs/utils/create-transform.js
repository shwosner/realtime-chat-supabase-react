"use strict";

exports.__esModule = true;
exports.createTransform = createTransform;
exports.tokenToCSSVar = void 0;

var _utils = require("@chakra-ui/utils");

var tokenToCSSVar = function tokenToCSSVar(scale, value) {
  return function (theme) {
    var valueStr = String(value);
    var key = scale ? scale + "." + valueStr : valueStr;
    return (0, _utils.isObject)(theme.__cssMap) && key in theme.__cssMap ? theme.__cssMap[key].varRef : value;
  };
};

exports.tokenToCSSVar = tokenToCSSVar;

function createTransform(options) {
  var scale = options.scale,
      transform = options.transform,
      compose = options.compose;

  var fn = function fn(value, theme) {
    var _transform;

    var _value = tokenToCSSVar(scale, value)(theme);

    var result = (_transform = transform == null ? void 0 : transform(_value, theme)) != null ? _transform : _value;

    if (compose) {
      result = compose(result, theme);
    }

    return result;
  };

  return fn;
}
//# sourceMappingURL=create-transform.js.map