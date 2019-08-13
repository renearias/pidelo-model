import { Model } from './abstract-model';

class OrderItem extends Model {
  qty: number;
  price: number;
  product: any;
  stock_id: string;


  getTotal() {
    return this.price * this.qty;
  }
}

export default OrderItem;
