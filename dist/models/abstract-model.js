"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model = /** @class */ (function () {
    function Model(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            if (fields[f]) {
                this[f] = fields[f];
            }
        }
    }
    return Model;
}());
exports.Model = Model;
