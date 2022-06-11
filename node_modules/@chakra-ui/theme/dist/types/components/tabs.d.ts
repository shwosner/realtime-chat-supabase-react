import type { PartsStyleFunction, PartsStyleInterpolation } from "@chakra-ui/theme-tools";
declare const _default: {
    parts: ("tab" | "tabpanel" | "tabpanels" | "root" | "tablist" | "indicator")[];
    baseStyle: PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"tab" | "tabpanel" | "tabpanels" | "root" | "tablist" | "indicator">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
    sizes: Record<string, Partial<Record<"tab" | "tabpanel" | "tabpanels" | "root" | "tablist" | "indicator", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>>;
    variants: Record<string, PartsStyleInterpolation<Pick<import("@chakra-ui/theme-tools").Anatomy<"tab" | "tabpanel" | "tabpanels" | "root" | "tablist" | "indicator">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>>;
    defaultProps: {
        size: string;
        variant: string;
        colorScheme: string;
    };
};
export default _default;
//# sourceMappingURL=tabs.d.ts.map