import { Injectable } from '@angular/core';
const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

@Injectable({
  providedIn: 'root'
})
export class PokemondbService {

  constructor(
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
    var arrayPokemon = Array();

    var load = new Promise<void>((resolve) => {
      pokemonSpeciesList.forEach(async (a, index, array) => {
        var speciesByName = await P.getPokemonSpeciesByName(a.name);
        var pokemonByName = await P.getPokemonByName(speciesByName.id);

        var pokemonDataWithString = {
          name: pokemonByName.name,
          number: pokemonByName.id,
          gameIndices: pokemonByName.game_indices,
          species: pokemonByName.species,
          sprites: pokemonByName.sprites,
          types: pokemonByName.types,
          evolutionChain: speciesByName.evolution_chain[0],
          pokedexNumbers: speciesByName.pokedex_numbers[0]
        }

        arrayPokemon.push(pokemonDataWithString);

        if (index === array.length -1) resolve();

      });

    });

    load.then(() => {
      console.log(arrayPokemon);
      return arrayPokemon;
    });
  }

  async getPokemonFromSpecies(pokemonSpecies){

    var speciesByName = await P.getPokemonSpeciesByName(pokemonSpecies.name);
    var pokemonByName = await P.getPokemonByName(speciesByName.id);

    var pokemonDataWithString = {
      name: pokemonByName.name,
      number: pokemonByName.id,
      gameIndices: pokemonByName.game_indices,
      generation: speciesByName.generation,
      species: pokemonByName.species,
      sprites: pokemonByName.sprites,
      types: pokemonByName.types,
      evolutionChain: speciesByName.evolution_chain[0],
      pokedexNumbers: speciesByName.pokedex_numbers[0]
    }

    return pokemonDataWithString;

  }

}
