import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CEOComponent } from './components/ceo/ceo.component';
import { HeadComponent } from './components/head/head.component';
import { TeamComponent } from './components/team/team.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { TeamMemberDialogComponent } from './components/team-member-dialog/team-member-dialog.component';
import { TeamDialogComponent } from './components/team-dialog/team-dialog.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    CEOComponent,
    HeadComponent,
    TeamComponent,
    EmployeeComponent,
    TeamMemberDialogComponent,
    TeamDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
