import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generation-list-page',
  templateUrl: './generation-list-page.component.html',
  styleUrls: ['./generation-list-page.component.css']
})
export class GenerationListPageComponent implements OnInit {
  loadingComplete = false;
  Generations = new Array;
  GenerationsList = new Array;

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

            const Generation = {
              id: data.id,
              name: data.names[5]? data.names[5].name : 'Generation VIII',
              total: data.pokemon_species.length,
              totalJogos: data.version_groups.length,
            }

            this.GenerationsList.push(Generation);
        });

        this.loadingComplete = true;
      });

  }

}
