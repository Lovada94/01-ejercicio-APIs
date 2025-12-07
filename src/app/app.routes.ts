import { Routes } from '@angular/router';
import {ValorantList} from './components/web/valorant/valorant-list/valorant-list';
import {FinalSpaceList} from './components/web/final-space/final-space-list/final-space-list';
import {MonsterHunterList} from './components/web/monster-hunter/monster-hunter-list/monster-hunter-list';
import {Inicio} from './components/web/base/inicio/inicio';
import {ErrorComponent} from './components/structure/error/error-component';
import {
  MagicFinalFantasyList
} from './components/web/magic-final-fantasy/magic-final-fantasy-list/magic-final-fantasy-list';
import {MonsterHunterDetail} from './components/web/monster-hunter/monster-hunter-detail/monster-hunter-detail';
import {ValorantDetail} from './components/web/valorant/valorant-detail/valorant-detail';

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
    path: 'valorant/detail/:uuid',
    component: ValorantDetail,
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
    path: 'monster-hunter/list/:id',
    component: MonsterHunterDetail,
  },
  {
    path: 'magic-final-fantasy/list',
    component: MagicFinalFantasyList,
  },
  {
    path: '**',
    component: ErrorComponent,
    pathMatch: 'full',
  },
];
