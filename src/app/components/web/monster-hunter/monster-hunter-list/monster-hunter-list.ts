import {Component, inject, signal} from '@angular/core';
import {MonsterHunterService} from '../../../../services/monster-hunter-service';
import {WeaponMonsterHunter} from '../../../../common/monster-hunter';

@Component({
  selector: 'app-monster-hunter-list',
  imports: [],
  templateUrl: './monster-hunter-list.html',
  styleUrl: './monster-hunter-list.scss',
})
export class MonsterHunterList {

  private readonly monsterHunterService: MonsterHunterService = inject(MonsterHunterService);
  weaponsList = signal<WeaponMonsterHunter[]>([]);

  constructor() {
    this.loadWeapons();
  }

  private loadWeapons() {
    this.monsterHunterService.getWeaponsMonsterHunter().subscribe(
      {
        next: value => {
          this.weaponsList.set(value);
        },
        complete: () => {
          console.log("weaponsList is complete");
        },
        error: error => {
          console.error(error);
        }
      }
    )
  }
}
