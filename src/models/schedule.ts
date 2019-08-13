import { WeekDay } from "@angular/common";


export class Schedule {
    _id?:string;
    key?: string;
    business_id: string;
    days: WeekDay[];
    from:Date;
    to: Date;

    constructor(fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (const f in fields) {
          this[f] = fields[f];
        }
      }
}
