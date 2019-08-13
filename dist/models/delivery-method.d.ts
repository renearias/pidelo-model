import { Model } from './abstract-model';
declare class DeliveryMethod extends Model {
    _id: string;
    name: string;
    key?: string;
    default_price: number;
    owner: string;
    radio: number;
    geolocation: any;
    price_zones?: any;
    polygon_area?: any;
}
export default DeliveryMethod;
