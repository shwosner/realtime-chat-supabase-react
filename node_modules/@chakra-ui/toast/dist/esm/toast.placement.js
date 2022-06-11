export function getToastPlacement(position, dir) {
  var _logical$dir;

  if (!position) return;
  var logicals = {
    "top-start": {
      ltr: "top-left",
      rtl: "top-right"
    },
    "top-end": {
      ltr: "top-right",
      rtl: "top-left"
    },
    "bottom-start": {
      ltr: "bottom-left",
      rtl: "bottom-right"
    },
    "bottom-end": {
      ltr: "bottom-right",
      rtl: "bottom-left"
    }
  };
  var logical = logicals[position];
  return (_logical$dir = logical == null ? void 0 : logical[dir]) != null ? _logical$dir : position;
}
//# sourceMappingURL=toast.placement.js.map