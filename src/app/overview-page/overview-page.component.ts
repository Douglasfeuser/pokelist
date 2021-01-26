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
  loading;
  Games = new Array;
  GamesList = new Array;
  Versions = new Array;

  constructor(
    private pokemonDb: PokemondbService
  ) { }

  async ngOnInit(): Promise<void> {

    this.Versions = await this.pokemonDb.getVersionsList();

    this.loading = new Promise<void>((resolve) => {
      this.Versions.forEach(async (version, index, array) => {
        let game = await this.pokemonDb.getVersionByName(version.name);
        let gameGroup = await this.pokemonDb.getVersionGroupByName(game.version_group.name);
        let generation = await this.pokemonDb.getGenerationByName(gameGroup.generation.name);

        let pokedex;
        let namesDex
        if(gameGroup.pokedexes[0]){
          pokedex = await this.pokemonDb.getPokedexByName(gameGroup.pokedexes[0].name);

          if(pokedex){
            namesDex = pokedex.names.filter(function(dex){
              if(dex.language.name == 'en'){
                return dex;
              }
            });
          }
        }

        let regioes;
        let waitHere;
        let namesRegions;
        if(gameGroup.regions.length >= 1){
          waitHere = new Promise<void>((resolve) => {
            gameGroup.regions.forEach(async (regiao, index, array) => {
              regioes = await this.pokemonDb.getRegionByName(regiao.name);
              if (index === array.length -1) {
                resolve();
              }
            });
          });

        }

        if(waitHere){
          waitHere.then(() => {

            namesRegions = regioes.names.filter(function(region){
              if(region.language.name == 'en'){
                return region;
              }
            });

            const Game = {
              id: game.id,
              nameUrl: game.name,
              name: game.names[6] ? game.names[6].name : game.name,
              pokedex: namesDex? namesDex[0].name : '??',
              total: pokedex? pokedex.pokemon_entries.length : '??',
              regions: namesRegions[0].name,
              generation: generation.names[5]? generation.names[5].name : generation.name,
            }
            console.log

            this.Games.push(Game);

          });
        } else {

          const Game = {
            id: game.id,
            name: game.names[6] ? game.names[6].name : game.name,
            pokedex: namesDex? namesDex[0].name : '??',
            total: pokedex? pokedex.pokemon_entries.length : '??',
            regions: '??',
            generation: generation.names[5]? generation.names[5].name : generation.name,
          }

          this.Games.push(Game);

        }

        if (index === array.length -1) {
          resolve();
        }

      });
    });

    this.loading.then(() => {
      this.loadingComplete = true;
    });

  }

}
