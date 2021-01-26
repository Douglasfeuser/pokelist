import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemondbService } from '../pokemondb.service';
const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  private sub: any;
  id!: string;
  pokemon;
  loadingComplete = false;

  constructor(
    private route: ActivatedRoute,
    private pokemonDb: PokemondbService
  ) { }

  async ngOnInit(): Promise<void> {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    console.log(this.id);
    let pokemonName = await P.resource(`api/v2/pokemon-species/${this.id}`).then(function(pokemon) {
      return pokemon;
    });
    this.pokemon = await this.pokemonDb.getPokemonFromSpecies(pokemonName);

    this.loadingComplete = true;

  }

}
