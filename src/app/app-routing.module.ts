import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamePageComponent} from './game-page/game-page.component';
import { OverviewPageComponent} from './overview-page/overview-page.component'
import { GenerationListPageComponent} from './generation-list-page/generation-list-page.component'
import { SettingsComponent } from './settings/settings.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { GenerationPageComponent} from './generation-page/generation-page.component';

const routes: Routes = [
  { path: 'jogo/:id',      component: GamePageComponent },
  { path: 'jogos',      component: OverviewPageComponent },
  { path: '',      component: GenerationListPageComponent },
  { path: 'geracoes',      component: GenerationListPageComponent },
  { path: 'geracao/:id',      component: GenerationPageComponent },
  { path: 'settings',      component: SettingsComponent },
  { path: 'jogo/:id/:numberNational', component: PokemonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }