/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
import { OrderItem } from './order-item';
import { Business } from './business';
import { DeliveryMethod } from './delivery-method';
import * as firebase from 'firebase/app';
import { OrderStatus, Rate } from '../enums';
export declare class Order {
    acceptTerms: boolean;
    paymentMethod: any;
    business: string;
    businessData: Business;
    createdAt: Date | firebase.firestore.Timestamp;
    customer: string;
    customerData: any;
    key: string;
    accepted: boolean;
    acceptedAt: Date | firebase.firestore.Timestamp;
    rejected: boolean;
    rejectedAt: Date | firebase.firestore.Timestamp;
    delivered: boolean;
    deliveryAddress: any;
    deliveredAt: Date | firebase.firestore.Timestamp;
    deliveryMethod: DeliveryMethod;
    deliveryCost: number;
    howMuchPay: number;
    items: OrderItem[];
    deferredDeliveryTime?: any;
    /**
     * Obtiene o establece el momento en que inicia la entrega del pedido.
     */
    deliveryStartedAt?: Date | firebase.firestore.Timestamp;
    elapsedTime?: number;
    /**
     * Obtiene o establece la calificación del pedido
     */
    rate: Rate;
    /**
     * Obtiene o establece el momento en que califica el pedido.
     */
    ratedAt?: Date | firebase.firestore.Timestamp;
    constructor(fields: any);
    getSubTotalOrder(): number;
    getTotalOrder(): number;
    packOrder(dateTime: any, customer: any, name: any, phone?: any, address?: any): void;
    deliverOrder(dateTime: any): void;
    acceptOrder(dateTime: any): void;
    /**
     * Obtiene el estado actual de la orden.
     *
     * @return
     */
    readonly status: OrderStatus;
}
