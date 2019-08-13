import { Roles } from './roles';
/**
 *  Account Class
 *
 */
export declare class Account {
    uid?: string;
    name: string;
    email: string;
    password: string;
    profilePic?: string;
    phone: string;
    type: string;
    roles?: Roles;
    constructor(fields: any);
}
