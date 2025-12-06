import {Component, inject, signal} from '@angular/core';
import {PokemonTcgService} from '../../../../services/pokemon-tcg-service';
import {Pokemons} from '../../../../common/pokemon-tcg-interface';

@Component({
  selector: 'app-pokemon-tcg-list',
  imports: [],
  templateUrl: './pokemon-tcg-list.html',
  styleUrl: './pokemon-tcg-list.scss',
})
export class PokemonTcgList {

  private readonly pokemonTCGService: PokemonTcgService = inject(PokemonTcgService)
  cardList = signal<Pokemons[]>([]);

  constructor() {
    this.loadPokemons();
  }

  private loadPokemons() {
    this.pokemonTCGService.getPokemons().subscribe(
      {
        next: value => {
          this.cardList.set(value.results);
        },
        complete: () => {
          console.log("Pokemon TCG List");
        },
        error: error => {
          console.error(error);
        }
      }
    )
  }
}
