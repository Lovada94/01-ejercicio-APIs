import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponsePokemonTCG} from '../common/pokemon-tcg-interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonTcgService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly urlBase = 'https://pokeapi.co/api/v2/pokemon/';

  getPokemons(): Observable<ApiResponsePokemonTCG>{
    return this.http.get<ApiResponsePokemonTCG>(this.urlBase);
  }

}
