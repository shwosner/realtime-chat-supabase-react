function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { useBoolean, useCallbackRef, useControllableState, useId, useLatestRef, usePanGesture, useUpdateEffect } from "@chakra-ui/hooks";
import { mergeRefs } from "@chakra-ui/react-utils";
import { ariaAttr, callAllHandlers, clampValue, dataAttr, focus, normalizeEventKey, percentToValue, roundValueToStep, valueToPercent } from "@chakra-ui/utils";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getIds, getIsReversed, getStyles, orient } from "./slider-utils";

/**
 * React hook that implements an accessible range slider.
 *
 * It is an alternative to `<input type="range" />`, and returns
 * prop getters for the component parts
 *
 * @see Docs     https://chakra-ui.com/docs/form/slider
 * @see WAI-ARIA https://www.w3.org/TR/wai-aria-practices-1.1/#slider
 */
export function useRangeSlider(props) {
  var {
    min = 0,
    max = 100,
    onChange,
    value: valueProp,
    defaultValue,
    isReversed: isReversedProp,
    direction = "ltr",
    orientation = "horizontal",
    id: idProp,
    isDisabled,
    isReadOnly,
    onChangeStart: onChangeStartProp,
    onChangeEnd: onChangeEndProp,
    step = 1,
    getAriaValueText: getAriaValueTextProp,
    "aria-valuetext": ariaValueText,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    name,
    focusThumbOnChange = true,
    minStepsBetweenThumbs = 0
  } = props,
      htmlProps = _objectWithoutPropertiesLoose(props, ["min", "max", "onChange", "value", "defaultValue", "isReversed", "direction", "orientation", "id", "isDisabled", "isReadOnly", "onChangeStart", "onChangeEnd", "step", "getAriaValueText", "aria-valuetext", "aria-label", "aria-labelledby", "name", "focusThumbOnChange", "minStepsBetweenThumbs"]);

  var onChangeStart = useCallbackRef(onChangeStartProp);
  var onChangeEnd = useCallbackRef(onChangeEndProp);
  var getAriaValueText = useCallbackRef(getAriaValueTextProp);
  var isReversed = getIsReversed({
    isReversed: isReversedProp,
    direction,
    orientation
  });
  var [valueState, setValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue != null ? defaultValue : [25, 75],
    onChange
  });

  if (!Array.isArray(valueState)) {
    throw new TypeError("[range-slider] You passed an invalid value for `value` or `defaultValue`, expected `Array` but got `" + typeof valueState + "`");
  }

  var [isDragging, setDragging] = useBoolean();
  var [isFocused, setFocused] = useBoolean();
  var [activeIndex, setActiveIndex] = useState(-1);
  var eventSourceRef = useRef(null);
  var isInteractive = !(isDisabled || isReadOnly);
  var initialValue = useRef(valueState);
  var value = valueState.map(val => clampValue(val, min, max));
  var valueRef = useLatestRef(value);
  var spacing = minStepsBetweenThumbs * step;
  var valueBounds = getValueBounds(value, min, max, spacing);
  var reversedValue = value.map(val => max - val + min);
  var thumbValues = isReversed ? reversedValue : value;
  var thumbPercents = thumbValues.map(val => valueToPercent(val, min, max));
  var isVertical = orientation === "vertical";
  var [thumbRects, setThumbRects] = useState(Array.from({
    length: value.length
  }).map(() => ({
    width: 0,
    height: 0
  })));
  useEffect(() => {
    var _rootRef$current;

    if (!rootRef.current) return;
    var thumbs = Array.from((_rootRef$current = rootRef.current) == null ? void 0 : _rootRef$current.querySelectorAll("[role=slider]"));
    var rects = thumbs.map(el => ({
      width: el.offsetWidth,
      height: el.offsetHeight
    }));
    if (rects.length) setThumbRects(rects);
  }, []);
  /**
   * Let's keep a reference to the slider track and thumb
   */

  var trackRef = useRef(null);
  var rootRef = useRef(null);
  var uuid = useId(idProp);
  var ids = getIds(uuid);
  var getValueFromPointer = useCallback(event => {
    var _event$touches$, _event$touches;

    if (!trackRef.current) return;
    eventSourceRef.current = "pointer";
    var rect = trackRef.current.getBoundingClientRect();
    var {
      clientX,
      clientY
    } = (_event$touches$ = (_event$touches = event.touches) == null ? void 0 : _event$touches[0]) != null ? _event$touches$ : event;
    var diff = isVertical ? rect.bottom - clientY : clientX - rect.left;
    var length = isVertical ? rect.height : rect.width;
    var percent = diff / length;
    if (isReversed) percent = 1 - percent;
    return percentToValue(percent, min, max);
  }, [isVertical, isReversed, max, min]);
  var tenSteps = (max - min) / 10;
  var oneStep = step || (max - min) / 100;
  var actions = useMemo(() => ({
    setValueAtIndex: (index, val) => {
      if (!isInteractive) return;
      var bounds = valueBounds[index];
      val = parseFloat(roundValueToStep(val, bounds.min, oneStep));
      val = clampValue(val, bounds.min, bounds.max);
      var next = [...value];
      next[index] = val;
      setValue(next);
    },
    setActiveIndex,
    stepUp: function stepUp(index, step) {
      if (step === void 0) {
        step = oneStep;
      }

      var valueAtIndex = value[index];
      var next = isReversed ? valueAtIndex - step : valueAtIndex + step;
      actions.setValueAtIndex(index, next);
    },
    stepDown: function stepDown(index, step) {
      if (step === void 0) {
        step = oneStep;
      }

      var valueAtIndex = value[index];
      var next = isReversed ? valueAtIndex + step : valueAtIndex - step;
      actions.setValueAtIndex(index, next);
    },
    reset: () => setValue(initialValue.current)
  }), [oneStep, value, isReversed, setValue, isInteractive, valueBounds]);
  /**
   * Keyboard interaction to ensure users can operate
   * the slider using only their keyboard.
   */

  var onKeyDown = useCallback(event => {
    var eventKey = normalizeEventKey(event);
    var keyMap = {
      ArrowRight: () => actions.stepUp(activeIndex),
      ArrowUp: () => actions.stepUp(activeIndex),
      ArrowLeft: () => actions.stepDown(activeIndex),
      ArrowDown: () => actions.stepDown(activeIndex),
      PageUp: () => actions.stepUp(activeIndex, tenSteps),
      PageDown: () => actions.stepDown(activeIndex, tenSteps),
      Home: () => {
        var {
          min: value
        } = valueBounds[activeIndex];
        actions.setValueAtIndex(activeIndex, value);
      },
      End: () => {
        var {
          max: value
        } = valueBounds[activeIndex];
        actions.setValueAtIndex(activeIndex, value);
      }
    };
    var action = keyMap[eventKey];

    if (action) {
      event.preventDefault();
      event.stopPropagation();
      action(event);
      eventSourceRef.current = "keyboard";
    }
  }, [actions, activeIndex, tenSteps, valueBounds]);
  /**
   * Compute styles for all component parts.
   */

  var {
    getThumbStyle,
    rootStyle,
    trackStyle,
    innerTrackStyle
  } = useMemo(() => getStyles({
    isReversed,
    orientation,
    thumbRects,
    thumbPercents
  }), [isReversed, orientation, thumbPercents, thumbRects]);
  var focusThumb = useCallback(index => {
    var idx = index != null ? index : activeIndex;

    if (idx !== -1 && focusThumbOnChange) {
      var _rootRef$current2;

      var id = ids.getThumb(idx);
      var thumb = (_rootRef$current2 = rootRef.current) == null ? void 0 : _rootRef$current2.ownerDocument.getElementById(id);

      if (thumb) {
        setTimeout(() => focus(thumb));
      }
    }
  }, [focusThumbOnChange, activeIndex, ids]);
  useUpdateEffect(() => {
    if (eventSourceRef.current === "keyboard") {
      onChangeEnd == null ? void 0 : onChangeEnd(valueRef.current);
    }
  }, [value, onChangeEnd]);

  var onPanSessionStart = event => {
    var pointValue = getValueFromPointer(event) || 0;
    var distances = value.map(val => Math.abs(val - pointValue));
    var isThumbStacked = new Set(distances).size !== distances.length;
    var closest = Math.min(...distances);
    var index = distances.indexOf(closest); // when two thumbs are stacked and the user clicks at a point larger than
    // their values, pick the next closest thumb

    if (isThumbStacked && pointValue > value[index]) {
      index++;
    }

    setActiveIndex(index);
    actions.setValueAtIndex(index, pointValue);
    focusThumb(index);
  };

  var onPan = event => {
    var pointValue = getValueFromPointer(event) || 0;
    setActiveIndex(activeIndex);
    actions.setValueAtIndex(activeIndex, pointValue);
    focusThumb(activeIndex);
  };

  usePanGesture(rootRef, {
    onPanSessionStart(event) {
      if (!isInteractive) return;
      setDragging.on();
      onPanSessionStart(event);
      onChangeStart == null ? void 0 : onChangeStart(valueRef.current);
    },

    onPanSessionEnd() {
      if (!isInteractive) return;
      setDragging.off();
      onChangeEnd == null ? void 0 : onChangeEnd(valueRef.current);
    },

    onPan(event) {
      if (!isInteractive) return;
      onPan(event);
    }

  });
  var getRootProps = useCallback(function (props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({}, props, htmlProps, {
      id: ids.root,
      ref: mergeRefs(ref, rootRef),
      tabIndex: -1,
      "aria-disabled": ariaAttr(isDisabled),
      "data-focused": dataAttr(isFocused),
      style: _extends({}, props.style, rootStyle)
    });
  }, [htmlProps, isDisabled, isFocused, rootStyle, ids]);
  var getTrackProps = useCallback(function (props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({}, props, {
      ref: mergeRefs(ref, trackRef),
      id: ids.track,
      "data-disabled": dataAttr(isDisabled),
      style: _extends({}, props.style, trackStyle)
    });
  }, [isDisabled, trackStyle, ids]);
  var getInnerTrackProps = useCallback(function (props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({}, props, {
      ref,
      id: ids.innerTrack,
      style: _extends({}, props.style, innerTrackStyle)
    });
  }, [innerTrackStyle, ids]);
  var getThumbProps = useCallback(function (props, ref) {
    var _getAriaValueText;

    if (ref === void 0) {
      ref = null;
    }

    var {
      index
    } = props,
        rest = _objectWithoutPropertiesLoose(props, ["index"]);

    var _value = value[index];

    if (_value == null) {
      throw new TypeError("[range-slider > thumb] Cannot find value at index `" + index + "`. The `value` or `defaultValue` length is : " + value.length);
    }

    var bounds = valueBounds[index];
    return _extends({}, rest, {
      ref,
      role: "slider",
      tabIndex: isInteractive ? 0 : undefined,
      id: ids.getThumb(index),
      "data-active": dataAttr(isDragging && activeIndex === index),
      "aria-valuetext": (_getAriaValueText = getAriaValueText == null ? void 0 : getAriaValueText(_value)) != null ? _getAriaValueText : ariaValueText == null ? void 0 : ariaValueText[index],
      "aria-valuemin": bounds.min,
      "aria-valuemax": bounds.max,
      "aria-valuenow": _value,
      "aria-orientation": orientation,
      "aria-disabled": ariaAttr(isDisabled),
      "aria-readonly": ariaAttr(isReadOnly),
      "aria-label": ariaLabel == null ? void 0 : ariaLabel[index],
      "aria-labelledby": ariaLabel != null && ariaLabel[index] ? undefined : ariaLabelledBy == null ? void 0 : ariaLabelledBy[index],
      style: _extends({}, props.style, getThumbStyle(index)),
      onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown),
      onFocus: callAllHandlers(props.onFocus, () => {
        setFocused.on();
        setActiveIndex(index);
      }),
      onBlur: callAllHandlers(props.onBlur, () => {
        setFocused.off();
        setActiveIndex(-1);
      })
    });
  }, [ids, value, valueBounds, isInteractive, isDragging, activeIndex, getAriaValueText, ariaValueText, orientation, isDisabled, isReadOnly, ariaLabel, ariaLabelledBy, getThumbStyle, onKeyDown, setFocused]);
  var getOutputProps = useCallback(function (props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({}, props, {
      ref,
      id: ids.output,
      htmlFor: value.map((v, i) => ids.getThumb(i)).join(" "),
      "aria-live": "off"
    });
  }, [ids, value]);
  var getMarkerProps = useCallback(function (props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    var {
      value: v
    } = props,
        rest = _objectWithoutPropertiesLoose(props, ["value"]);

    var isInRange = !(v < min || v > max);
    var isHighlighted = v >= value[0] && v <= value[value.length - 1];
    var percent = valueToPercent(v, min, max);
    percent = isReversed ? 100 - percent : percent;

    var markerStyle = _extends({
      position: "absolute",
      pointerEvents: "none"
    }, orient({
      orientation,
      vertical: {
        bottom: percent + "%"
      },
      horizontal: {
        left: percent + "%"
      }
    }));

    return _extends({}, rest, {
      ref,
      id: ids.getMarker(props.value),
      role: "presentation",
      "aria-hidden": true,
      "data-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(!isInRange),
      "data-highlighted": dataAttr(isHighlighted),
      style: _extends({}, props.style, markerStyle)
    });
  }, [isDisabled, isReversed, max, min, orientation, value, ids]);
  var getInputProps = useCallback(function (props, ref) {
    if (ref === void 0) {
      ref = null;
    }

    var {
      index
    } = props,
        rest = _objectWithoutPropertiesLoose(props, ["index"]);

    return _extends({}, rest, {
      ref,
      id: ids.getInput(index),
      type: "hidden",
      value: value[index],
      name: Array.isArray(name) ? name[index] : name + "-" + index
    });
  }, [name, value, ids]);
  return {
    state: {
      value,
      isFocused,
      isDragging,
      getThumbPercent: i => thumbPercents[i],
      getThumbMinValue: i => valueBounds[i].min,
      getThumbMaxValue: i => valueBounds[i].max
    },
    actions,
    getRootProps,
    getTrackProps,
    getInnerTrackProps,
    getThumbProps,
    getMarkerProps,
    getInputProps,
    getOutputProps
  };
}

var getValueBounds = (arr, min, max, spacing) => arr.map((v, i) => {
  var _min = i === 0 ? min : arr[i - 1] + spacing;

  var _max = i === arr.length - 1 ? max : arr[i + 1] - spacing;

  return {
    min: _min,
    max: _max
  };
});
//# sourceMappingURL=use-range-slider.js.map