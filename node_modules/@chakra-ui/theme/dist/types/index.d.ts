import type { ThemeConfig } from "./theme.types";
export declare const theme: {
    components: {
        Accordion: {
            parts: ("container" | "item" | "button" | "panel" | "icon")[];
            baseStyle: Partial<Record<"container" | "item" | "button" | "panel" | "icon", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
        };
        Alert: {
            parts: ("container" | "icon" | "title" | "description")[];
            baseStyle: Partial<Record<"container" | "icon" | "title" | "description", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
            variants: {
                subtle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"container" | "icon" | "title" | "description">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                "left-accent": import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"container" | "icon" | "title" | "description">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                "top-accent": import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"container" | "icon" | "title" | "description">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                solid: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"container" | "icon" | "title" | "description">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
            };
            defaultProps: {
                variant: string;
                colorScheme: string;
            };
        };
        Avatar: {
            parts: ("container" | "label" | "badge" | "excessLabel" | "group")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"container" | "label" | "badge" | "excessLabel" | "group">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
            sizes: {
                "2xs": Partial<Record<"container" | "label" | "badge" | "excessLabel" | "group", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                xs: Partial<Record<"container" | "label" | "badge" | "excessLabel" | "group", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                sm: Partial<Record<"container" | "label" | "badge" | "excessLabel" | "group", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                md: Partial<Record<"container" | "label" | "badge" | "excessLabel" | "group", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                lg: Partial<Record<"container" | "label" | "badge" | "excessLabel" | "group", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                xl: Partial<Record<"container" | "label" | "badge" | "excessLabel" | "group", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                "2xl": Partial<Record<"container" | "label" | "badge" | "excessLabel" | "group", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                full: Partial<Record<"container" | "label" | "badge" | "excessLabel" | "group", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
            };
            defaultProps: {
                size: string;
            };
        };
        Badge: {
            baseStyle: import("@chakra-ui/styled-system").CSSWithMultiValues;
            variants: {
                solid: import("@chakra-ui/theme-tools").SystemStyleFunction;
                subtle: import("@chakra-ui/theme-tools").SystemStyleFunction;
                outline: import("@chakra-ui/theme-tools").SystemStyleFunction;
            };
            defaultProps: {
                variant: string;
                colorScheme: string;
            };
        };
        Breadcrumb: {
            parts: ("link" | "container" | "item" | "separator")[];
            baseStyle: Partial<Record<"link" | "container" | "item" | "separator", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
        };
        Button: {
            baseStyle: import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursiveCSSSelector<import("@chakra-ui/styled-system").CSSWithMultiValues>;
            variants: {
                ghost: import("@chakra-ui/theme-tools").SystemStyleFunction;
                outline: import("@chakra-ui/theme-tools").SystemStyleFunction;
                solid: import("@chakra-ui/theme-tools").SystemStyleFunction;
                link: import("@chakra-ui/theme-tools").SystemStyleFunction;
                unstyled: import("@chakra-ui/styled-system").CSSWithMultiValues;
            };
            sizes: Record<string, import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>;
            defaultProps: {
                variant: string;
                size: string;
                colorScheme: string;
            };
        };
        Checkbox: {
            parts: ("container" | "icon" | "label" | "control")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"container" | "icon" | "label" | "control">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
            sizes: Record<string, Partial<Record<"container" | "icon" | "label" | "control", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>>;
            defaultProps: {
                size: string;
                colorScheme: string;
            };
        };
        CloseButton: {
            baseStyle: import("@chakra-ui/theme-tools").SystemStyleFunction;
            sizes: Record<string, import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>;
            defaultProps: {
                size: string;
            };
        };
        Code: {
            baseStyle: import("@chakra-ui/styled-system").CSSWithMultiValues | (import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursiveCSSSelector<import("@chakra-ui/styled-system").CSSWithMultiValues>);
            variants: {
                solid: import("@chakra-ui/theme-tools").SystemStyleFunction;
                subtle: import("@chakra-ui/theme-tools").SystemStyleFunction;
                outline: import("@chakra-ui/theme-tools").SystemStyleFunction;
            };
            defaultProps: {
                variant: string;
                colorScheme: string;
            };
        };
        Container: {
            baseStyle: import("@chakra-ui/styled-system").CSSWithMultiValues | (import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursiveCSSSelector<import("@chakra-ui/styled-system").CSSWithMultiValues>);
        };
        Divider: {
            baseStyle: import("@chakra-ui/styled-system").CSSWithMultiValues;
            variants: {
                solid: import("@chakra-ui/styled-system").CSSWithMultiValues | (import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursiveCSSSelector<import("@chakra-ui/styled-system").CSSWithMultiValues>);
                dashed: import("@chakra-ui/styled-system").CSSWithMultiValues | (import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursiveCSSSelector<import("@chakra-ui/styled-system").CSSWithMultiValues>);
            };
            defaultProps: {
                variant: string;
            };
        };
        Drawer: {
            parts: ("overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
            sizes: {
                xs: Partial<Record<"overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                sm: Partial<Record<"overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                md: Partial<Record<"overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                lg: Partial<Record<"overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                xl: Partial<Record<"overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                full: Partial<Record<"overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
            };
            defaultProps: {
                size: string;
            };
        };
        Editable: {
            parts: ("preview" | "input")[];
            baseStyle: Partial<Record<"preview" | "input", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
        };
        Form: {
            parts: ("container" | "requiredIndicator" | "helperText")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"container" | "requiredIndicator" | "helperText">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        };
        FormLabel: {
            baseStyle: import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>;
        };
        Heading: {
            baseStyle: import("@chakra-ui/styled-system").CSSWithMultiValues | (import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursiveCSSSelector<import("@chakra-ui/styled-system").CSSWithMultiValues>);
            sizes: Record<string, import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>;
            defaultProps: {
                size: string;
            };
        };
        Input: {
            parts: ("element" | "addon" | "field")[];
            baseStyle: Partial<Record<"element" | "addon" | "field", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
            sizes: Record<string, Partial<Record<"element" | "addon" | "field", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>>;
            variants: {
                outline: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"element" | "addon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                filled: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"element" | "addon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                flushed: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"element" | "addon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                unstyled: Partial<Record<"element" | "addon" | "field", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
            };
            defaultProps: {
                size: string;
                variant: string;
            };
        };
        Kbd: {
            baseStyle: import("@chakra-ui/theme-tools").SystemStyleFunction;
        };
        Link: {
            baseStyle: import("@chakra-ui/styled-system").CSSWithMultiValues & import("@chakra-ui/styled-system").RecursiveCSSSelector<import("@chakra-ui/styled-system").CSSWithMultiValues>;
        };
        List: {
            parts: ("container" | "item" | "icon")[];
            baseStyle: Partial<Record<"container" | "item" | "icon", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
        };
        Menu: {
            parts: ("item" | "button" | "list" | "groupTitle" | "command" | "divider")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"item" | "button" | "list" | "groupTitle" | "command" | "divider">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        };
        Modal: {
            parts: ("overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
            sizes: {
                xs: Partial<Record<"overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                sm: Partial<Record<"overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                md: Partial<Record<"overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                lg: Partial<Record<"overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                xl: Partial<Record<"overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                "2xl": Partial<Record<"overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                "3xl": Partial<Record<"overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                "4xl": Partial<Record<"overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                "5xl": Partial<Record<"overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                "6xl": Partial<Record<"overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                full: Partial<Record<"overlay" | "dialogContainer" | "dialog" | "header" | "closeButton" | "body" | "footer", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
            };
            defaultProps: {
                size: string;
            };
        };
        NumberInput: {
            parts: ("field" | "root" | "stepperGroup" | "stepper")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"field" | "root" | "stepperGroup" | "stepper">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
            sizes: {
                xs: Partial<Record<"field" | "root" | "stepperGroup" | "stepper", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                sm: Partial<Record<"field" | "root" | "stepperGroup" | "stepper", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                md: Partial<Record<"field" | "root" | "stepperGroup" | "stepper", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
                lg: Partial<Record<"field" | "root" | "stepperGroup" | "stepper", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
            };
            variants: {
                outline: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"element" | "addon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                filled: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"element" | "addon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                flushed: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"element" | "addon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                unstyled: Partial<Record<"element" | "addon" | "field", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
            };
            defaultProps: {
                size: string;
                variant: string;
            };
        };
        PinInput: {
            baseStyle: import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>;
            sizes: Record<string, import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>;
            variants: Record<string, import("@chakra-ui/theme-tools").SystemStyleInterpolation>;
            defaultProps: {
                size: string;
                variant: string;
            };
        };
        Popover: {
            parts: ("content" | "header" | "body" | "footer" | "popper" | "arrow")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"content" | "header" | "body" | "footer" | "popper" | "arrow">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        };
        Progress: {
            parts: ("label" | "track" | "filledTrack")[];
            sizes: Record<string, Partial<Record<"label" | "track" | "filledTrack", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>>;
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"label" | "track" | "filledTrack">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
            defaultProps: {
                size: string;
                colorScheme: string;
            };
        };
        Radio: {
            parts: ("container" | "label" | "control")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"container" | "label" | "control">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
            sizes: Record<string, Partial<Record<"container" | "label" | "control", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>>;
            defaultProps: {
                size: string;
                colorScheme: string;
            };
        };
        Select: {
            parts: ("icon" | "field")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"icon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
            sizes: Record<string, Partial<Record<"icon" | "field", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>>;
            variants: {
                outline: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"element" | "addon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                filled: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"element" | "addon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                flushed: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"element" | "addon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                unstyled: Partial<Record<"element" | "addon" | "field", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
            };
            defaultProps: {
                size: string;
                variant: string;
            };
        };
        Skeleton: {
            baseStyle: import("@chakra-ui/theme-tools").SystemStyleFunction;
        };
        SkipLink: {
            baseStyle: import("@chakra-ui/theme-tools").SystemStyleFunction;
        };
        Slider: {
            parts: ("container" | "track" | "filledTrack" | "thumb")[];
            sizes: {
                lg: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"container" | "track" | "filledTrack" | "thumb">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                md: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"container" | "track" | "filledTrack" | "thumb">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                sm: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"container" | "track" | "filledTrack" | "thumb">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
            };
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"container" | "track" | "filledTrack" | "thumb">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
            defaultProps: {
                size: string;
                colorScheme: string;
            };
        };
        Spinner: {
            baseStyle: import("@chakra-ui/styled-system").CSSWithMultiValues;
            sizes: Record<string, import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>;
            defaultProps: {
                size: string;
            };
        };
        Stat: {
            parts: ("number" | "container" | "icon" | "label" | "helpText")[];
            baseStyle: Partial<Record<"number" | "container" | "icon" | "label" | "helpText", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
            sizes: Record<string, Partial<Record<"number" | "container" | "icon" | "label" | "helpText", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>>;
            defaultProps: {
                size: string;
            };
        };
        Switch: {
            parts: ("container" | "track" | "thumb")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"container" | "track" | "thumb">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
            sizes: Record<string, Partial<Record<"container" | "track" | "thumb", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>>;
            defaultProps: {
                size: string;
                colorScheme: string;
            };
        };
        Table: {
            parts: ("table" | "caption" | "thead" | "tbody" | "tr" | "th" | "td" | "tfoot")[];
            baseStyle: Partial<Record<"table" | "caption" | "thead" | "tbody" | "tr" | "th" | "td" | "tfoot", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
            variants: {
                simple: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"table" | "caption" | "thead" | "tbody" | "tr" | "th" | "td" | "tfoot">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                striped: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"table" | "caption" | "thead" | "tbody" | "tr" | "th" | "td" | "tfoot">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                unstyled: {};
            };
            sizes: Record<string, Partial<Record<"table" | "caption" | "thead" | "tbody" | "tr" | "th" | "td" | "tfoot", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>>;
            defaultProps: {
                variant: string;
                size: string;
                colorScheme: string;
            };
        };
        Tabs: {
            parts: ("tab" | "tabpanel" | "tabpanels" | "root" | "tablist" | "indicator")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"tab" | "tabpanel" | "tabpanels" | "root" | "tablist" | "indicator">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
            sizes: Record<string, Partial<Record<"tab" | "tabpanel" | "tabpanels" | "root" | "tablist" | "indicator", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>>;
            variants: Record<string, import("@chakra-ui/theme-tools").PartsStyleInterpolation<Pick<import("@chakra-ui/theme-tools").Anatomy<"tab" | "tabpanel" | "tabpanels" | "root" | "tablist" | "indicator">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>>;
            defaultProps: {
                size: string;
                variant: string;
                colorScheme: string;
            };
        };
        Tag: {
            parts: ("container" | "label" | "closeButton")[];
            variants: Record<string, import("@chakra-ui/theme-tools").PartsStyleInterpolation<Pick<import("@chakra-ui/theme-tools").Anatomy<"container" | "label" | "closeButton">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>>;
            baseStyle: Partial<Record<"container" | "label" | "closeButton", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>;
            sizes: Record<string, Partial<Record<"container" | "label" | "closeButton", import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>>>;
            defaultProps: {
                size: string;
                variant: string;
                colorScheme: string;
            };
        };
        Textarea: {
            baseStyle: import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>;
            sizes: Record<string, import("@chakra-ui/styled-system").RecursiveCSSObject<import("@chakra-ui/styled-system").CSSWithMultiValues>>;
            variants: Record<string, import("@chakra-ui/theme-tools").SystemStyleInterpolation>;
            defaultProps: {
                size: string;
                variant: string;
            };
        };
        Tooltip: {
            baseStyle: import("@chakra-ui/theme-tools").SystemStyleFunction;
        };
        FormError: {
            parts: ("text" | "icon")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"text" | "icon">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        };
    };
    styles: import("@chakra-ui/theme-tools").Styles;
    config: ThemeConfig;
    /**
     * @deprecated
     * Duplicate theme type. Please use `Theme`
     */
    sizes: {
        container: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        max: string;
        min: string;
        full: string;
        "3xs": string;
        "2xs": string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
        "7xl": string;
        "8xl": string;
        px: string;
        0.5: string;
        1: string;
        1.5: string;
        2: string;
        2.5: string;
        3: string;
        3.5: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    shadows: {
        xs: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        outline: string;
        inner: string;
        none: string;
        "dark-lg": string;
    };
    space: {
        px: string;
        0.5: string;
        1: string;
        1.5: string;
        2: string;
        2.5: string;
        3: string;
        3.5: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    borders: {
        none: number;
        "1px": string;
        "2px": string;
        "4px": string;
        "8px": string;
    };
    transition: {
        property: {
            common: string;
            colors: string;
            dimensions: string;
            position: string;
            background: string;
        };
        easing: {
            "ease-in": string;
            "ease-out": string;
            "ease-in-out": string;
        };
        duration: {
            "ultra-fast": string;
            faster: string;
            fast: string;
            normal: string;
            slow: string;
            slower: string;
            "ultra-slow": string;
        };
    };
    letterSpacings: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
    };
    lineHeights: {
        normal: string;
        none: number;
        shorter: number;
        short: number;
        base: number;
        tall: number;
        taller: string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
    };
    fontWeights: {
        hairline: number;
        thin: number;
        light: number;
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
        extrabold: number;
        black: number;
    };
    fonts: {
        heading: string;
        body: string;
        mono: string;
    };
    fontSizes: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
        "7xl": string;
        "8xl": string;
        "9xl": string;
    };
    breakpoints: import("@chakra-ui/theme-tools").Breakpoints<{
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
    }>;
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    radii: {
        none: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        full: string;
    };
    blur: {
        none: number;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
    };
    colors: {
        transparent: string;
        current: string;
        black: string;
        white: string;
        whiteAlpha: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        blackAlpha: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        gray: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        red: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        orange: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        yellow: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        green: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        teal: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        blue: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        cyan: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        purple: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        pink: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        linkedin: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        facebook: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        messenger: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        whatsapp: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        twitter: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        telegram: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
    };
    direction: "ltr";
};
export declare type Theme = typeof theme;
/**
 * @deprecated
 * Duplicate theme type. Please use `Theme`
 */
export declare type DefaultChakraTheme = Theme;
export * from "./theme.types";
export * from "./utils";
export default theme;
//# sourceMappingURL=index.d.ts.map