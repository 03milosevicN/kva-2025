import {AirlineModel} from './airline.model';

export interface OrderModel {
  id: number,
  flightId: number,
  airline: AirlineModel,
  destination: string,
  count: number,
  pricePerItem: number,
  status: 'ordered' | 'paid' | 'canceled',
  rating: null | boolean,
}
