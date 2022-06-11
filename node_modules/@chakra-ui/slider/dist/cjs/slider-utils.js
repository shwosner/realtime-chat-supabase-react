"use strict";

exports.__esModule = true;
exports.getIds = getIds;
exports.orient = orient;
exports.getStyles = getStyles;
exports.getIsReversed = getIsReversed;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function getIds(id) {
  return {
    root: "slider-root-" + id,
    getThumb: function getThumb(i) {
      return "slider-thumb-" + id + "-" + i;
    },
    getInput: function getInput(i) {
      return "slider-input-" + id + "-" + i;
    },
    track: "slider-track-" + id,
    innerTrack: "slider-filled-track-" + id,
    getMarker: function getMarker(i) {
      return "slider-marker-" + id + "-" + i;
    },
    output: "slider-output-" + id
  };
}

function orient(options) {
  var orientation = options.orientation,
      vertical = options.vertical,
      horizontal = options.horizontal;
  return orientation === "vertical" ? vertical : horizontal;
}

var zeroRect = {
  width: 0,
  height: 0
};

function getStyles(options) {
  var orientation = options.orientation,
      thumbPercents = options.thumbPercents,
      thumbRects = options.thumbRects,
      isReversed = options.isReversed;

  var getThumbStyle = function getThumbStyle(i) {
    return _extends({
      position: "absolute",
      userSelect: "none",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      touchAction: "none"
    }, orient({
      orientation: orientation,
      vertical: {
        bottom: "calc(" + thumbPercents[i] + "% - " + thumbRects[i].height / 2 + "px)"
      },
      horizontal: {
        left: "calc(" + thumbPercents[i] + "% - " + thumbRects[i].width / 2 + "px)"
      }
    }));
  };

  var size = orientation === "vertical" ? thumbRects.reduce(function (a, b) {
    return a.height > b.height ? a : b;
  }, zeroRect) : thumbRects.reduce(function (a, b) {
    return a.width > b.width ? a : b;
  }, zeroRect);

  var rootStyle = _extends({
    position: "relative",
    touchAction: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    userSelect: "none",
    outline: 0
  }, orient({
    orientation: orientation,
    vertical: {
      paddingLeft: size.width / 2,
      paddingRight: size.width / 2
    },
    horizontal: {
      paddingTop: size.height / 2,
      paddingBottom: size.height / 2
    }
  }));

  var trackStyle = _extends({
    position: "absolute"
  }, orient({
    orientation: orientation,
    vertical: {
      left: "50%",
      transform: "translateX(-50%)",
      height: "100%"
    },
    horizontal: {
      top: "50%",
      transform: "translateY(-50%)",
      width: "100%"
    }
  }));

  var isSingleThumb = thumbPercents.length === 1;
  var fallback = [0, isReversed ? 100 - thumbPercents[0] : thumbPercents[0]];
  var range = isSingleThumb ? fallback : thumbPercents;
  var start = range[0];

  if (!isSingleThumb && isReversed) {
    start = 100 - start;
  }

  var percent = Math.abs(range[range.length - 1] - range[0]);

  var innerTrackStyle = _extends({}, trackStyle, orient({
    orientation: orientation,
    vertical: isReversed ? {
      height: percent + "%",
      top: start + "%"
    } : {
      height: percent + "%",
      bottom: start + "%"
    },
    horizontal: isReversed ? {
      width: percent + "%",
      right: start + "%"
    } : {
      width: percent + "%",
      left: start + "%"
    }
  }));

  return {
    trackStyle: trackStyle,
    innerTrackStyle: innerTrackStyle,
    rootStyle: rootStyle,
    getThumbStyle: getThumbStyle
  };
}

function getIsReversed(options) {
  var isReversed = options.isReversed,
      direction = options.direction,
      orientation = options.orientation;

  if (direction === "ltr" || orientation === "vertical") {
    return isReversed;
  } // only flip for horizontal RTL
  // if isReserved 🔜  otherwise  🔚


  return !isReversed;
}
//# sourceMappingURL=slider-utils.js.map