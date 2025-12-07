import {Component, inject, signal} from '@angular/core';
import {MagicFinalFantasyService} from '../../../../services/magic-final-fantasy-service';
import {CardsFF} from '../../../../common/magic-final-fantasy-interface';

@Component({
  selector: 'app-magic-final-fantasy-list',
  imports: [],
  templateUrl: './magic-final-fantasy-list.html',
  styleUrl: './magic-final-fantasy-list.scss',
})
export class MagicFinalFantasyList {

  private readonly magicFinalFantasyService: MagicFinalFantasyService = inject(MagicFinalFantasyService)
  cardList = signal<CardsFF[]>([]);

  constructor() {
    this.loadPokemons();
  }

  private loadPokemons() {
    this.magicFinalFantasyService.getCards().subscribe(
      {
        next: value => {
          this.cardList.set(value.data);
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
