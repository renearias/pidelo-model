/**
 * Estado de la orden.
 */
declare enum OrderStatus {
    Rejected = -1,
    Undefined = 0,
    Received = 1,
    Confirmed = 2,
    Delivering = 3,
    Delivered = 4,
    Rated = 5
}
export default OrderStatus;
