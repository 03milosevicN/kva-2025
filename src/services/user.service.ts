import {UserModel} from '../models/user.model';
import {OrderModel} from '../models/order.model';


export class UserService {


  static retrieveUsers(): UserModel[] {

    if (!localStorage.getItem('users')) {
      const arr: UserModel[] = [
        {
          email: 'user@example.com',
          password: 'user123',
          firstName: 'Example',
          lastName: 'User',
          phone: '+381611234567',
          address: 'Somewhere st., Belgrade',
          favouriteDestination: 'Zurich',
          orders: [],
        }
      ];

      localStorage.setItem('users', JSON.stringify(arr));
    }

    return JSON.parse(localStorage.getItem('users')!);
  }


  static createUser(model: UserModel) {
    const users = this.retrieveUsers();

    for (let user of users) {
      if (user.email === model.email) {
        return false;
      }
    }

    users.push(model);
    localStorage.setItem('users', JSON.stringify(users));
    return true;

  }


  static login(email: string, password: string): boolean {

    for (let user of this.retrieveUsers()) {
      if (user.email === email && user.password === password) {
        localStorage.setItem('active', user.email);
        return true;
      }
    }

    return false;
  }


  static getActiveUser() : UserModel | null {

    if (!localStorage.getItem('active')) {
      return null;
    }

    for (let user of this.retrieveUsers()) {
      if (user.email == localStorage.getItem('active')) {
        return user;
      }
    }

    return null;
  }


  static createOrder(order: OrderModel) {
    const arr = this.retrieveUsers()
    for (let user of arr) {
      if (user.email == localStorage.getItem('active')) {
        user.orders.push(order)
        localStorage.setItem('users', JSON.stringify(arr))
        return true
      }
    }

    return false
  }


  static changeOrderStatus(state: 'ordered' | 'paid' | 'canceled', id: number) {
    const active: UserModel | null = this.getActiveUser()
    if (active) {
      const arr: UserModel[] = this.retrieveUsers()
      for (let user of arr) {
        if (user.email == active.email) {
          for (let order of user.orders) {
            if (order.id == id) {
              order.status = state
            }
          }
          localStorage.setItem('users', JSON.stringify(arr))
          return true
        }
      }
    }

    return false
  }


  static changeRating(rating: boolean, id: number) {
    const active = this.getActiveUser()
    if (active) {
      const arr = this.retrieveUsers()
      for (let user of arr) {
        if (user.email == active.email) {
          for (let order of user.orders) {
            if (order.id == id && order.status == 'paid') {
              order.rating = rating;
            }
          }
          localStorage.setItem('users', JSON.stringify(arr));
          return true;
        }
      }
    }

    return false
  }


  static changePassword(newPassword: string): boolean {

    const arr = this.retrieveUsers()
    for (let user of arr) {
      if (user.email == localStorage.getItem('active')) {
        user.password = newPassword;
        localStorage.setItem('users', JSON.stringify(arr));
        return true;
      }
    }

    return false;
  }

}
