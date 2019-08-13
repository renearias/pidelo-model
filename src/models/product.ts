/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export class Product {
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

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      if (fields[f]) {
        this[f] = fields[f];
      }
    }
  }

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
}
