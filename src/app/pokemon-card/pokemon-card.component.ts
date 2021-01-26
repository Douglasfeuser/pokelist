import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemondbService } from "../pokemondb.service";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  private sub: any;
  url;
  entry_number;

  @Input()
  pokemon: any;
  loadingComplete = false;

  constructor(
    private route: ActivatedRoute,
    private pokemonDb: PokemondbService
  ) { }

  async ngOnInit(): Promise<void> {
    this.sub = this.route.url.subscribe(url => {
      this.url = url[0];
    });

    if(this.url.path == 'jogo'){
      this.entry_number = this.pokemon.entry_number;
      this.pokemon = await this.pokemonDb.getPokemonFromSpecies(this.pokemon.pokemon_species);
    } else {
      this.pokemon = await this.pokemonDb.getPokemonFromSpecies(this.pokemon);
    }

    this.loadingComplete = true;
  }

}
