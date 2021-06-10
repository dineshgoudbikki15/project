"use strict";
exports.__esModule = true;
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
        console.log('constructor is calling');
    }
    Calculator.prototype.addOperation = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
