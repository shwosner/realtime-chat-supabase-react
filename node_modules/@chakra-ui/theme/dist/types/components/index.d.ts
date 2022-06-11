declare const _default: {
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
export default _default;
//# sourceMappingURL=index.d.ts.map