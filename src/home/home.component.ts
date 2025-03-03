import { Component } from '@angular/core';
import {FlightService} from '../services/flight.service';
import {NgForOf, NgIf} from '@angular/common';
import {AxiosError} from 'axios';
import {FlightModel} from '../models/flight.model';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {formatDate, generateDestinationImage} from '../app/utils';
import {LoadingComponent} from '../loading/loading.component';
import {RouterLink} from '@angular/router';

@Component({
  imports: [
    NgIf,
    NgForOf,
    MatButtonModule,
    MatCardModule,
    LoadingComponent,
    RouterLink,
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

  // generated typescript bs
  protected readonly formatDate = formatDate;


  protected readonly generateDestinationImage = generateDestinationImage;
}
