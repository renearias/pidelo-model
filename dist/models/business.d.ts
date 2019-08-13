import { Address } from '.';
import { DeliveryMethod } from './delivery-method';
import { Schedule } from './schedule';
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export declare class Business {
    _id: string;
    active: boolean;
    name: string;
    img: string;
    profilePic: string;
    owner: any;
    address: Address;
    radio: any;
    key: string;
    ruc: string;
    minOrder: any;
    geolocation: any;
    phone: any;
    payment_methods: Array<any>;
    delivery_methods: DeliveryMethod[];
    timeToAttend: any;
    pendingOrders?: number;
    totalOrders?: number;
    canDeferOrders: boolean;
    schedule?: Schedule;
    constructor(fields: any);
}
