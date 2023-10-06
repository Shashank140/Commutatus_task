import { Injectable } from '@angular/core';
import { Team } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private allTeams: Team[] = [];

  constructor() { }

  setAllTeams(teams: Team[]) {
    this.allTeams = teams;
  }

  getAllTeams(): Team[] {
    return this.allTeams;
  }
}
