import { firestore } from 'firebase/app';
import { Model } from './abstract-model';
declare class Address extends Model {
    alias: string;
    country: string;
    address: string;
    addressSystem: any;
    city: string;
    district: string;
    geolocation: firestore.GeoPoint;
    key: string;
    number: string;
    owner: any;
    icon: any;
    type: any;
    reference: string;
}
export default Address;
