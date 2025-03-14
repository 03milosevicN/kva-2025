import {OrderModel} from './order.model';

export interface UserModel {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  phone: string,
  address: string,
  favouriteDestination: string,
  orders: OrderModel[],
}

