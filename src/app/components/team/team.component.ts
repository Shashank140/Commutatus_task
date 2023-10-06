import { Component, Input } from '@angular/core';
import { Team, Employee } from '../../models/employee.model';
import { MatDialog } from '@angular/material/dialog';
import { TeamMemberDialogComponent } from '../team-member-dialog/team-member-dialog.component';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {
  @Input() team: Team;
  allTeams: Team[] = this.teamService.getAllTeams();
  isPanelOpen = false;
  searchText: string = '';
  filteredLeader: Employee;
  filteredMembers: Employee[] = [];
  newMember: Employee | null = null;

  constructor(public dialog: MatDialog, private teamService: TeamService) { }

  togglePanel() {
    this.isPanelOpen = !this.isPanelOpen;
    this.filteredMembers = this.filterMembers(this.searchText);
  }

  searchTeamMembers() {
    this.filteredMembers = this.filterMembers(this.searchText);
  }

  private filterMembers(searchText: string): Employee[] {
    return this.team.members.filter(member =>
      member.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  addTeamMember() {
    this.newMember = { name: '',isLeader: false, position: '', id: '', phone: '', email: '', team: '' };
    this.openDialog(false);  // Pass false to indicate not editing
  }

  editTeamMember(member: Employee) {
    this.newMember = { ...member };
    this.openDialog(true);  // Pass true to indicate editing
  }

  promoteTeamMember(member: Employee) {
    // Find the index of the existing 'Leader'
    const existingLeaderIndex = this.team.members.findIndex(m => m.position === 'Leader');
  
    // If an existing 'Leader' is found, remove them
    if (existingLeaderIndex !== -1) {
      this.team.members.splice(existingLeaderIndex, 1);
      this.filteredMembers.splice(existingLeaderIndex, 1);
    }
  
    // Find the index of the member to be promoted to 'Leader'
    const newLeaderIndex = this.team.members.findIndex(m => m === member);
  
    // If the member to be promoted is found, promote them to 'Leader' and move to index 0
    if (newLeaderIndex !== -1) {
      this.team.members[newLeaderIndex].isLeader = true;
      this.team.members[newLeaderIndex].position = 'Leader';
      this.filteredMembers[newLeaderIndex].isLeader = true;
      this.filteredMembers[newLeaderIndex].position = 'Leader';
  
      // Move the promoted member to index 0
      const promotedMember = this.team.members.splice(newLeaderIndex, 1)[0];
      this.team.members.unshift(promotedMember);
  
      const promotedFilteredMember = this.filteredMembers.splice(newLeaderIndex, 1)[0];
      this.filteredMembers.unshift(promotedFilteredMember);
    }
  }
  
  


  deleteTeamMember(member: Employee) {
    const index = this.team.members.findIndex(m => m.id === member.id);
    let onlyMembers = this.team.members.filter(m => !m.isLeader)
    
    if (index !== -1 && ( this.team.members[index].isLeader==true || onlyMembers.length > 1 )) {
      this.team.members.splice(index, 1);
      const filteredIndex = this.filteredMembers.findIndex(m => m.id === member.id);
      if (filteredIndex !== -1) {
        this.filteredMembers.splice(filteredIndex, 1);
      }
    }
    else {
      alert('Team requires at least one member');
    }
  }

  openDialog(isEditing: boolean): void {
    const dialogRef = this.dialog.open(TeamMemberDialogComponent, {
      width: '350px',
      data: {
        member: this.newMember,
        isEditing: isEditing  // Set isEditing based on the parameter
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && isEditing) {
        this.saveTeamMember(result);
      } else if (result && !isEditing) {
        this.saveTeamMember(result);
      }
      this.newMember = null;
    });
  }

  saveTeamMember(member: Employee) {
    if (this.newMember.name == '' && this.newMember.id == '' && this.newMember.email == '' && this.newMember.phone == '') {
      // Adding a new member
      this.team.members.push(member);
      this.filteredMembers.push(member);
    } else {
      // Editing an existing member
      const index = this.team.members.findIndex(m => m.id === member.id);
      if (index !== -1) {
        this.team.members[index] = member;
        const filteredIndex = this.filteredMembers.findIndex(m => m.id === member.id);
        if (filteredIndex !== -1) {
          this.filteredMembers[filteredIndex] = member;
        }
      }
    }
  }

  moveTeamMemberToAnotherTeam(newMember: Employee, targetTeam: Team) {
    // Check if the move is allowed
    if (!this.isMoveAllowed(newMember, targetTeam)) {
      alert('Move not allowed. Employee from HR cannot be moved to Design team.');
      return;
    }
  
    // Remove member from the current team
    const index = this.team.members.indexOf(newMember);
    if (index !== -1) {
      this.team.members.splice(index, 1);
      this.filteredMembers.splice(index, 1);
    }
  
    // Add member to the target team
    targetTeam.members.push(newMember);
    this.filteredMembers.push(newMember);
  }
  
  
  private isMoveAllowed(newMember: Employee, targetTeam: Team): boolean {
    const disallowedMoves = {
      'HR': ['Design'],
      'Design': ['HR']
    };
  
    return !disallowedMoves[newMember.team] || disallowedMoves[newMember.team].indexOf(targetTeam.name) === -1;
  }
  
}
