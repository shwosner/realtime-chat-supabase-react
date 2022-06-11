import { anatomy } from "@chakra-ui/theme-tools";
/**
 * **Accordion anatomy**
 * - Item: the accordion item contains the button and panel
 * - Button: the button is the trigger for the panel
 * - Panel: the panel is the content of the accordion item
 * - Icon: the expanded/collapsed icon
 */

export var accordionAnatomy = anatomy("accordion").parts("container", "item", "button", "panel").extend("icon");
/**
 * **Alert anatomy**
 * - Title: the alert's title
 * - Description: the alert's description
 * - Icon: the alert's icon
 */

export var alertAnatomy = anatomy("alert").parts("title", "description", "container").extend("icon");
/**
 * **Avatar anatomy**
 * - Container: the container for the avatar
 * - Label: the avatar initials text
 * - Excess Label: the label or text that represents excess avatar count.
 * Typically used in avatar groups.
 * - Group: the container for the avatar group
 */

export var avatarAnatomy = anatomy("avatar").parts("label", "badge", "container").extend("excessLabel", "group");
/**
 * **Breadcrumb anatomy**
 * - Item: the container for a breadcrumb item
 * - Link: the element that represents the breadcrumb link
 * - Container: the container for the breadcrumb items
 * - Separator: the separator between breadcrumb items
 */

export var breadcrumbAnatomy = anatomy("breadcrumb").parts("link", "item", "container").extend("separator");
export var buttonAnatomy = anatomy("button").parts();
export var checkboxAnatomy = anatomy("checkbox").parts("control", "icon", "container").extend("label");
export var circularProgressAnatomy = anatomy("progress").parts("track", "filledTrack").extend("label");
export var drawerAnatomy = anatomy("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
export var editableAnatomy = anatomy("editable").parts("preview", "input");
export var formAnatomy = anatomy("form").parts("container", "requiredIndicator", "helperText");
export var formErrorAnatomy = anatomy("formError").parts("text", "icon");
export var inputAnatomy = anatomy("input").parts("addon", "field", "element");
export var listAnatomy = anatomy("list").parts("container", "item", "icon");
export var menuAnatomy = anatomy("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider");
export var modalAnatomy = anatomy("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
export var numberInputAnatomy = anatomy("numberinput").parts("root", "field", "stepperGroup", "stepper");
export var pinInputAnatomy = anatomy("pininput").parts("field");
export var popoverAnatomy = anatomy("popover").parts("content", "header", "body", "footer").extend("popper", "arrow");
export var progressAnatomy = anatomy("progress").parts("label", "filledTrack", "track");
export var radioAnatomy = anatomy("radio").parts("container", "control", "label");
export var selectAnatomy = anatomy("select").parts("field", "icon");
export var sliderAnatomy = anatomy("slider").parts("container", "track", "thumb", "filledTrack");
export var statAnatomy = anatomy("stat").parts("container", "label", "helpText", "number", "icon");
export var switchAnatomy = anatomy("switch").parts("container", "track", "thumb");
export var tableAnatomy = anatomy("table").parts("table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption");
export var tabsAnatomy = anatomy("tabs").parts("root", "tab", "tablist", "tabpanel", "tabpanels", "indicator");
/**
 * **Tag anatomy**
 * - Container: the container for the tag
 * - Label: the text content of the tag
 * - closeButton: the close button for the tag
 */

export var tagAnatomy = anatomy("tag").parts("container", "label", "closeButton");
//# sourceMappingURL=index.js.map