import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-loading',
    imports: [
        MatCard,
        MatCardContent,
        MatCardImage,
    ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {

}
