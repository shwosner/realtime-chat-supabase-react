function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

export function getIds(id) {
  return {
    root: "slider-root-" + id,
    getThumb: i => "slider-thumb-" + id + "-" + i,
    getInput: i => "slider-input-" + id + "-" + i,
    track: "slider-track-" + id,
    innerTrack: "slider-filled-track-" + id,
    getMarker: i => "slider-marker-" + id + "-" + i,
    output: "slider-output-" + id
  };
}
export function orient(options) {
  var {
    orientation,
    vertical,
    horizontal
  } = options;
  return orientation === "vertical" ? vertical : horizontal;
}
var zeroRect = {
  width: 0,
  height: 0
};
export function getStyles(options) {
  var {
    orientation,
    thumbPercents,
    thumbRects,
    isReversed
  } = options;

  var getThumbStyle = i => _extends({
    position: "absolute",
    userSelect: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    touchAction: "none"
  }, orient({
    orientation,
    vertical: {
      bottom: "calc(" + thumbPercents[i] + "% - " + thumbRects[i].height / 2 + "px)"
    },
    horizontal: {
      left: "calc(" + thumbPercents[i] + "% - " + thumbRects[i].width / 2 + "px)"
    }
  }));

  var size = orientation === "vertical" ? thumbRects.reduce((a, b) => a.height > b.height ? a : b, zeroRect) : thumbRects.reduce((a, b) => a.width > b.width ? a : b, zeroRect);

  var rootStyle = _extends({
    position: "relative",
    touchAction: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    userSelect: "none",
    outline: 0
  }, orient({
    orientation,
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
    orientation,
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
    orientation,
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
    trackStyle,
    innerTrackStyle,
    rootStyle,
    getThumbStyle
  };
}
export function getIsReversed(options) {
  var {
    isReversed,
    direction,
    orientation
  } = options;

  if (direction === "ltr" || orientation === "vertical") {
    return isReversed;
  } // only flip for horizontal RTL
  // if isReserved 🔜  otherwise  🔚


  return !isReversed;
}
//# sourceMappingURL=slider-utils.js.map