import { pipe } from "@chakra-ui/utils";
import { mergeThemeOverride } from "../extend-theme";
import { withDefaultColorScheme } from "./with-default-color-scheme";
import { withDefaultSize } from "./with-default-size";
import { withDefaultVariant } from "./with-default-variant";
export function withDefaultProps(_ref) {
  var {
    defaultProps: {
      colorScheme,
      variant,
      size
    },
    components
  } = _ref;

  var identity = t => t;

  var fns = [colorScheme ? withDefaultColorScheme({
    colorScheme,
    components
  }) : identity, size ? withDefaultSize({
    size,
    components
  }) : identity, variant ? withDefaultVariant({
    variant,
    components
  }) : identity];
  return theme => mergeThemeOverride(pipe(...fns)(theme));
}
//# sourceMappingURL=with-default-props.js.map