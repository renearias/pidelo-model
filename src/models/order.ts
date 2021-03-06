import { Model } from './abstract-model';
import Address from './address';
import Business from './business';
import DeliveryMethod from './delivery-method';
import OrderItem from './order-item';
import * as firebase from 'firebase/app';
import { OrderStatus, Rate } from '../enums';

class Order extends Model {
  acceptTerms = false;
  paymentMethod: any;
  business: string;
  businessData: Business;
  createdAt: Date | firebase.firestore.Timestamp;
  customer: string;
  customerData: any;
  key: string;
  accepted = false;
  acceptedAt: Date | firebase.firestore.Timestamp;
  rejected = false;
  rejectedAt: Date | firebase.firestore.Timestamp;
  delivered = false;
  deliveryAddress: Address;
  deliveredAt: Date | firebase.firestore.Timestamp;
  deliveryMethod: DeliveryMethod;
  deliveryCost: number;
  howMuchPay: number;
  items: OrderItem[] = [];
  // status?: any;
  deferredDeliveryTime?: any;
  
  /**
   * Obtiene o establece el momento en que inicia la entrega del pedido.
   */
  deliveryStartedAt?: Date | firebase.firestore.Timestamp;
  elapsedTime?: number; // minutos
  /**
   * Obtiene o establece la calificación del pedido
   */
  rate: Rate = 0;

  /**
   * Obtiene o establece el momento en que califica el pedido.
   */
  ratedAt?: Date | firebase.firestore.Timestamp;
  getSubTotalOrder() {
    let total = 0;
    this.items.forEach((e: OrderItem) => {
      total += e.getTotal();
    });

    return total;
  }

  getTotalOrder() {
    return this.getSubTotalOrder() + (this.deliveryCost || 0);
  }

  packOrder(dateTime, customer, name, phone?, address?) {
    this.createdAt = dateTime;
    this.customer = customer;
    this.customerData = {
      name: name,
      phone: phone
    };
    if (!this.deliveryAddress) {
      this.deliveryAddress = address;
    }
  }

  deliverOrder(dateTime) {
    this.deliveredAt = dateTime;
    this.delivered = true;
  }

  acceptOrder(dateTime) {
    this.acceptedAt = dateTime;
    this.accepted = true;
  }

  /**
   * Obtiene el estado actual de la orden.
   *
   * @return
   */
  get status(): OrderStatus {
    let status: OrderStatus = OrderStatus.Undefined;

    if (this.rejected) {
      status = OrderStatus.Rejected;
    } else if (this.ratedAt != null) {
      status = OrderStatus.Rated;
    } else if (this.delivered) {
      status = OrderStatus.Delivered;
    } else if (this.deliveryStartedAt != null) {
      status = OrderStatus.Delivering;
    } else if (this.accepted) {
      status = OrderStatus.Confirmed;
    } else if (this.createdAt) {
      status = OrderStatus.Received;
    }

    return status;
  }
}

export default Order;
