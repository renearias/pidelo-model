/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
export declare class OrderItem {
    qty: number;
    price: number;
    product: any;
    stock_id: string;
    constructor(fields: any);
    getTotal(): number;
}
