import { Component, OnInit, Input } from '@angular/core';
import { PokemondbService } from '../pokemondb.service';
import colorsTypes from "../../assets/colors_types.json"

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input()
  pokemon: any;

  constructor(
    public pokemonDb: PokemondbService
  ) { }

  async ngOnInit(): Promise<void> {
    this.pokemon = await P.getPokemonByName(this.pokemon.name);
    // console.log(this.pokemon);
  }

}
