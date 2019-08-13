import * as firebase from 'firebase/app';
import 'firebase/auth';
import Roles from './roles';
interface UserAccount extends firebase.User {
    uid: string;
    key?: string;
    name: string;
    email: string;
    password: string;
    profilePic?: string;
    phone: string;
    type: string;
    roles?: Roles;
}
export default UserAccount;
