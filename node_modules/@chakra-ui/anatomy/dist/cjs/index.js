"use strict";

exports.__esModule = true;
exports.tagAnatomy = exports.tabsAnatomy = exports.tableAnatomy = exports.switchAnatomy = exports.statAnatomy = exports.sliderAnatomy = exports.selectAnatomy = exports.radioAnatomy = exports.progressAnatomy = exports.popoverAnatomy = exports.pinInputAnatomy = exports.numberInputAnatomy = exports.modalAnatomy = exports.menuAnatomy = exports.listAnatomy = exports.inputAnatomy = exports.formErrorAnatomy = exports.formAnatomy = exports.editableAnatomy = exports.drawerAnatomy = exports.circularProgressAnatomy = exports.checkboxAnatomy = exports.buttonAnatomy = exports.breadcrumbAnatomy = exports.avatarAnatomy = exports.alertAnatomy = exports.accordionAnatomy = void 0;

var _themeTools = require("@chakra-ui/theme-tools");

/**
 * **Accordion anatomy**
 * - Item: the accordion item contains the button and panel
 * - Button: the button is the trigger for the panel
 * - Panel: the panel is the content of the accordion item
 * - Icon: the expanded/collapsed icon
 */
var accordionAnatomy = (0, _themeTools.anatomy)("accordion").parts("container", "item", "button", "panel").extend("icon");
/**
 * **Alert anatomy**
 * - Title: the alert's title
 * - Description: the alert's description
 * - Icon: the alert's icon
 */

exports.accordionAnatomy = accordionAnatomy;
var alertAnatomy = (0, _themeTools.anatomy)("alert").parts("title", "description", "container").extend("icon");
/**
 * **Avatar anatomy**
 * - Container: the container for the avatar
 * - Label: the avatar initials text
 * - Excess Label: the label or text that represents excess avatar count.
 * Typically used in avatar groups.
 * - Group: the container for the avatar group
 */

exports.alertAnatomy = alertAnatomy;
var avatarAnatomy = (0, _themeTools.anatomy)("avatar").parts("label", "badge", "container").extend("excessLabel", "group");
/**
 * **Breadcrumb anatomy**
 * - Item: the container for a breadcrumb item
 * - Link: the element that represents the breadcrumb link
 * - Container: the container for the breadcrumb items
 * - Separator: the separator between breadcrumb items
 */

exports.avatarAnatomy = avatarAnatomy;
var breadcrumbAnatomy = (0, _themeTools.anatomy)("breadcrumb").parts("link", "item", "container").extend("separator");
exports.breadcrumbAnatomy = breadcrumbAnatomy;
var buttonAnatomy = (0, _themeTools.anatomy)("button").parts();
exports.buttonAnatomy = buttonAnatomy;
var checkboxAnatomy = (0, _themeTools.anatomy)("checkbox").parts("control", "icon", "container").extend("label");
exports.checkboxAnatomy = checkboxAnatomy;
var circularProgressAnatomy = (0, _themeTools.anatomy)("progress").parts("track", "filledTrack").extend("label");
exports.circularProgressAnatomy = circularProgressAnatomy;
var drawerAnatomy = (0, _themeTools.anatomy)("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
exports.drawerAnatomy = drawerAnatomy;
var editableAnatomy = (0, _themeTools.anatomy)("editable").parts("preview", "input");
exports.editableAnatomy = editableAnatomy;
var formAnatomy = (0, _themeTools.anatomy)("form").parts("container", "requiredIndicator", "helperText");
exports.formAnatomy = formAnatomy;
var formErrorAnatomy = (0, _themeTools.anatomy)("formError").parts("text", "icon");
exports.formErrorAnatomy = formErrorAnatomy;
var inputAnatomy = (0, _themeTools.anatomy)("input").parts("addon", "field", "element");
exports.inputAnatomy = inputAnatomy;
var listAnatomy = (0, _themeTools.anatomy)("list").parts("container", "item", "icon");
exports.listAnatomy = listAnatomy;
var menuAnatomy = (0, _themeTools.anatomy)("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider");
exports.menuAnatomy = menuAnatomy;
var modalAnatomy = (0, _themeTools.anatomy)("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer");
exports.modalAnatomy = modalAnatomy;
var numberInputAnatomy = (0, _themeTools.anatomy)("numberinput").parts("root", "field", "stepperGroup", "stepper");
exports.numberInputAnatomy = numberInputAnatomy;
var pinInputAnatomy = (0, _themeTools.anatomy)("pininput").parts("field");
exports.pinInputAnatomy = pinInputAnatomy;
var popoverAnatomy = (0, _themeTools.anatomy)("popover").parts("content", "header", "body", "footer").extend("popper", "arrow");
exports.popoverAnatomy = popoverAnatomy;
var progressAnatomy = (0, _themeTools.anatomy)("progress").parts("label", "filledTrack", "track");
exports.progressAnatomy = progressAnatomy;
var radioAnatomy = (0, _themeTools.anatomy)("radio").parts("container", "control", "label");
exports.radioAnatomy = radioAnatomy;
var selectAnatomy = (0, _themeTools.anatomy)("select").parts("field", "icon");
exports.selectAnatomy = selectAnatomy;
var sliderAnatomy = (0, _themeTools.anatomy)("slider").parts("container", "track", "thumb", "filledTrack");
exports.sliderAnatomy = sliderAnatomy;
var statAnatomy = (0, _themeTools.anatomy)("stat").parts("container", "label", "helpText", "number", "icon");
exports.statAnatomy = statAnatomy;
var switchAnatomy = (0, _themeTools.anatomy)("switch").parts("container", "track", "thumb");
exports.switchAnatomy = switchAnatomy;
var tableAnatomy = (0, _themeTools.anatomy)("table").parts("table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption");
exports.tableAnatomy = tableAnatomy;
var tabsAnatomy = (0, _themeTools.anatomy)("tabs").parts("root", "tab", "tablist", "tabpanel", "tabpanels", "indicator");
/**
 * **Tag anatomy**
 * - Container: the container for the tag
 * - Label: the text content of the tag
 * - closeButton: the close button for the tag
 */

exports.tabsAnatomy = tabsAnatomy;
var tagAnatomy = (0, _themeTools.anatomy)("tag").parts("container", "label", "closeButton");
exports.tagAnatomy = tagAnatomy;
//# sourceMappingURL=index.js.map