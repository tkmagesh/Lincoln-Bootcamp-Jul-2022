"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = exports.add = void 0;
//the following will be assembled in a module object and the module object is exported
function add(x, y) {
    return x + y;
}
exports.add = add;
function subtract(x, y) {
    return x - y;
}
exports.subtract = subtract;
//default exports
//there can be ONLY ONE default export from a module
var utils = {
    isEven: function (n) { return n % 2 === 0; },
    isOdd: function (n) { return n % 2 !== 0; },
};
exports.default = utils;
