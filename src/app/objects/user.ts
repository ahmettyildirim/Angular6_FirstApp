import { Address } from './address';
import { Company } from './company';

export class User{
    id:number;
    name:String;
    username:string;
    mail:string
    address:Address;
    phone:string;
    website:string;
    company:Company;
}