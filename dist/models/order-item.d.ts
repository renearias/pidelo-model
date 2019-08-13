import { Model } from './abstract-model';
declare class OrderItem extends Model {
    qty: number;
    price: number;
    product: any;
    stock_id: string;
    getTotal(): number;
}
export default OrderItem;
