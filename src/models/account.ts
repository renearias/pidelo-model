import { Model } from './abstract-model';
import { Roles } from './roles';

class Account extends Model {
  uid?: string;
  name: string;
  email: string;
  password: string;
  profilePic?: string;
  phone: string;
  type: string;
  roles: Roles;
}

export default Account;
