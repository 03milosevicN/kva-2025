import { Component } from '@angular/core';
import {FlightModel} from '../models/flight.model';
import {AirlineModel} from '../models/airline.model';
import {AirlineService} from '../services/airline.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FlightService} from '../services/flight.service';
import {UserService} from '../services/user.service';
import {UtilsService} from '../services/utils.service';

@Component({
  selector: 'app-order',
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  public flight: FlightModel | null = null;
  public airlines: AirlineModel[] = AirlineService.getAirlines();
  public selectedAirline: number = this.airlines[0].id;
  public selectedTickerCount: number = 1;
  public selectedPrice: number = 150;

  constructor(private route: ActivatedRoute, public utils: UtilsService, private router: Router ) {
    route.params.subscribe(params => {
      FlightService.getFlightById(params['id'])
        .then(rsp => {
          this.flight = rsp.data;
        });
    });
  }

  public doOrder() {
    const result = UserService.createOrder({
      id: new Date().getTime(),
      flightId: this.flight!.id,
      flightNumber: this.flight!.flightNumber,
      destination: this.flight!.destination,
      airline: AirlineService.getAirlineById(this.selectedAirline)!,
      count: this.selectedTickerCount,
      pricePerItem: this.selectedPrice,
      status: 'ordered',
      rating: null
    })

    result ? this.router.navigate(['/user']) : alert('An error occured while creating an order');

  }

}
