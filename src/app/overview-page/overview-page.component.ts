import { Component, OnInit } from '@angular/core';
import { PokemondbService } from '../pokemondb.service';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {
  oras;
  letsgo;
  loadingComplete = false;
  Games = new Array;

  async ngOnInit(): Promise<void> {

    this.loadingComplete = true;

  }

}
