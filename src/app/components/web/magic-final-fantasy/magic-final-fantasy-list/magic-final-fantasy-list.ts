import {Component, inject, signal} from '@angular/core';
import {MagicFinalFantasyService} from '../../../../services/magic-final-fantasy-service';
import {ApiResponseMagicFF, CardsFF} from '../../../../common/magic-final-fantasy-interface';
import {NgbPagination} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-magic-final-fantasy-list',
  imports: [
    NgbPagination
  ],
  templateUrl: './magic-final-fantasy-list.html',
  styleUrl: './magic-final-fantasy-list.scss',
})
export class MagicFinalFantasyList {

  private readonly magicFinalFantasyService: MagicFinalFantasyService = inject(MagicFinalFantasyService);
  apiData!: ApiResponseMagicFF;
  cardList = signal<CardsFF[]>([]);
  currentPage: number = 1;

  constructor() {
    this.loadCards();
  }

  protected loadCards(event?: any) {
    this.magicFinalFantasyService.getCardsByPage(event).subscribe(
      {
        next: value => {
          console.log(value);
          this.cardList.set(value.data);
          this.apiData = value;
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
