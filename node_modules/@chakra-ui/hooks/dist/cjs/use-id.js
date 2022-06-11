"use strict";

exports.__esModule = true;
exports.useId = useId;
exports.useIds = useIds;
exports.useOptionalPart = useOptionalPart;
exports.IdProvider = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// This implementation is heavily inspired by react-aria's implementation
var defaultIdContext = {
  prefix: Math.round(Math.random() * 10000000000),
  current: 0
};
var IdContext = /*#__PURE__*/React.createContext(defaultIdContext);
var IdProvider = /*#__PURE__*/React.memo(function (_ref) {
  var children = _ref.children;
  var currentContext = React.useContext(IdContext);
  var isRoot = currentContext === defaultIdContext;
  var context = React.useMemo(function () {
    return {
      prefix: isRoot ? 0 : ++currentContext.prefix,
      current: 0
    };
  }, [isRoot, currentContext]);
  return /*#__PURE__*/React.createElement(IdContext.Provider, {
    value: context
  }, children);
});
exports.IdProvider = IdProvider;

function useId(idProp, prefix) {
  var context = React.useContext(IdContext);
  return React.useMemo(function () {
    return idProp || [prefix, context.prefix, ++context.current].filter(Boolean).join("-");
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [idProp, prefix]);
}
/**
 * Reack hook to generate ids for use in compound components
 *
 * @param idProp the external id passed from the user
 * @param prefixes array of prefixes to use
 *
 * @example
 *
 * ```js
 * const [buttonId, menuId] = useIds("52", "button", "menu")
 *
 * // buttonId will be `button-52`
 * // menuId will be `menu-52`
 * ```
 */


function useIds(idProp) {
  for (var _len = arguments.length, prefixes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    prefixes[_key - 1] = arguments[_key];
  }

  var id = useId(idProp);
  return React.useMemo(function () {
    return prefixes.map(function (prefix) {
      return prefix + "-" + id;
    });
  }, [id, prefixes]);
}
/**
 * Used to generate an id, and after render, check if that id is rendered so we know
 * if we can use it in places such as `aria-labelledby`.
 *
 * @param partId - The unique id for the component part
 *
 * @example
 * const { ref, id } = useOptionalPart<HTMLInputElement>(`${id}-label`)
 */


function useOptionalPart(partId) {
  var _React$useState = React.useState(null),
      id = _React$useState[0],
      setId = _React$useState[1];

  var ref = React.useCallback(function (node) {
    setId(node ? partId : null);
  }, [partId]);
  return {
    ref: ref,
    id: id,
    isRendered: Boolean(id)
  };
}
//# sourceMappingURL=use-id.js.map