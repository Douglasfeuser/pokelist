import { Component, OnInit } from '@angular/core';
import * as localforage from "localforage";
import { PokemondbService } from '../pokemondb.service';

@Component({
  selector: 'app-generation-list-page',
  templateUrl: './generation-list-page.component.html',
  styleUrls: ['./generation-list-page.component.css']
})
export class GenerationListPageComponent implements OnInit {
  loadingComplete = false;
  Generations = new Array;
  GenerationsList = new Array;

  constructor(
    private pokemonDb: PokemondbService
  ) { }

  async ngOnInit(): Promise<void> {

    await fetch(`https://pokeapi.co/api/v2/generation`)
    .then((res) => res.json())
    .then((data) => {
        this.Generations = data.results;
      });

      this.Generations.forEach(async generation => {
        await fetch(`https://pokeapi.co/api/v2/generation/${generation.name}`)
        .then((res) => res.json())
        .then((data) => {
            console.log('teste');
            console.log(data);

            var Generation = {
              id: data.id,
              name: data.names[5]? data.names[5].name : 'Generation VIII',
              total: data.pokemon_species.length,
            }

            this.GenerationsList.push(Generation);
        });

        this.loadingComplete = true;
      });

  }

}
