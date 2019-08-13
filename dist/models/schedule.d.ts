import { WeekDay } from "@angular/common";
export declare class Schedule {
    _id?: string;
    key?: string;
    business_id: string;
    days: WeekDay[];
    from: Date;
    to: Date;
    constructor(fields: any);
}
