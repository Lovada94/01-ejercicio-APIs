import {Component, inject, signal} from '@angular/core';
import {FinalSpaceService} from '../../../../services/final-space-service';
import {CharacterFinalSpace} from '../../../../common/final-space-interface';

@Component({
  selector: 'app-final-space-list',
  imports: [],
  templateUrl: './final-space-list.html',
  styleUrl: './final-space-list.scss',
})
export class FinalSpaceList {

  private readonly finalSpaceService: FinalSpaceService = inject(FinalSpaceService);
  charatcerList = signal<CharacterFinalSpace[]>([]);

  constructor() {
    this.loadCharatcers();
  }

  private loadCharatcers() {
    this.finalSpaceService.getCharactersFinalSpace().subscribe(
      {
        next: value => {
          this.charatcerList.set(value);
        },
        complete: () => {
          console.log('Final Space List Loaded');
        },
        error: error => {
          console.error(error);
        }
      }
    )
  }
}
