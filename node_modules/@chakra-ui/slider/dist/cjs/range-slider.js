"use strict";

exports.__esModule = true;
exports.RangeSliderMark = exports.RangeSliderFilledTrack = exports.RangeSliderTrack = exports.RangeSliderThumb = exports.RangeSlider = exports.useRangeSliderContext = exports.RangeSliderProvider = void 0;

var _reactUtils = require("@chakra-ui/react-utils");

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

var _useRangeSlider2 = require("./use-range-slider");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _createContext = (0, _reactUtils.createContext)({
  name: "SliderContext",
  errorMessage: "useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"
}),
    RangeSliderProvider = _createContext[0],
    useRangeSliderContext = _createContext[1];

exports.useRangeSliderContext = useRangeSliderContext;
exports.RangeSliderProvider = RangeSliderProvider;

/**
 * The Slider is used to allow users to make selections from a range of values.
 * It provides context and functionality for all slider components
 *
 * @see Docs     https://chakra-ui.com/docs/form/slider
 * @see WAI-ARIA https://www.w3.org/TR/wai-aria-practices/#slider
 */
var RangeSlider = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var styles = (0, _system.useMultiStyleConfig)("Slider", props);
  var ownProps = (0, _system.omitThemingProps)(props);

  var _useTheme = (0, _system.useTheme)(),
      direction = _useTheme.direction;

  ownProps.direction = direction;

  var _useRangeSlider = (0, _useRangeSlider2.useRangeSlider)(ownProps),
      getRootProps = _useRangeSlider.getRootProps,
      context = _objectWithoutPropertiesLoose(_useRangeSlider, ["getRootProps"]);

  var ctx = React.useMemo(function () {
    return _extends({}, context, {
      name: props.name
    });
  }, [context, props.name]);
  return /*#__PURE__*/React.createElement(RangeSliderProvider, {
    value: ctx
  }, /*#__PURE__*/React.createElement(_system.StylesProvider, {
    value: styles
  }, /*#__PURE__*/React.createElement(_system.chakra.div, _extends({}, getRootProps({}, ref), {
    className: "chakra-slider",
    __css: styles.container
  }), props.children)));
});
exports.RangeSlider = RangeSlider;
RangeSlider.defaultProps = {
  orientation: "horizontal"
};

if (_utils.__DEV__) {
  RangeSlider.displayName = "RangeSlider";
}

/**
 * Slider component that acts as the handle used to select predefined
 * values by dragging its handle along the track
 */
var RangeSliderThumb = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var _useRangeSliderContex = useRangeSliderContext(),
      getThumbProps = _useRangeSliderContex.getThumbProps,
      getInputProps = _useRangeSliderContex.getInputProps,
      name = _useRangeSliderContex.name;

  var styles = (0, _system.useStyles)();
  var thumbProps = getThumbProps(props, ref);
  return /*#__PURE__*/React.createElement(_system.chakra.div, _extends({}, thumbProps, {
    className: (0, _utils.cx)("chakra-slider__thumb", props.className),
    __css: styles.thumb
  }), thumbProps.children, name && /*#__PURE__*/React.createElement("input", getInputProps({
    index: props.index
  })));
});
exports.RangeSliderThumb = RangeSliderThumb;

if (_utils.__DEV__) {
  RangeSliderThumb.displayName = "RangeSliderThumb";
}

var RangeSliderTrack = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var _useRangeSliderContex2 = useRangeSliderContext(),
      getTrackProps = _useRangeSliderContex2.getTrackProps;

  var styles = (0, _system.useStyles)();
  var trackProps = getTrackProps(props, ref);
  return /*#__PURE__*/React.createElement(_system.chakra.div, _extends({}, trackProps, {
    className: (0, _utils.cx)("chakra-slider__track", props.className),
    __css: styles.track
  }));
});
exports.RangeSliderTrack = RangeSliderTrack;

if (_utils.__DEV__) {
  RangeSliderTrack.displayName = "RangeSliderTrack";
}

var RangeSliderFilledTrack = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var _useRangeSliderContex3 = useRangeSliderContext(),
      getInnerTrackProps = _useRangeSliderContex3.getInnerTrackProps;

  var styles = (0, _system.useStyles)();
  var trackProps = getInnerTrackProps(props, ref);
  return /*#__PURE__*/React.createElement(_system.chakra.div, _extends({}, trackProps, {
    className: "chakra-slider__filled-track",
    __css: styles.filledTrack
  }));
});
exports.RangeSliderFilledTrack = RangeSliderFilledTrack;

if (_utils.__DEV__) {
  RangeSliderFilledTrack.displayName = "RangeSliderFilledTrack";
}

/**
 * SliderMark is used to provide names for specific Slider
 * values by defining labels or markers along the track.
 *
 * @see Docs https://chakra-ui.com/slider
 */
var RangeSliderMark = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var _useRangeSliderContex4 = useRangeSliderContext(),
      getMarkerProps = _useRangeSliderContex4.getMarkerProps;

  var markProps = getMarkerProps(props, ref);
  return /*#__PURE__*/React.createElement(_system.chakra.div, _extends({}, markProps, {
    className: (0, _utils.cx)("chakra-slider__marker", props.className)
  }));
});
exports.RangeSliderMark = RangeSliderMark;

if (_utils.__DEV__) {
  RangeSliderMark.displayName = "RangeSliderMark";
}
//# sourceMappingURL=range-slider.js.map