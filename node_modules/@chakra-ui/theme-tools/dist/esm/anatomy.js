function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Used to define the anatomy/parts of a component in a way that provides
 * a consistent API for `className`, css selector and `theming`.
 */
export class Anatomy {
  constructor(name) {
    var _this = this;

    this.name = name;

    _defineProperty(this, "map", {});

    _defineProperty(this, "called", false);

    _defineProperty(this, "assert", () => {
      if (!this.called) {
        this.called = true;
        return;
      }

      throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?");
    });

    _defineProperty(this, "parts", function () {
      _this.assert();

      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      for (var part of values) {
        ;
        _this.map[part] = _this.toPart(part);
      }

      return _this;
    });

    _defineProperty(this, "extend", function () {
      for (var _len2 = arguments.length, parts = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        parts[_key2] = arguments[_key2];
      }

      for (var part of parts) {
        if (part in _this.map) continue;
        _this.map[part] = _this.toPart(part);
      }

      return _this;
    });

    _defineProperty(this, "toPart", part => {
      var el = ["container", "root"].includes(part != null ? part : "") ? [this.name] : [this.name, part];
      var attr = el.filter(Boolean).join("__");
      var className = "chakra-" + attr;
      var partObj = {
        className,
        selector: "." + className,
        toString: () => part
      };
      return partObj;
    });

    _defineProperty(this, "__type", {});
  }
  /**
   * Prevents user from calling `.parts` multiple times.
   * It should only be called once.
   */


  /**
   * Get all selectors for the component anatomy
   */
  get selectors() {
    var value = Object.fromEntries(Object.entries(this.map).map((_ref) => {
      var [key, part] = _ref;
      return [key, part.selector];
    }));
    return value;
  }
  /**
   * Get all classNames for the component anatomy
   */


  get classNames() {
    var value = Object.fromEntries(Object.entries(this.map).map((_ref2) => {
      var [key, part] = _ref2;
      return [key, part.className];
    }));
    return value;
  }
  /**
   * Get all parts as array of string
   */


  get keys() {
    return Object.keys(this.map);
  }
  /**
   * Creates the part object for the given part
   */


}
export function anatomy(name) {
  return new Anatomy(name);
}
//# sourceMappingURL=anatomy.js.map