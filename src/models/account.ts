import { Roles } from './roles';

/**
 *  Account Class
 *
 */

export class Account {
  uid?: string;
  name: string;
  email: string;
  password: string;
  profilePic?: string;
  phone: string;
  type: string;
  roles?: Roles;

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      if (fields[f]) {
        this[f] = fields[f];
      }
    }
  }
}
