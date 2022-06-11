function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { createContext } from "@chakra-ui/react-utils";
import { chakra, forwardRef, useStyles, useTheme } from "@chakra-ui/system";
import { Slide } from "@chakra-ui/transition";
import { cx, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { Modal, ModalFocusScope, useModalContext } from "./modal";
var [DrawerContextProvider, useDrawerContext] = createContext();
var placementMap = {
  start: {
    ltr: "left",
    rtl: "right"
  },
  end: {
    ltr: "right",
    rtl: "left"
  }
};

function getDrawerPlacement(placement, dir) {
  var _placementMap$placeme, _placementMap$placeme2;

  if (!placement) return;
  return (_placementMap$placeme = (_placementMap$placeme2 = placementMap[placement]) == null ? void 0 : _placementMap$placeme2[dir]) != null ? _placementMap$placeme : placement;
}

export function Drawer(props) {
  var _theme$components;

  var {
    isOpen,
    onClose,
    placement: placementProp = "right",
    children
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["isOpen", "onClose", "placement", "children"]);

  var theme = useTheme();
  var drawerStyleConfig = (_theme$components = theme.components) == null ? void 0 : _theme$components.Drawer;
  var placement = getDrawerPlacement(placementProp, theme.direction);
  return /*#__PURE__*/React.createElement(DrawerContextProvider, {
    value: {
      placement
    }
  }, /*#__PURE__*/React.createElement(Modal, _extends({
    isOpen: isOpen,
    onClose: onClose,
    styleConfig: drawerStyleConfig
  }, rest), children));
}
var StyledSlide = chakra(Slide);

/**
 * ModalContent is used to group modal's content. It has all the
 * necessary `aria-*` properties to indicate that it is a modal
 */
export var DrawerContent = /*#__PURE__*/forwardRef((props, ref) => {
  var {
    className,
    children
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["className", "children"]);

  var {
    getDialogProps,
    getDialogContainerProps,
    isOpen
  } = useModalContext();
  var dialogProps = getDialogProps(rest, ref);
  var containerProps = getDialogContainerProps();

  var _className = cx("chakra-modal__content", className);

  var styles = useStyles();

  var dialogStyles = _extends({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    outline: 0
  }, styles.dialog);

  var dialogContainerStyles = _extends({
    display: "flex",
    width: "100vw",
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0
  }, styles.dialogContainer);

  var {
    placement
  } = useDrawerContext();
  return /*#__PURE__*/React.createElement(chakra.div, _extends({}, containerProps, {
    className: "chakra-modal__content-container",
    __css: dialogContainerStyles
  }), /*#__PURE__*/React.createElement(ModalFocusScope, null, /*#__PURE__*/React.createElement(StyledSlide, _extends({
    direction: placement,
    in: isOpen,
    className: _className
  }, dialogProps, {
    __css: dialogStyles
  }), children)));
});

if (__DEV__) {
  DrawerContent.displayName = "DrawerContent";
}

export { ModalBody as DrawerBody, ModalCloseButton as DrawerCloseButton, ModalFooter as DrawerFooter, ModalHeader as DrawerHeader, ModalOverlay as DrawerOverlay } from "./modal";
//# sourceMappingURL=drawer.js.map