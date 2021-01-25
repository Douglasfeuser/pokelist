import { Component, OnInit } from '@angular/core';

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

  async ngOnInit(): Promise<void> {


  }

}
