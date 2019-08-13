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
var enums_1 = require("../enums");
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.acceptTerms = false;
        _this.accepted = false;
        _this.rejected = false;
        _this.delivered = false;
        _this.items = [];
        /**
         * Obtiene o establece la calificación del pedido
         */
        _this.rate = 0;
        return _this;
    }
    Order.prototype.getSubTotalOrder = function () {
        var total = 0;
        this.items.forEach(function (e) {
            total += e.getTotal();
        });
        return total;
    };
    Order.prototype.getTotalOrder = function () {
        return this.getSubTotalOrder() + (this.deliveryCost || 0);
    };
    Order.prototype.packOrder = function (dateTime, customer, name, phone, address) {
        this.createdAt = dateTime;
        this.customer = customer;
        this.customerData = {
            name: name,
            phone: phone
        };
        if (!this.deliveryAddress) {
            this.deliveryAddress = address;
        }
    };
    Order.prototype.deliverOrder = function (dateTime) {
        this.deliveredAt = dateTime;
        this.delivered = true;
    };
    Order.prototype.acceptOrder = function (dateTime) {
        this.acceptedAt = dateTime;
        this.accepted = true;
    };
    Object.defineProperty(Order.prototype, "status", {
        /**
         * Obtiene el estado actual de la orden.
         *
         * @return
         */
        get: function () {
            var status = enums_1.OrderStatus.Undefined;
            if (this.rejected) {
                status = enums_1.OrderStatus.Rejected;
            }
            else if (this.ratedAt != null) {
                status = enums_1.OrderStatus.Rated;
            }
            else if (this.delivered) {
                status = enums_1.OrderStatus.Delivered;
            }
            else if (this.deliveryStartedAt != null) {
                status = enums_1.OrderStatus.Delivering;
            }
            else if (this.accepted) {
                status = enums_1.OrderStatus.Confirmed;
            }
            else if (this.createdAt) {
                status = enums_1.OrderStatus.Received;
            }
            return status;
        },
        enumerable: true,
        configurable: true
    });
    return Order;
}(abstract_model_1.Model));
exports.default = Order;
