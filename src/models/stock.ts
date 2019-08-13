/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Business} from './business';
import {Product} from './product';

export class Stock {
  
  business: Business;
  businessRef: any;
  key: string;
  product: Product;
  productRef: any;
  price: number;
  quantity: number;
  
  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      this[f] = fields[f];
    }
  }

}
