import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponseMagicFF} from '../common/magic-final-fantasy-interface';

@Injectable({
  providedIn: 'root',
})
export class MagicFinalFantasyService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly urlBase = 'https://api.scryfall.com/cards/search?q=set:FIN';

  getCards(): Observable<ApiResponseMagicFF>{
    return this.http.get<ApiResponseMagicFF>(this.urlBase);
  }

  getCardsByPage(page: number): Observable<ApiResponseMagicFF> {
    return this.http.get<ApiResponseMagicFF>(this.urlBase+'&page='+page);
  }
}
