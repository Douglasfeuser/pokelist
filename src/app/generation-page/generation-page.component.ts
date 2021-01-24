import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generation-page',
  templateUrl: './generation-page.component.html',
  styleUrls: ['./generation-page.component.css']
})
export class GenerationPageComponent implements OnInit {
  private sub: any;
  GenerationName!: string;
  id!: string;
  pokemon;
  sortByName = 'name';

  constructor(
    private route: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    await fetch(`https://pokeapi.co/api/v2/generation/${this.id}`)
        .then((res) => res.json())
        .then((data) => {
            this.GenerationName = data.names[5]? data.names[5].name : 'Generation VIII';
            this.pokemon = data.pokemon_species;
          });

  }

  setSortByName(sortByName: any){
    console.log(`setSortByName(${sortByName}) called.`)
    this.sortByName = sortByName;
    this.pokemon = this.sortBy();
  }

  sortBy() {
    console.log(this.pokemon);
    this.pokemon.sort((a, b) => a[this.sortByName] > b[this.sortByName] ? 1 : a[this.sortByName] === b[this.sortByName] ? 0 : -1);
    return this.pokemon
  }

}
