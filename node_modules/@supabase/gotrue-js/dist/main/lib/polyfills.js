"use strict";
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.polyfillGlobalThis = void 0;
/**
 * https://mathiasbynens.be/notes/globalthis
 */
function polyfillGlobalThis() {
    if (typeof globalThis === 'object')
        return;
    try {
        Object.defineProperty(Object.prototype, '__magic__', {
            get: function () {
                return this;
            },
            configurable: true,
        });
        __magic__.globalThis = __magic__;
        delete Object.prototype.__magic__;
    }
    catch (e) {
        if (typeof self !== 'undefined') {
            self.globalThis = self;
        }
    }
}
exports.polyfillGlobalThis = polyfillGlobalThis;
//# sourceMappingURL=polyfills.js.map