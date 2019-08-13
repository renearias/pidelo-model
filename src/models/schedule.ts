import { WeekDay } from '@angular/common';
import { Model } from './abstract-model';


class Schedule extends Model {
  _id?: string;
  key?: string;
  business_id: string;
  days: WeekDay[];
  from: Date;
  to: Date;
}


export default Schedule;
