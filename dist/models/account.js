"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  Account Class
 *
 */
var Account = /** @class */ (function () {
    function Account(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            if (fields[f]) {
                this[f] = fields[f];
            }
        }
    }
    return Account;
}());
exports.Account = Account;
