import { Component, Input } from '@angular/core';
import { CEO, Head, Team } from '../../models/employee.model';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-ceo',
  templateUrl: './ceo.component.html',
  styleUrls: ['./ceo.component.css']
})
export class CEOComponent {
  @Input() ceo: CEO;
  isPanelOpen = true;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    const allTeams: Team[] = [];
    this.ceo.heads.forEach(head => {
      head.teams.forEach(team => {
        allTeams.push(team);
      });
    });
    this.teamService.setAllTeams(allTeams); // Set all teams using the TeamService
  }

  togglePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }
}
