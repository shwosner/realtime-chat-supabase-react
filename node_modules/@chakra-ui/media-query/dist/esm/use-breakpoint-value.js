import { useTheme } from "@chakra-ui/system";
import { arrayToObjectNotation, fromEntries, isArray } from "@chakra-ui/utils";
import { getClosestValue } from "./media-query.utils";
import { useBreakpoint } from "./use-breakpoint";
/**
 * React hook for getting the value for the current breakpoint from the
 * provided responsive values object.
 *
 * @param values
 * @param defaultBreakpoint default breakpoint name
 * (in non-window environments like SSR)
 *
 * For SSR, you can use a package like [is-mobile](https://github.com/kaimallea/isMobile)
 * to get the default breakpoint value from the user-agent
 *
 * @example
 * const width = useBreakpointValue({ base: '150px', md: '250px' })
 */

export function useBreakpointValue(values, defaultBreakpoint) {
  var breakpoint = useBreakpoint(defaultBreakpoint);
  var theme = useTheme();
  if (!breakpoint) return undefined;
  /**
   * Get the non-number breakpoint keys from the provided breakpoints
   */

  var breakpoints = Object.keys(theme.breakpoints);
  var obj = isArray(values) ? fromEntries(Object.entries(arrayToObjectNotation(values, breakpoints)).map((_ref) => {
    var [key, value] = _ref;
    return [key, value];
  })) : values;
  return getClosestValue(obj, breakpoint, breakpoints);
}
//# sourceMappingURL=use-breakpoint-value.js.map