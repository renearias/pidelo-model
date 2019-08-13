"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stock = /** @class */ (function () {
    function Stock(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            this[f] = fields[f];
        }
    }
    return Stock;
}());
exports.Stock = Stock;
