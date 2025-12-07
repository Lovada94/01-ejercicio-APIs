import {Component, inject, signal} from '@angular/core';
import {ValorantService} from '../../../../services/valorant-service';
import {AgentValorant} from '../../../../common/valorant-interface';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-valorant-list',
  imports: [
    RouterLink
  ],
  templateUrl: './valorant-list.html',
  styleUrl: './valorant-list.scss',
})
export class ValorantList {

  private readonly valorantService: ValorantService = inject(ValorantService);
  agentsList = signal<AgentValorant[]>([]);

  constructor() {
    this.loadAgents();
  }

  private loadAgents() {
    this.valorantService.getAgentsValorant().subscribe(
      {
        next: value => {
          this.agentsList.set(value.data);
        },
        complete: () => {
          console.log("Agents loaded");
        },
        error: error => {
          console.error(error);
        }
      }
    )
  }
}
