import { Component, OnInit } from '@angular/core';
import * as localforage from "localforage";
import { ActivatedRoute } from '@angular/router';

const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

import {PokemondbService} from "../pokemondb.service"
@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  private sub: any;
  GameName!: string;
  dbName!: string;
  pokemon;
  searchText;
  searchNumber;

  constructor(
    private route: ActivatedRoute,
  ) { }

  async ngOnInit(): Promise<void> {


  }

}
