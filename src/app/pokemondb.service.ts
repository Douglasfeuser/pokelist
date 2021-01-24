import { Injectable } from '@angular/core';
import * as localforage from "localforage";
const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();
import { LocalforageService } from './localforage.service';

@Injectable({
  providedIn: 'root'
})
export class PokemondbService {

  constructor(
    private lf: LocalforageService
  ) { }

  async getAllPokemonSpecies(){
    var pokemonSpecies = await P.getPokemonSpeciesList();
    var pSpeciesList = new Array;

    pokemonSpecies.results.forEach(p => {
      pSpeciesList.push(p.name);
    });

    return pSpeciesList;
  }

  async getAllPokemonFromSpeciesList(pokemonSpeciesList: Array<any>){
    // split array into array of arrays (so we don't call the API as many times)
    var arraySize = 100;
    var arrayOfSpeciesList = Array();
    for (var i = 0; i<pokemonSpeciesList.length; i += arraySize){
      arrayOfSpeciesList.push(pokemonSpeciesList.slice(i, i+arraySize));
    }


    arrayOfSpeciesList.forEach(async a => {
      var speciesByName = await P.getPokemonSpeciesByName(a);
      var pokemonNumbers = new Array;
      speciesByName.forEach(e => {
        pokemonNumbers.push(e.id);
      });
      var pokemonByName = await P.getPokemonByName(pokemonNumbers);

      pokemonByName.forEach(async p => {
        var id = p.id;
        var s = speciesByName.filter(i => i.id === id)[0];

        var typeNames = "";
        p.types.forEach(t => {
          typeNames += t.type.name
        });

        var pokemonDataString = p.name + p.id + typeNames

        var pokemonDataWithString = {
          name: p.name,
          number: p.id,
          gameIndices: p.game_indices,
          species: p.species,
          sprites: p.sprites,
          types: p.types,
          evolutionChain: s.evolution_chain,
          pokedexNumbers: s.pokedex_numbers,
          string: pokemonDataString
        }

        await this.lf.setDatabaseRow("pokemon", id, pokemonDataWithString);
      });

    })
  }

}
