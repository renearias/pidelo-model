"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Categorie = /** @class */ (function () {
    function Categorie(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            if (fields[f]) {
                this[f] = fields[f];
            }
        }
    }
    return Categorie;
}());
exports.Categorie = Categorie;
