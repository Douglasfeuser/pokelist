import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  private sub: any;
  id!: string;
  public pokemon$!: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  async ngOnInit(): Promise<void> {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.pokemon$ = this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);

  }

}
