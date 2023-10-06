import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-team-dialog',
  templateUrl: './team-dialog.component.html',
  styleUrls: ['./team-dialog.component.css']
})
export class TeamDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TeamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string,  action: string }
  ) { }

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  onSaveClick(): void {
    this.dialogRef.close(this.data.name);
  }
}
