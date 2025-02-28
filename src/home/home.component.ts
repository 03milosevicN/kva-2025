import { Component } from '@angular/core';
import {FlightService} from '../services/flight.service';
import {NgForOf, NgIf} from '@angular/common';
import {AxiosError} from 'axios';
import {FlightModel} from '../models/flight.model';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {formatDate} from '../app/utils';
import {LoadingComponent} from '../loading/loading.component';

@Component({
  imports: [
    NgIf,
    NgForOf,
    MatButtonModule,
    MatCardModule,
    LoadingComponent,
  ],
  selector: 'app-home',
  styleUrl: './home.compwonent.css',
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

  public generateDestinationImage(dest: string) {
    return `https://img.pequla.com/destination/${dest.split(' ')[0].toLowerCase()}.jpg`
  }

  // generated typescript bs
  protected readonly formatDate = formatDate;
}
