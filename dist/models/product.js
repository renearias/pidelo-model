"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstract_model_1 = require("./abstract-model");
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
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
    Product.prototype.initializeForImport = function () {
        this.accepted = true;
        this.pending = false;
        this.enabled = true;
        this.rejected = false;
        this.exclusive = false;
    };
    return Product;
}(abstract_model_1.Model));
exports.default = Product;
