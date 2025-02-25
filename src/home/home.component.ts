import { Component } from '@angular/core';
import {FlightService} from '../services/flight.service';
import {JsonPipe, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {AxiosError} from 'axios';
import {FlightModel} from '../models/flight.model';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  imports: [
    NgIf,
    NgForOf,
    MatButtonModule,
    MatCardModule,
    NgOptimizedImage,
  ],
  selector: 'app-home',
  styleUrl: './home.component.css',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  public flights: FlightModel[] | null = null;
  public error: string | null = null;

  constructor() {
    FlightService.getFlights(0, 3)
      .then(rsp => this.flights = rsp.data.content)
      .catch( (e: AxiosError) => this.error = `${e.code} : ${e.message}` );
  }

  public formatDate(iso: string) {
    return new Date(iso).toLocaleString('sr-RS');
  }

  public generateDestinationImage(dest: string) {
    return `https://img.pequla.com/destination/${dest.split(' ')[0].toLowerCase()}.jpg`
  }


}
