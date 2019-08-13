import { Model } from './abstract-model';

class Product extends Model {
  id: string;
  category: any;
  sub_category: any;
  brand: string;
  key: string;
  product: string;
  picture: any;
  hasPicture?: boolean;
  parent: Product;
  children: Product[];
  primary: boolean;
  principal: string;
  price: number;
  SKU: string;
  presentation: string;
  quantity: string;
  type: string;
  flavor: string;
  info_extra: string;
  num_product: number;
  order: number;
  fullName?: string; // ghost variable
  qty?: number; // ghost variable
  stock?: number; // ghost variable
  stockPrice?: number; // ghost variable
  stock_id: string;
  bar_code?: any;
  business_code?: any;
  status: any;
  accepted: boolean;
  acceptedAt: Date;
  pending: boolean;
  rejected: boolean;
  enabled: boolean;
  exclusive: boolean;
  products_by_rack: number;
  requestBy: any;
  createdBy: any;
  createdAt: Date;
  name?: string;
  description?: string;

  addChild(product: Product) {
    this.children.push(product);

    return this;
  }

  setForRequest() {
    this.accepted = false;
    this.pending = true;
    this.enabled = true;
    this.rejected = false;
    this.exclusive = true;
    this.createdAt = new Date();
    this.order = 1;
  }

  initializeForImport() {
    this.accepted = true;
    this.pending = false;
    this.enabled = true;
    this.rejected = false;
    this.exclusive = false;
  }
}


export default Product;
