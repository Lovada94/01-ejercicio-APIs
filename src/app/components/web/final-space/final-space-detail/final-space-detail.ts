import {Component, inject, Input} from '@angular/core';
import {FinalSpaceService} from '../../../../services/final-space-service';
import {CharacterFinalSpace} from '../../../../common/final-space-interface';

@Component({
  selector: 'app-final-space-detail',
  imports: [],
  templateUrl: './final-space-detail.html',
  styleUrl: './final-space-detail.scss',
})
export class FinalSpaceDetail {

  @Input('id') id!: number;
  private readonly finalSpaceService: FinalSpaceService = inject(FinalSpaceService);
  character!: CharacterFinalSpace;

  ngOnInit(): void {
    this.loadCharacter();
  }

  private loadCharacter() {
    this.finalSpaceService.getCharacter(this.id).subscribe(
      {
        next: value => {
          this.character = value;
        },
        complete: () => {
          console.log('Final space detail loaded');
        },
        error: error => {
          console.error(error);
        }
      }
    )
  }
}
