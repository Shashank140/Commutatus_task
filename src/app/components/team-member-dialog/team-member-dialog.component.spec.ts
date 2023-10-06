import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberDialogComponent } from './team-member-dialog.component';

describe('TeamMemberDialogComponent', () => {
  let component: TeamMemberDialogComponent;
  let fixture: ComponentFixture<TeamMemberDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamMemberDialogComponent]
    });
    fixture = TestBed.createComponent(TeamMemberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
