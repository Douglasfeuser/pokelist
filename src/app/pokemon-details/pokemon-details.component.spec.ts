import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { PokemondbService } from '../pokemondb.service';

import { PokemonDetailsComponent } from './pokemon-details.component';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;
  let route: ActivatedRoute;
  let pokemonService: PokemondbService;

  beforeEach(waitForAsync(() => {
    component = new PokemonDetailsComponent(route, pokemonService);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ PokemonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
