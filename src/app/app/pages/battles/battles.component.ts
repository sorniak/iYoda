import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrls: ['./battles.component.sass']
})
export class BattlesComponent implements OnInit {

  species = [];

  constructor(
    private swapi: SwapiService
  ) { }

  ngOnInit() {
    this.swapi.getSpecies().subscribe(data => this.species = data);
  }

}
