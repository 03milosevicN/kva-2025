import { Component } from '@angular/core';
import {
  MatTableModule
} from '@angular/material/table';
import {AirlineModel} from '../models/airline.model';
import {AirlineService} from '../services/airline.service';
import {LoadingComponent} from '../loading/loading.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-airlines',
  imports: [
    MatTableModule,
    LoadingComponent,
    NgIf
  ],
  templateUrl: './airlines.component.html',
  styleUrl: './airlines.component.css'
})
export class AirlinesComponent {

  displayedColumns: string[] = ['id', 'name', 'countryOfOrigin', 'website'];
  dataSource: AirlineModel[] = AirlineService.getAirlines();

  constructor() {
    AirlineService.getAirlines();
  }

}
