import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-team-member-dialog',
  templateUrl: './team-member-dialog.component.html',
  styleUrls: ['./team-member-dialog.component.css']
})
export class TeamMemberDialogComponent {
  editedMember: Employee;  // Added property to hold edited data

  constructor(
    public dialogRef: MatDialogRef<TeamMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { member: Employee, isEditing: boolean }
  ) { 
    this.editedMember = { ...data.member };  // Initialize editedMember with current data
  }

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  onAddClick(): void {    
    this.dialogRef.close(this.editedMember);  // Pass the edited data back
  }

  onEditClick(): void {
    this.dialogRef.close(this.editedMember);  // Pass the edited data back
  }
}
