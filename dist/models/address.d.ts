/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export declare class Address {
    country: string;
    address: string;
    addressSystem: any;
    city: string;
    district: string;
    geolocation: any;
    key: string;
    number: string;
    owner: any;
    icon: any;
    type: any;
    reference: string;
    constructor(fields: any);
}
