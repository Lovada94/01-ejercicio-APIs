import {Component, inject, signal} from '@angular/core';
import {MonsterHunterService} from '../../../../services/monster-hunter-service';
import {WeaponMonsterHunter} from '../../../../common/monster-hunter';
import {NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-monster-hunter-list',
  imports: [
    NgbPagination,
    RouterLink
  ],
  templateUrl: './monster-hunter-list.html',
  styleUrl: './monster-hunter-list.scss',
})
export class MonsterHunterList {

  private readonly monsterHunterService: MonsterHunterService = inject(MonsterHunterService);
  weaponsList = signal<WeaponMonsterHunter[]>([]);
  currentPage = 1;
  pageSize = 20;
  totalWeapons = 0;

  constructor() {
    this.loadWeapons();
    this.countWeapons();
  }

  protected loadWeapons(page?: number) {
    if (page) this.currentPage = page;
    this.monsterHunterService.getWeaponsMonsterHunter(this.currentPage, this.pageSize).subscribe(
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

  private countWeapons() {
    this.monsterHunterService.getWeaponsNumber().subscribe(
      {
        next: value => {
          this.totalWeapons = value.length;
        }
      }
    )
  }
}
