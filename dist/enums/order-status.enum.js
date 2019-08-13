"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Estado de la orden.
 */
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Rejected"] = -1] = "Rejected";
    OrderStatus[OrderStatus["Undefined"] = 0] = "Undefined";
    OrderStatus[OrderStatus["Received"] = 1] = "Received";
    OrderStatus[OrderStatus["Confirmed"] = 2] = "Confirmed";
    OrderStatus[OrderStatus["Delivering"] = 3] = "Delivering";
    OrderStatus[OrderStatus["Delivered"] = 4] = "Delivered";
    OrderStatus[OrderStatus["Rated"] = 5] = "Rated";
})(OrderStatus || (OrderStatus = {}));
exports.default = OrderStatus;
