import { Component, Input } from '@angular/core';
import { Digimon } from '../models/digimon';

@Component({
  selector: 'app-digimon-detail',
  templateUrl: './digimon-detail.component.html',
  styleUrls: ['./digimon-detail.component.css']
})
export class DigimonDetailComponent {
  @Input() digimon?: Digimon
}
