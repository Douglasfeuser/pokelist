import { Injectable } from '@angular/core';
const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

@Injectable({
  providedIn: 'root'
})
export class PokemondbService {

  constructor(
  ) { }

  async getVersionsList(){
    var versions = await P.getVersionsList();
    return versions.results;
  }

  async getVersionByName(name){
    var version = await P.getVersionByName(name);
    return version;
  }

  async getVersionGroupsList(){
    var versionsGroups = await P.getVersionGroupsList();
    return versionsGroups;
  }

  async getVersionGroupByName(name){
    var versionsGroup = await P.getVersionGroupByName(name);
    return versionsGroup;
  }

  async getGenerationByName(name){
    var generation = await P.getGenerationByName(name);
    return generation;
  }

  async getPokedexByName(name){
    var pokedex = await P.getPokedexByName(name);
    return pokedex;
  }

  async getRegionByName(name){
    return await P.resource(`api/v2/region/${name}`).then(function(response) {
      return response;
    });
  }

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
