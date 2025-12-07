import {Component, inject, Input} from '@angular/core';
import {ValorantService} from '../../../../services/valorant-service';
import {AgentValorant} from '../../../../common/valorant-interface';

@Component({
  selector: 'app-valorant-detail',
  imports: [],
  templateUrl: './valorant-detail.html',
  styleUrl: './valorant-detail.scss',
})
export class ValorantDetail {
  @Input('uuid') uuid!: string;
  private readonly valorantService: ValorantService = inject(ValorantService);
  agent!: AgentValorant;

  ngOnInit() {
    this.loadAgent();
  }

  private loadAgent() {
    this.valorantService.getAgent(this.uuid).subscribe({
      next: value => {
        this.agent = value.data;
      },
      complete: () => {
        console.log('valorant detail loaded.');
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
