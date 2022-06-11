import type { PartsStyleFunction } from "@chakra-ui/theme-tools";
declare const _default: {
    parts: ("table" | "caption" | "thead" | "tbody" | "tr" | "th" | "td" | "tfoot")[];
    baseStyle: Partial<Record<"table" | "caption" | "thead" | "tbody" | "tr" | "th" | "td" | "tfoot", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
    variants: {
        simple: PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"table" | "caption" | "thead" | "tbody" | "tr" | "th" | "td" | "tfoot">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        striped: PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"table" | "caption" | "thead" | "tbody" | "tr" | "th" | "td" | "tfoot">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        unstyled: {};
    };
    sizes: Record<string, Partial<Record<"table" | "caption" | "thead" | "tbody" | "tr" | "th" | "td" | "tfoot", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>>;
    defaultProps: {
        variant: string;
        size: string;
        colorScheme: string;
    };
};
export default _default;
//# sourceMappingURL=table.d.ts.map