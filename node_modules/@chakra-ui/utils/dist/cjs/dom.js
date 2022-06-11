"use strict";

exports.__esModule = true;
exports.isElement = isElement;
exports.isHTMLElement = isHTMLElement;
exports.getOwnerWindow = getOwnerWindow;
exports.getOwnerDocument = getOwnerDocument;
exports.getEventWindow = getEventWindow;
exports.canUseDOM = canUseDOM;
exports.getActiveElement = getActiveElement;
exports.contains = contains;
exports.addDomEvent = addDomEvent;
exports.normalizeEventKey = normalizeEventKey;
exports.getRelatedTarget = getRelatedTarget;
exports.isRightClick = isRightClick;
exports.cx = exports.ariaAttr = exports.dataAttr = exports.isBrowser = void 0;

function isElement(el) {
  return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}

function isHTMLElement(el) {
  var _el$ownerDocument$def;

  if (!isElement(el)) {
    return false;
  }

  var win = (_el$ownerDocument$def = el.ownerDocument.defaultView) != null ? _el$ownerDocument$def : window;
  return el instanceof win.HTMLElement;
}

function getOwnerWindow(node) {
  var _getOwnerDocument$def, _getOwnerDocument;

  return isElement(node) ? (_getOwnerDocument$def = (_getOwnerDocument = getOwnerDocument(node)) == null ? void 0 : _getOwnerDocument.defaultView) != null ? _getOwnerDocument$def : window : window;
}

function getOwnerDocument(node) {
  var _node$ownerDocument;

  return isElement(node) ? (_node$ownerDocument = node.ownerDocument) != null ? _node$ownerDocument : document : document;
}

function getEventWindow(event) {
  var _view;

  return (_view = event.view) != null ? _view : window;
}

function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

var isBrowser = canUseDOM();
exports.isBrowser = isBrowser;

var dataAttr = function dataAttr(condition) {
  return condition ? "" : undefined;
};

exports.dataAttr = dataAttr;

var ariaAttr = function ariaAttr(condition) {
  return condition ? true : undefined;
};

exports.ariaAttr = ariaAttr;

var cx = function cx() {
  for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }

  return classNames.filter(Boolean).join(" ");
};

exports.cx = cx;

function getActiveElement(node) {
  var doc = getOwnerDocument(node);
  return doc == null ? void 0 : doc.activeElement;
}

function contains(parent, child) {
  if (!parent) return false;
  return parent === child || parent.contains(child);
}

function addDomEvent(target, eventName, handler, options) {
  target.addEventListener(eventName, handler, options);
  return function () {
    target.removeEventListener(eventName, handler, options);
  };
}
/**
 * Get the normalized event key across all browsers
 * @param event keyboard event
 */


function normalizeEventKey(event) {
  var key = event.key,
      keyCode = event.keyCode;
  var isArrowKey = keyCode >= 37 && keyCode <= 40 && key.indexOf("Arrow") !== 0;
  var eventKey = isArrowKey ? "Arrow" + key : key;
  return eventKey;
}

function getRelatedTarget(event) {
  var _event$target, _event$relatedTarget;

  var target = (_event$target = event.target) != null ? _event$target : event.currentTarget;
  var activeElement = getActiveElement(target);
  return (_event$relatedTarget = event.relatedTarget) != null ? _event$relatedTarget : activeElement;
}

function isRightClick(event) {
  return event.button !== 0;
}
//# sourceMappingURL=dom.js.map