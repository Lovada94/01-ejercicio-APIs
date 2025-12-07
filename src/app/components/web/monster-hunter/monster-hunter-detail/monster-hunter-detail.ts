import {Component, inject, Input, input} from '@angular/core';
import {MonsterHunterService} from '../../../../services/monster-hunter-service';
import {WeaponMonsterHunter} from '../../../../common/monster-hunter';
import {TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-monster-hunter-detail',
  imports: [
    TitleCasePipe
  ],
  templateUrl: './monster-hunter-detail.html',
  styleUrl: './monster-hunter-detail.scss',
})
export class MonsterHunterDetail {
  @Input('id') id!: number;
  private readonly monsterHunterService: MonsterHunterService = inject(MonsterHunterService);
  weaponMonsterHunter!: WeaponMonsterHunter;

  ngOnInit() {
    this.loadWeapon();
  }

  private loadWeapon() {
    this.monsterHunterService.getWeapon(this.id).subscribe(
      {
        next: value => {
          this.weaponMonsterHunter = value;
        },
        complete: () => {
          console.log("Weapon load");
        },
        error: error => {
          console.error(error);
        }
      }
    )
  }
}
