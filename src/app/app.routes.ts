import { Routes } from '@angular/router';
import {ValorantList} from './components/web/valorant/valorant-list/valorant-list';
import {FinalSpaceList} from './components/web/final-space/final-space-list/final-space-list';
import {MonsterHunterList} from './components/web/monster-hunter/monster-hunter-list/monster-hunter-list';
import {PokemonTcgList} from './components/web/pokemon-tcg/pokemon-tcg-list/pokemon-tcg-list';
import {Inicio} from './components/web/base/inicio/inicio';
import {ErrorComponent} from './components/structure/error/error-component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: Inicio,
  },
  {
    path: 'valorant/list',
    component: ValorantList,
  },
  {
    path: 'final-space/list',
    component: FinalSpaceList,
  },
  {
    path: 'monster-hunter/list',
    component: MonsterHunterList,
  },
  {
    path: 'pokemon-tcg/list',
    component: PokemonTcgList,
  },
  {
    path: '**',
    component: ErrorComponent,
    pathMatch: 'full',
  },
];
