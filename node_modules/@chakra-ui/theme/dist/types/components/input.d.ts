import type { PartsStyleFunction } from "@chakra-ui/theme-tools";
declare const _default: {
    parts: ("element" | "addon" | "field")[];
    baseStyle: Partial<Record<"element" | "addon" | "field", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
    sizes: Record<string, Partial<Record<"element" | "addon" | "field", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>>;
    variants: {
        outline: PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"element" | "addon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        filled: PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"element" | "addon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        flushed: PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"element" | "addon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        unstyled: Partial<Record<"element" | "addon" | "field", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
    };
    defaultProps: {
        size: string;
        variant: string;
    };
};
export default _default;
//# sourceMappingURL=input.d.ts.map