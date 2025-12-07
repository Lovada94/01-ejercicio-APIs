import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WeaponMonsterHunter} from '../common/monster-hunter';

@Injectable({
  providedIn: 'root',
})
export class MonsterHunterService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly urlBase = 'https://mhw-db.com/weapons';

  getWeaponsMonsterHunter(page: number, pageSize: number): Observable<WeaponMonsterHunter[]>{
    const max = page * pageSize;
    const min = max - pageSize + 1;

    return this.http.get<WeaponMonsterHunter[]>(this.urlBase+'?q={"id":{"$gte":'+min+',"$lte":'+max+'}}');
  }

  getWeaponsNumber(): Observable<WeaponMonsterHunter[]>{
    return this.http.get<WeaponMonsterHunter[]>(this.urlBase);
  }

  getWeapon(id: number): Observable<WeaponMonsterHunter>{
    return this.http.get<WeaponMonsterHunter>(this.urlBase+'/'+id);
  }

}
