// This implementation is heavily inspired by react-aria's implementation
import * as React from "react";
var defaultIdContext = {
  prefix: Math.round(Math.random() * 10000000000),
  current: 0
};
var IdContext = /*#__PURE__*/React.createContext(defaultIdContext);
export var IdProvider = /*#__PURE__*/React.memo((_ref) => {
  var {
    children
  } = _ref;
  var currentContext = React.useContext(IdContext);
  var isRoot = currentContext === defaultIdContext;
  var context = React.useMemo(() => ({
    prefix: isRoot ? 0 : ++currentContext.prefix,
    current: 0
  }), [isRoot, currentContext]);
  return /*#__PURE__*/React.createElement(IdContext.Provider, {
    value: context
  }, children);
});
export function useId(idProp, prefix) {
  var context = React.useContext(IdContext);
  return React.useMemo(() => idProp || [prefix, context.prefix, ++context.current].filter(Boolean).join("-"), // eslint-disable-next-line react-hooks/exhaustive-deps
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

export function useIds(idProp) {
  for (var _len = arguments.length, prefixes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    prefixes[_key - 1] = arguments[_key];
  }

  var id = useId(idProp);
  return React.useMemo(() => {
    return prefixes.map(prefix => prefix + "-" + id);
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

export function useOptionalPart(partId) {
  var [id, setId] = React.useState(null);
  var ref = React.useCallback(node => {
    setId(node ? partId : null);
  }, [partId]);
  return {
    ref,
    id,
    isRendered: Boolean(id)
  };
}
//# sourceMappingURL=use-id.js.map