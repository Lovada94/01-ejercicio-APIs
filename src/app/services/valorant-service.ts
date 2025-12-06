import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponseValorant} from '../common/valorant-interface';

@Injectable({
  providedIn: 'root',
})
export class ValorantService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly urlBase = 'https://valorant-api.com/v1/agents';

  getAgentsValorant(): Observable<ApiResponseValorant>{
    return this.http.get<ApiResponseValorant>(this.urlBase);
  }

}
