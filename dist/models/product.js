"use strict";
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            if (fields[f]) {
                this[f] = fields[f];
            }
        }
    }
    Product.prototype.addChild = function (product) {
        this.children.push(product);
        return this;
    };
    Product.prototype.setForRequest = function () {
        this.accepted = false;
        this.pending = true;
        this.enabled = true;
        this.rejected = false;
        this.exclusive = true;
        this.createdAt = new Date();
        this.order = 1;
    };
    return Product;
}());
exports.Product = Product;
