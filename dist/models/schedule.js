"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Schedule = /** @class */ (function () {
    function Schedule(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            this[f] = fields[f];
        }
    }
    return Schedule;
}());
exports.Schedule = Schedule;
