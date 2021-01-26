import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';
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
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    RouterTestingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [SortPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
