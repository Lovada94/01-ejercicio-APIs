import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WeaponMonsterHunter} from '../common/monster-hunter';

@Injectable({
  providedIn: 'root',
})
export class MonsterHunterService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly urlBase = 'https://mhw-db.com/weapons?q={%22id%22:{%22$gte%22:1,%22$lte%22:20}}';

  getWeaponsMonsterHunter(): Observable<WeaponMonsterHunter[]>{
    return this.http.get<WeaponMonsterHunter[]>(this.urlBase);
  }

}
