import { Component } from '@angular/core';
import { DigimonService } from '../digimon.service';
import { Digimon } from '../models/digimon';

@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html',
  styleUrls: ['./digimon.component.css']
})
export class DigimonComponent {
  digimons: Digimon[] = [];
  selectedDigimon?: Digimon;

  constructor(private digimonService:DigimonService) {}

  ngOnInit(): void {
    this.getDigimons();
  }

  setDigimons(digimons: Digimon[]) {
    this.selectedDigimon = undefined;
    this.digimons = digimons;
  }

  getDigimons(): void {
    this.digimonService.getDigimons().subscribe(digimons => this.digimons = digimons);
  }

  onSelect(digimon: Digimon){
    this.selectedDigimon = digimon;
  }

  onPress(name: string, level: string) {
    if (name) {
      this.digimonService.getDigimonsByName(name).subscribe(digimons => this.digimons = digimons);
      return;
    }
    if (level) {
      this.digimonService.getDigimonsByLevel(level).subscribe(digimons => this.digimons = digimons);
      return;
    }
    this.digimonService.getDigimons().subscribe(digimons => this.digimons = digimons);
    return;
  }
}