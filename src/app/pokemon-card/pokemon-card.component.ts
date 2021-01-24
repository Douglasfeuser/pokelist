import { Component, OnInit, Input } from '@angular/core';
import { PokemondbService } from "../pokemondb.service";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input()
  pokemon: any;
  loadingComplete = false;

  constructor(
    private pokemonDb: PokemondbService
  ) { }

  async ngOnInit(): Promise<void> {
    this.pokemon = await this.pokemonDb.getPokemonFromSpecies(this.pokemon);

    this.loadingComplete = true;

    // console.log(this.pokemon);
  }

}
