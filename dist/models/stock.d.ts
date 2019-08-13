import { Business } from './business';
import { Product } from './product';
export declare class Stock {
    business: Business;
    businessRef: any;
    key: string;
    product: Product;
    productRef: any;
    price: number;
    quantity: number;
    constructor(fields: any);
}
