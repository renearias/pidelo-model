
/**
 * Estado de la orden.
 */
enum OrderStatus {
  Rejected = -1,
  Undefined = 0,
  Received,
  Confirmed,
  Delivering,
  Delivered,
  Rated
}

export default OrderStatus;
