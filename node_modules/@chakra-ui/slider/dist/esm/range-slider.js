function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { createContext } from "@chakra-ui/react-utils";
import { chakra, forwardRef, omitThemingProps, StylesProvider, useMultiStyleConfig, useStyles, useTheme } from "@chakra-ui/system";
import { cx, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { useRangeSlider } from "./use-range-slider";
var [RangeSliderProvider, useRangeSliderContext] = createContext({
  name: "SliderContext",
  errorMessage: "useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"
});
export { RangeSliderProvider, useRangeSliderContext };

/**
 * The Slider is used to allow users to make selections from a range of values.
 * It provides context and functionality for all slider components
 *
 * @see Docs     https://chakra-ui.com/docs/form/slider
 * @see WAI-ARIA https://www.w3.org/TR/wai-aria-practices/#slider
 */
export var RangeSlider = /*#__PURE__*/forwardRef((props, ref) => {
  var styles = useMultiStyleConfig("Slider", props);
  var ownProps = omitThemingProps(props);
  var {
    direction
  } = useTheme();
  ownProps.direction = direction;

  var _useRangeSlider = useRangeSlider(ownProps),
      {
    getRootProps
  } = _useRangeSlider,
      context = _objectWithoutPropertiesLoose(_useRangeSlider, ["getRootProps"]);

  var ctx = React.useMemo(() => _extends({}, context, {
    name: props.name
  }), [context, props.name]);
  return /*#__PURE__*/React.createElement(RangeSliderProvider, {
    value: ctx
  }, /*#__PURE__*/React.createElement(StylesProvider, {
    value: styles
  }, /*#__PURE__*/React.createElement(chakra.div, _extends({}, getRootProps({}, ref), {
    className: "chakra-slider",
    __css: styles.container
  }), props.children)));
});
RangeSlider.defaultProps = {
  orientation: "horizontal"
};

if (__DEV__) {
  RangeSlider.displayName = "RangeSlider";
}

/**
 * Slider component that acts as the handle used to select predefined
 * values by dragging its handle along the track
 */
export var RangeSliderThumb = /*#__PURE__*/forwardRef((props, ref) => {
  var {
    getThumbProps,
    getInputProps,
    name
  } = useRangeSliderContext();
  var styles = useStyles();
  var thumbProps = getThumbProps(props, ref);
  return /*#__PURE__*/React.createElement(chakra.div, _extends({}, thumbProps, {
    className: cx("chakra-slider__thumb", props.className),
    __css: styles.thumb
  }), thumbProps.children, name && /*#__PURE__*/React.createElement("input", getInputProps({
    index: props.index
  })));
});

if (__DEV__) {
  RangeSliderThumb.displayName = "RangeSliderThumb";
}

export var RangeSliderTrack = /*#__PURE__*/forwardRef((props, ref) => {
  var {
    getTrackProps
  } = useRangeSliderContext();
  var styles = useStyles();
  var trackProps = getTrackProps(props, ref);
  return /*#__PURE__*/React.createElement(chakra.div, _extends({}, trackProps, {
    className: cx("chakra-slider__track", props.className),
    __css: styles.track
  }));
});

if (__DEV__) {
  RangeSliderTrack.displayName = "RangeSliderTrack";
}

export var RangeSliderFilledTrack = /*#__PURE__*/forwardRef((props, ref) => {
  var {
    getInnerTrackProps
  } = useRangeSliderContext();
  var styles = useStyles();
  var trackProps = getInnerTrackProps(props, ref);
  return /*#__PURE__*/React.createElement(chakra.div, _extends({}, trackProps, {
    className: "chakra-slider__filled-track",
    __css: styles.filledTrack
  }));
});

if (__DEV__) {
  RangeSliderFilledTrack.displayName = "RangeSliderFilledTrack";
}

/**
 * SliderMark is used to provide names for specific Slider
 * values by defining labels or markers along the track.
 *
 * @see Docs https://chakra-ui.com/slider
 */
export var RangeSliderMark = /*#__PURE__*/forwardRef((props, ref) => {
  var {
    getMarkerProps
  } = useRangeSliderContext();
  var markProps = getMarkerProps(props, ref);
  return /*#__PURE__*/React.createElement(chakra.div, _extends({}, markProps, {
    className: cx("chakra-slider__marker", props.className)
  }));
});

if (__DEV__) {
  RangeSliderMark.displayName = "RangeSliderMark";
}
//# sourceMappingURL=range-slider.js.map