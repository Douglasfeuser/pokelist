import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemondbService } from '../pokemondb.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  private sub: any;
  GameName!: string;
  id!: string;
  pokemon;
  pokedex;
  generations;
  version_group;
  sortByName = 'name';

  constructor(
    private route: ActivatedRoute,
    private pokemonDb: PokemondbService
  ) { }

  async ngOnInit(): Promise<void> {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    await fetch(`https://pokeapi.co/api/v2/version/${this.id}`)
        .then((res) => res.json())
        .then((data) => {
            this.GameName = data.name;
            this.version_group = data.version_group;
          });

    this.version_group = await this.pokemonDb.getVersionGroupByName(this.version_group.name);

    this.version_group.pokedexes.forEach(async p => {
      await fetch(`https://pokeapi.co/api/v2/pokedex/${p.name}`)
      .then((res) => res.json())
      .then((data) => {
        this.pokedex = data.name;
        this.pokemon = data.pokemon_entries;
      });
    });

  }

  setSortByName(sortByName: any){
    this.sortByName = sortByName;
    this.pokemon = this.sortBy();
  }

  sortBy() {
    this.pokemon.sort((a, b) => a[this.sortByName] > b[this.sortByName] ? 1 : a[this.sortByName] === b[this.sortByName] ? 0 : -1);
    return this.pokemon;
  }

}
