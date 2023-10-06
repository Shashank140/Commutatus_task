import { Component, Input } from '@angular/core';
import { Head, Team } from '../../models/employee.model';
import { MatDialog } from '@angular/material/dialog';
import { TeamDialogComponent } from '../team-dialog/team-dialog.component';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  @Input() head: Head;
  allTeams: Team[] = this.teamService.getAllTeams();
  isPanelOpen = false;

  constructor(public dialog: MatDialog, private teamService: TeamService) { }

  togglePanel() {
        this.isPanelOpen = !this.isPanelOpen;
      }

  addTeam() {
    const dialogRef = this.dialog.open(TeamDialogComponent, {
      width: '250px',
      data: { name: '', action: 'Add' }
    });

    dialogRef.afterClosed().subscribe(result => {
      for(let i=0; i<this.allTeams.length; i++) {
        if(this.allTeams[i].name === result) {
          alert('This name is already taken');
          return;
        }
      }
      if (result) {
        if (!this.head.teams) {
          this.head.teams = [];
        }
        this.head.teams.push({
          name: result,
          members: [],
          position: 'Team'
        });
      }
    });
  }

  editTeam(team: Team) {
    const dialogRef = this.dialog.open(TeamDialogComponent, {
      width: '250px',
      data: { name: team.name, action: 'Edit' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        team.name = result;
      }
    });
  }
}
