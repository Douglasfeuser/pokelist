import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { GamePageComponent } from './game-page/game-page.component';

import { GenerationListPageComponent} from './generation-list-page/generation-list-page.component';
import { GenerationPageComponent} from './generation-page/generation-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { GameCardComponent } from './game-card/game-card.component';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    GamePageComponent,
    OverviewPageComponent,
    GenerationListPageComponent,
    GenerationPageComponent,
    PokemonDetailsComponent,
    ScrollToTopComponent,
    GameCardComponent,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
