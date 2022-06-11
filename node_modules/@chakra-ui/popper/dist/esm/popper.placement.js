var logicals = {
  "start-start": {
    ltr: "left-start",
    rtl: "right-start"
  },
  "start-end": {
    ltr: "left-end",
    rtl: "right-end"
  },
  "end-start": {
    ltr: "right-start",
    rtl: "left-start"
  },
  "end-end": {
    ltr: "right-end",
    rtl: "left-end"
  },
  start: {
    ltr: "left",
    rtl: "right"
  },
  end: {
    ltr: "right",
    rtl: "left"
  }
};
var opposites = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
export function getPopperPlacement(placement, dir) {
  var _logicals$placement, _opposites$placement;

  if (dir === void 0) {
    dir = "ltr";
  }

  var value = ((_logicals$placement = logicals[placement]) == null ? void 0 : _logicals$placement[dir]) || placement;
  if (dir === "ltr") return value;
  return (_opposites$placement = opposites[placement]) != null ? _opposites$placement : value;
}
//# sourceMappingURL=popper.placement.js.map