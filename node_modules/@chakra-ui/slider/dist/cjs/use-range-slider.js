"use strict";

exports.__esModule = true;
exports.useRangeSlider = useRangeSlider;

var _hooks = require("@chakra-ui/hooks");

var _reactUtils = require("@chakra-ui/react-utils");

var _utils = require("@chakra-ui/utils");

var _react = require("react");

var _sliderUtils = require("./slider-utils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * React hook that implements an accessible range slider.
 *
 * It is an alternative to `<input type="range" />`, and returns
 * prop getters for the component parts
 *
 * @see Docs     https://chakra-ui.com/docs/form/slider
 * @see WAI-ARIA https://www.w3.org/TR/wai-aria-practices-1.1/#slider
 */
function useRangeSlider(props) {
  var _props$min = props.min,
      min = _props$min === void 0 ? 0 : _props$min,
      _props$max = props.max,
      max = _props$max === void 0 ? 100 : _props$max,
      onChange = props.onChange,
      valueProp = props.value,
      defaultValue = props.defaultValue,
      isReversedProp = props.isReversed,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? "ltr" : _props$direction,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? "horizontal" : _props$orientation,
      idProp = props.id,
      isDisabled = props.isDisabled,
      isReadOnly = props.isReadOnly,
      onChangeStartProp = props.onChangeStart,
      onChangeEndProp = props.onChangeEnd,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      getAriaValueTextProp = props.getAriaValueText,
      ariaValueText = props["aria-valuetext"],
      ariaLabel = props["aria-label"],
      ariaLabelledBy = props["aria-labelledby"],
      name = props.name,
      _props$focusThumbOnCh = props.focusThumbOnChange,
      focusThumbOnChange = _props$focusThumbOnCh === void 0 ? true : _props$focusThumbOnCh,
      _props$minStepsBetwee = props.minStepsBetweenThumbs,
      minStepsBetweenThumbs = _props$minStepsBetwee === void 0 ? 0 : _props$minStepsBetwee,
      htmlProps = _objectWithoutPropertiesLoose(props, ["min", "max", "onChange", "value", "defaultValue", "isReversed", "direction", "orientation", "id", "isDisabled", "isReadOnly", "onChangeStart", "onChangeEnd", "step", "getAriaValueText", "aria-valuetext", "aria-label", "aria-labelledby", "name", "focusThumbOnChange", "minStepsBetweenThumbs"]);

  var onChangeStart = (0, _hooks.useCallbackRef)(onChangeStartProp);
  var onChangeEnd = (0, _hooks.useCallbackRef)(onChangeEndProp);
  var getAriaValueText = (0, _hooks.useCallbackRef)(getAriaValueTextProp);
  var isReversed = (0, _sliderUtils.getIsReversed)({
    isReversed: isReversedProp,
    direction: direction,
    orientation: orientation
  });

  var _useControllableState = (0, _hooks.useControllableState)({
    value: valueProp,
    defaultValue: defaultValue != null ? defaultValue : [25, 75],
    onChange: onChange
  }),
      valueState = _useControllableState[0],
      setValue = _useControllableState[1];

  if (!Array.isArray(valueState)) {
    throw new TypeError("[range-slider] You passed an invalid value for `value` or `defaultValue`, expected `Array` but got `" + typeof valueState + "`");
  }

  var _useBoolean = (0, _hooks.useBoolean)(),
      isDragging = _useBoolean[0],
      setDragging = _useBoolean[1];

  var _useBoolean2 = (0, _hooks.useBoolean)(),
      isFocused = _useBoolean2[0],
      setFocused = _useBoolean2[1];

  var _useState = (0, _react.useState)(-1),
      activeIndex = _useState[0],
      setActiveIndex = _useState[1];

  var eventSourceRef = (0, _react.useRef)(null);
  var isInteractive = !(isDisabled || isReadOnly);
  var initialValue = (0, _react.useRef)(valueState);
  var value = valueState.map(function (val) {
    return (0, _utils.clampValue)(val, min, max);
  });
  var valueRef = (0, _hooks.useLatestRef)(value);
  var spacing = minStepsBetweenThumbs * step;
  var valueBounds = getValueBounds(value, min, max, spacing);
  var reversedValue = value.map(function (val) {
    return max - val + min;
  });
  var thumbValues = isReversed ? reversedValue : value;
  var thumbPercents = thumbValues.map(function (val) {
    return (0, _utils.valueToPercent)(val, min, max);
  });
  var isVertical = orientation === "vertical";

  var _useState2 = (0, _react.useState)(Array.from({
    length: value.length
  }).map(function () {
    return {
      width: 0,
      height: 0
    };
  })),
      thumbRects = _useState2[0],
      setThumbRects = _useState2[1];

  (0, _react.useEffect)(function () {
    var _rootRef$current;

    if (!rootRef.current) return;
    var thumbs = Array.from((_rootRef$current = rootRef.current) == null ? void 0 : _rootRef$current.querySelectorAll("[role=slider]"));
    var rects = thumbs.map(function (el) {
      return {
        width: el.offsetWidth,
        height: el.offsetHeight
      };
    });
    if (rects.length) setThumbRects(rects);
  }, []);
  /**
   * Let's keep a reference to the slider track and thumb
   */

  var trackRef = (0, _react.useRef)(null);
  var rootRef = (0, _react.useRef)(null);
  var uuid = (0, _hooks.useId)(idProp);
  var ids = (0, _sliderUtils.getIds)(uuid);
  var getValueFromPointer = (0, _react.useCallback)(function (event) {
    var _event$touches$, _event$touches;

    if (!trackRef.current) return;
    eventSourceRef.current = "pointer";
    var rect = trackRef.current.getBoundingClientRect();

    var _ref = (_event$touches$ = (_event$touches = event.touches) == null ? void 0 : _event$touches[0]) != null ? _event$touches$ : event,
        clientX = _ref.clientX,
        clientY = _ref.clientY;

    var diff = isVertical ? rect.bottom - clientY : clientX - rect.left;
    var length = isVertical ? rect.height : rect.width;
    var percent = diff / length;
    if (isReversed) percent = 1 - percent;
    return (0, _utils.percentToValue)(percent, min, max);
  }, [isVertical, isReversed, max, min]);
  var tenSteps = (max - min) / 10;
  var oneStep = step || (max - min) / 100;
  var actions = (0, _react.useMemo)(function () {
    return {
      setValueAtIndex: function setValueAtIndex(index, val) {
        if (!isInteractive) return;
        var bounds = valueBounds[index];
        val = parseFloat((0, _utils.roundValueToStep)(val, bounds.min, oneStep));
        val = (0, _utils.clampValue)(val, bounds.min, bounds.max);
        var next = [].concat(value);
        next[index] = val;
        setValue(next);
      },
      setActiveIndex: setActiveIndex,
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
      reset: function reset() {
        return setValue(initialValue.current);
      }
    };
  }, [oneStep, value, isReversed, setValue, isInteractive, valueBounds]);
  /**
   * Keyboard interaction to ensure users can operate
   * the slider using only their keyboard.
   */

  var onKeyDown = (0, _react.useCallback)(function (event) {
    var eventKey = (0, _utils.normalizeEventKey)(event);
    var keyMap = {
      ArrowRight: function ArrowRight() {
        return actions.stepUp(activeIndex);
      },
      ArrowUp: function ArrowUp() {
        return actions.stepUp(activeIndex);
      },
      ArrowLeft: function ArrowLeft() {
        return actions.stepDown(activeIndex);
      },
      ArrowDown: function ArrowDown() {
        return actions.stepDown(activeIndex);
      },
      PageUp: function PageUp() {
        return actions.stepUp(activeIndex, tenSteps);
      },
      PageDown: function PageDown() {
        return actions.stepDown(activeIndex, tenSteps);
      },
      Home: function Home() {
        var value = valueBounds[activeIndex].min;
        actions.setValueAtIndex(activeIndex, value);
      },
      End: function End() {
        var value = valueBounds[activeIndex].max;
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

  var _useMemo = (0, _react.useMemo)(function () {
    return (0, _sliderUtils.getStyles)({
      isReversed: isReversed,
      orientation: orientation,
      thumbRects: thumbRects,
      thumbPercents: thumbPercents
    });
  }, [isReversed, orientation, thumbPercents, thumbRects]),
      getThumbStyle = _useMemo.getThumbStyle,
      rootStyle = _useMemo.rootStyle,
      trackStyle = _useMemo.trackStyle,
      innerTrackStyle = _useMemo.innerTrackStyle;

  var focusThumb = (0, _react.useCallback)(function (index) {
    var idx = index != null ? index : activeIndex;

    if (idx !== -1 && focusThumbOnChange) {
      var _rootRef$current2;

      var id = ids.getThumb(idx);
      var thumb = (_rootRef$current2 = rootRef.current) == null ? void 0 : _rootRef$current2.ownerDocument.getElementById(id);

      if (thumb) {
        setTimeout(function () {
          return (0, _utils.focus)(thumb);
        });
      }
    }
  }, [focusThumbOnChange, activeIndex, ids]);
  (0, _hooks.useUpdateEffect)(function () {
    if (eventSourceRef.current === "keyboard") {
      onChangeEnd == null ? void 0 : onChangeEnd(valueRef.current);
    }
  }, [value, onChangeEnd]);

  var _onPanSessionStart = function onPanSessionStart(event) {
    var pointValue = getValueFromPointer(event) || 0;
    var distances = value.map(function (val) {
      return Math.abs(val - pointValue);
    });
    var isThumbStacked = new Set(distances).size !== distances.length;
    var closest = Math.min.apply(Math, distances);
    var index = distances.indexOf(closest); // when two thumbs are stacked and the user clicks at a point larger than
    // their values, pick the next closest thumb

    if (isThumbStacked && pointValue > value[index]) {
      index++;
    }

    setActiveIndex(index);
    actions.setValueAtIndex(index, pointValue);
    focusThumb(index);
  };

  var _onPan = function onPan(event) {
    var pointValue = getValueFromPointer(event) || 0;
    setActiveIndex(activeIndex);
    actions.setValueAtIndex(activeIndex, pointValue);
    focusThumb(activeIndex);
  };

  (0, _hooks.usePanGesture)(rootRef, {
    onPanSessionStart: function onPanSessionStart(event) {
      if (!isInteractive) return;
      setDragging.on();

      _onPanSessionStart(event);

      onChangeStart == null ? void 0 : onChangeStart(valueRef.current);
    },
    onPanSessionEnd: function onPanSessionEnd() {
      if (!isInteractive) return;
      setDragging.off();
      onChangeEnd == null ? void 0 : onChangeEnd(valueRef.current);
    },
    onPan: function onPan(event) {
      if (!isInteractive) return;

      _onPan(event);
    }
  });
  var getRootProps = (0, _react.useCallback)(function (props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({}, props, htmlProps, {
      id: ids.root,
      ref: (0, _reactUtils.mergeRefs)(ref, rootRef),
      tabIndex: -1,
      "aria-disabled": (0, _utils.ariaAttr)(isDisabled),
      "data-focused": (0, _utils.dataAttr)(isFocused),
      style: _extends({}, props.style, rootStyle)
    });
  }, [htmlProps, isDisabled, isFocused, rootStyle, ids]);
  var getTrackProps = (0, _react.useCallback)(function (props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({}, props, {
      ref: (0, _reactUtils.mergeRefs)(ref, trackRef),
      id: ids.track,
      "data-disabled": (0, _utils.dataAttr)(isDisabled),
      style: _extends({}, props.style, trackStyle)
    });
  }, [isDisabled, trackStyle, ids]);
  var getInnerTrackProps = (0, _react.useCallback)(function (props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({}, props, {
      ref: ref,
      id: ids.innerTrack,
      style: _extends({}, props.style, innerTrackStyle)
    });
  }, [innerTrackStyle, ids]);
  var getThumbProps = (0, _react.useCallback)(function (props, ref) {
    var _getAriaValueText;

    if (ref === void 0) {
      ref = null;
    }

    var index = props.index,
        rest = _objectWithoutPropertiesLoose(props, ["index"]);

    var _value = value[index];

    if (_value == null) {
      throw new TypeError("[range-slider > thumb] Cannot find value at index `" + index + "`. The `value` or `defaultValue` length is : " + value.length);
    }

    var bounds = valueBounds[index];
    return _extends({}, rest, {
      ref: ref,
      role: "slider",
      tabIndex: isInteractive ? 0 : undefined,
      id: ids.getThumb(index),
      "data-active": (0, _utils.dataAttr)(isDragging && activeIndex === index),
      "aria-valuetext": (_getAriaValueText = getAriaValueText == null ? void 0 : getAriaValueText(_value)) != null ? _getAriaValueText : ariaValueText == null ? void 0 : ariaValueText[index],
      "aria-valuemin": bounds.min,
      "aria-valuemax": bounds.max,
      "aria-valuenow": _value,
      "aria-orientation": orientation,
      "aria-disabled": (0, _utils.ariaAttr)(isDisabled),
      "aria-readonly": (0, _utils.ariaAttr)(isReadOnly),
      "aria-label": ariaLabel == null ? void 0 : ariaLabel[index],
      "aria-labelledby": ariaLabel != null && ariaLabel[index] ? undefined : ariaLabelledBy == null ? void 0 : ariaLabelledBy[index],
      style: _extends({}, props.style, getThumbStyle(index)),
      onKeyDown: (0, _utils.callAllHandlers)(props.onKeyDown, onKeyDown),
      onFocus: (0, _utils.callAllHandlers)(props.onFocus, function () {
        setFocused.on();
        setActiveIndex(index);
      }),
      onBlur: (0, _utils.callAllHandlers)(props.onBlur, function () {
        setFocused.off();
        setActiveIndex(-1);
      })
    });
  }, [ids, value, valueBounds, isInteractive, isDragging, activeIndex, getAriaValueText, ariaValueText, orientation, isDisabled, isReadOnly, ariaLabel, ariaLabelledBy, getThumbStyle, onKeyDown, setFocused]);
  var getOutputProps = (0, _react.useCallback)(function (props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({}, props, {
      ref: ref,
      id: ids.output,
      htmlFor: value.map(function (v, i) {
        return ids.getThumb(i);
      }).join(" "),
      "aria-live": "off"
    });
  }, [ids, value]);
  var getMarkerProps = (0, _react.useCallback)(function (props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    var _props = props,
        v = _props.value,
        rest = _objectWithoutPropertiesLoose(_props, ["value"]);

    var isInRange = !(v < min || v > max);
    var isHighlighted = v >= value[0] && v <= value[value.length - 1];
    var percent = (0, _utils.valueToPercent)(v, min, max);
    percent = isReversed ? 100 - percent : percent;

    var markerStyle = _extends({
      position: "absolute",
      pointerEvents: "none"
    }, (0, _sliderUtils.orient)({
      orientation: orientation,
      vertical: {
        bottom: percent + "%"
      },
      horizontal: {
        left: percent + "%"
      }
    }));

    return _extends({}, rest, {
      ref: ref,
      id: ids.getMarker(props.value),
      role: "presentation",
      "aria-hidden": true,
      "data-disabled": (0, _utils.dataAttr)(isDisabled),
      "data-invalid": (0, _utils.dataAttr)(!isInRange),
      "data-highlighted": (0, _utils.dataAttr)(isHighlighted),
      style: _extends({}, props.style, markerStyle)
    });
  }, [isDisabled, isReversed, max, min, orientation, value, ids]);
  var getInputProps = (0, _react.useCallback)(function (props, ref) {
    if (ref === void 0) {
      ref = null;
    }

    var index = props.index,
        rest = _objectWithoutPropertiesLoose(props, ["index"]);

    return _extends({}, rest, {
      ref: ref,
      id: ids.getInput(index),
      type: "hidden",
      value: value[index],
      name: Array.isArray(name) ? name[index] : name + "-" + index
    });
  }, [name, value, ids]);
  return {
    state: {
      value: value,
      isFocused: isFocused,
      isDragging: isDragging,
      getThumbPercent: function getThumbPercent(i) {
        return thumbPercents[i];
      },
      getThumbMinValue: function getThumbMinValue(i) {
        return valueBounds[i].min;
      },
      getThumbMaxValue: function getThumbMaxValue(i) {
        return valueBounds[i].max;
      }
    },
    actions: actions,
    getRootProps: getRootProps,
    getTrackProps: getTrackProps,
    getInnerTrackProps: getInnerTrackProps,
    getThumbProps: getThumbProps,
    getMarkerProps: getMarkerProps,
    getInputProps: getInputProps,
    getOutputProps: getOutputProps
  };
}

var getValueBounds = function getValueBounds(arr, min, max, spacing) {
  return arr.map(function (v, i) {
    var _min = i === 0 ? min : arr[i - 1] + spacing;

    var _max = i === arr.length - 1 ? max : arr[i + 1] - spacing;

    return {
      min: _min,
      max: _max
    };
  });
};
//# sourceMappingURL=use-range-slider.js.map