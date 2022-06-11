"use strict";
// helpers.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripTrailingSlash = exports.uuid = void 0;
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
exports.uuid = uuid;
function stripTrailingSlash(url) {
    return url.replace(/\/$/, '');
}
exports.stripTrailingSlash = stripTrailingSlash;
//# sourceMappingURL=helpers.js.map