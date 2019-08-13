"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
var Order = /** @class */ (function () {
    function Order(fields) {
        this.acceptTerms = false;
        this.accepted = false;
        this.rejected = false;
        this.delivered = false;
        this.items = [];
        /**
         * Obtiene o establece la calificación del pedido
         */
        this.rate = 0;
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            this[f] = fields[f];
        }
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
}());
exports.Order = Order;
