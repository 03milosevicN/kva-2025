import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FlightService} from '../services/flight.service';
import { FlightModel } from '../models/flight.model';
import {NgIf} from '@angular/common';
import {formatDate, generateDestinationImage} from '../app/utils';
import {LoadingComponent} from '../loading/loading.component';
import {MatList, MatListItem} from '@angular/material/list';
import {MatCard, MatCardActions, MatCardContent} from '@angular/material/card';

@Component({
  selector: 'app-details',
  imports: [LoadingComponent, NgIf, MatListItem, MatList, MatCardContent, MatCard, MatCardActions],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  public flight: FlightModel | null = null;

  constructor(private route: ActivatedRoute) {

    route.params.subscribe(params => {
      FlightService.getFlightById(params['id'])
        .then(rsp => {
          this.flight = rsp.data;
        });
    });

  }

  protected readonly generateDestinationImage = generateDestinationImage;
  protected readonly formatDate = formatDate;
}
