import {CustomerType} from "./customer-type";

export interface Customer {
  id: number;
  name: string;
  birthday: string;
  gender: number;
  card: string;
  phone: string;
  email: string;
  cus_type: CustomerType;
  address: string;
}

