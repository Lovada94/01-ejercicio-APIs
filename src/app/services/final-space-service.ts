import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CharacterFinalSpace} from '../common/final-space-interface';

@Injectable({
  providedIn: 'root',
})
export class FinalSpaceService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly urlBase = 'https://finalspaceapi.com/api/v0/character/';

  getCharactersFinalSpace(): Observable<CharacterFinalSpace[]> {
    return this.http.get<CharacterFinalSpace[]>(this.urlBase);
  }

}
