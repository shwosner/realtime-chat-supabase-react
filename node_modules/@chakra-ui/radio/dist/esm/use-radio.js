function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { useFormControlContext } from "@chakra-ui/form-control";
import { useBoolean, useControllableProp, useId } from "@chakra-ui/hooks";
import { mergeRefs } from "@chakra-ui/react-utils";
import { ariaAttr, callAllHandlers, dataAttr, warn } from "@chakra-ui/utils";
import { visuallyHiddenStyle } from "@chakra-ui/visually-hidden";
import { useCallback, useRef, useState } from "react";
import { useRadioGroupContext } from "./radio-group";
/**
 * @todo use the `useClickable` hook here
 * to manage the isFocusable & isDisabled props
 */

export function useRadio(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    defaultIsChecked,
    defaultChecked = defaultIsChecked,
    isChecked: isCheckedProp,
    isFocusable,
    isDisabled: isDisabledProp,
    isReadOnly: isReadOnlyProp,
    isRequired: isRequiredProp,
    onChange,
    isInvalid: isInvalidProp,
    name,
    value,
    id: idProp,
    "data-radiogroup": dataRadioGroup
  } = props,
      htmlProps = _objectWithoutPropertiesLoose(props, ["defaultIsChecked", "defaultChecked", "isChecked", "isFocusable", "isDisabled", "isReadOnly", "isRequired", "onChange", "isInvalid", "name", "value", "id", "data-radiogroup"]);

  var uuid = useId(undefined, "radio");
  var formControl = useFormControlContext();
  var group = useRadioGroupContext();
  var isWithinRadioGroup = !!group || !!dataRadioGroup;
  var isWithinFormControl = !!formControl;
  var id = isWithinFormControl && !isWithinRadioGroup ? formControl.id : uuid;
  id = idProp != null ? idProp : id;
  var isDisabled = isDisabledProp != null ? isDisabledProp : formControl == null ? void 0 : formControl.isDisabled;
  var isReadOnly = isReadOnlyProp != null ? isReadOnlyProp : formControl == null ? void 0 : formControl.isReadOnly;
  var isRequired = isRequiredProp != null ? isRequiredProp : formControl == null ? void 0 : formControl.isRequired;
  var isInvalid = isInvalidProp != null ? isInvalidProp : formControl == null ? void 0 : formControl.isInvalid;
  var [isFocused, setFocused] = useBoolean();
  var [isHovered, setHovering] = useBoolean();
  var [isActive, setActive] = useBoolean();
  var ref = useRef(null);
  var [isCheckedState, setChecked] = useState(Boolean(defaultChecked));
  var [isControlled, isChecked] = useControllableProp(isCheckedProp, isCheckedState);
  warn({
    condition: !!defaultIsChecked,
    message: 'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. ' + 'Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.'
  });
  var handleChange = useCallback(event => {
    if (isReadOnly || isDisabled) {
      event.preventDefault();
      return;
    }

    if (!isControlled) {
      setChecked(event.target.checked);
    }

    onChange == null ? void 0 : onChange(event);
  }, [isControlled, isDisabled, isReadOnly, onChange]);
  var onKeyDown = useCallback(event => {
    if (event.key === " ") {
      setActive.on();
    }
  }, [setActive]);
  var onKeyUp = useCallback(event => {
    if (event.key === " ") {
      setActive.off();
    }
  }, [setActive]);
  var getCheckboxProps = useCallback(function (props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({}, props, {
      ref,
      "data-active": dataAttr(isActive),
      "data-hover": dataAttr(isHovered),
      "data-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(isInvalid),
      "data-checked": dataAttr(isChecked),
      "data-focus": dataAttr(isFocused),
      "data-readonly": dataAttr(isReadOnly),
      "aria-hidden": true,
      onMouseDown: callAllHandlers(props.onMouseDown, setActive.on),
      onMouseUp: callAllHandlers(props.onMouseUp, setActive.off),
      onMouseEnter: callAllHandlers(props.onMouseEnter, setHovering.on),
      onMouseLeave: callAllHandlers(props.onMouseLeave, setHovering.off)
    });
  }, [isActive, isHovered, isDisabled, isInvalid, isChecked, isFocused, isReadOnly, setActive.on, setActive.off, setHovering.on, setHovering.off]);
  var {
    onFocus,
    onBlur
  } = formControl != null ? formControl : {};
  var getInputProps = useCallback(function (props, forwardedRef) {
    if (props === void 0) {
      props = {};
    }

    if (forwardedRef === void 0) {
      forwardedRef = null;
    }

    var trulyDisabled = isDisabled && !isFocusable;
    return _extends({}, props, {
      id,
      ref: mergeRefs(forwardedRef, ref),
      type: "radio",
      name,
      value,
      onChange: callAllHandlers(props.onChange, handleChange),
      onBlur: callAllHandlers(onBlur, props.onBlur, setFocused.off),
      onFocus: callAllHandlers(onFocus, props.onFocus, setFocused.on),
      onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown),
      onKeyUp: callAllHandlers(props.onKeyUp, onKeyUp),
      checked: isChecked,
      disabled: trulyDisabled,
      readOnly: isReadOnly,
      required: isRequired,
      "aria-invalid": ariaAttr(isInvalid),
      "aria-disabled": ariaAttr(trulyDisabled),
      "aria-readonly": ariaAttr(isReadOnly),
      "aria-required": ariaAttr(isRequired),
      style: visuallyHiddenStyle
    });
  }, [isDisabled, isFocusable, id, name, value, handleChange, onBlur, setFocused, onFocus, onKeyDown, onKeyUp, isChecked, isReadOnly, isRequired, isInvalid]);

  var getLabelProps = function getLabelProps(props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({}, props, {
      ref,
      onMouseDown: callAllHandlers(props.onMouseDown, stop),
      onTouchStart: callAllHandlers(props.onTouchStart, stop),
      "data-disabled": dataAttr(isDisabled),
      "data-checked": dataAttr(isChecked),
      "data-invalid": dataAttr(isInvalid)
    });
  };

  var getRootProps = function getRootProps(pros, ref) {
    if (ref === void 0) {
      ref = null;
    }

    return _extends({}, props, {
      ref,
      "data-disabled": dataAttr(isDisabled),
      "data-checked": dataAttr(isChecked),
      "data-invalid": dataAttr(isInvalid)
    });
  };

  return {
    state: {
      isInvalid,
      isFocused,
      isChecked,
      isActive,
      isHovered,
      isDisabled,
      isReadOnly,
      isRequired
    },
    getCheckboxProps,
    getInputProps,
    getLabelProps,
    getRootProps,
    htmlProps
  };
}
/**
 * Prevent `onBlur` being fired when the checkbox label is touched
 */

function stop(event) {
  event.preventDefault();
  event.stopPropagation();
}
//# sourceMappingURL=use-radio.js.map