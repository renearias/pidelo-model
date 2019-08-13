import { Model } from './abstract-model';
import Business from './business';
import Product from './product';
declare class Stock extends Model {
    business: Business;
    businessRef: any;
    key: string;
    product: Product;
    productRef: any;
    price: number;
    quantity: number;
}
export default Stock;
