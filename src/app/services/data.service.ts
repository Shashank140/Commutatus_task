import { Injectable } from '@angular/core';
import { CEO } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private ceoData: CEO = {
    name: 'John Doe (CEO)',
    position: 'CEO',
    
    heads: [
      {
        name: 'HR Head',
        position: 'Head of Department',
        teams: [
          {
            name: 'HR Team 1',
            position: 'Team',
            members: [
              {
                name: 'HR Team Leader 1',
                isLeader: true,
                position: 'Leader',
                id: 'HR001',
                phone: '123456789',
                email: 'hrleader1@example.com',
                team: 'HR Team 1'
              },
              {
                name: 'HR Team Member 1',
                isLeader: false,
                position: 'Member',
                id: 'HRM001',
                phone: '987654321',
                email: 'hrmember1@example.com',
                team: 'HR Team 1'
              }
            ]
          }
        ]
      },
      {
        name: 'Head of Engineering',
        position: 'Head of Department',
        teams: [
          {
            name: 'Team 1',
            position: 'Team',
            members: [
              {
                name: 'Team Leader 1',
                isLeader: true,
                position: 'Leader',
                id: 'ER001',
                phone: '123456789',
                email: 'erleader1@example.com',
                team: 'Team 1'
              },
              {
                name: 'Er Team Member 1',
                isLeader: false,
                position: 'Member',
                id: 'ERM001',
                phone: '987654323',
                email: 'ermember1@example.com',
                team: 'Team 1'
              }
            ]
          }
        ]
      },
      {
        name: 'Head of Design',
        position: 'Head of Department',
        teams: [
          {
            name: 'Team Design 1',
            position: 'Team',
            members: [
              {
                name: 'Team Leader Design 1',
                isLeader: true,
                position: 'Leader',
                id: 'DR001',
                phone: '123456789',
                email: 'drleader1@example.com',
                team: 'Team Design 1'
              },
              {
                name: 'Design Team Member 1',
                isLeader: false,
                position: 'Member',
                id: 'DRM001',
                phone: '987654321',
                email: 'drmember1@example.com',
                team: 'Team Design 1'
              },
              {
                name: 'Design Team Member 2',
                isLeader: false,
                position: 'Member',
                id: 'DRM002',
                phone: '987654323',
                email: 'drmember2@example.com',
                team: 'Team Design 1'
              }
            ]
          }
        ]
      }
    ]
  };

  getCEOData(): CEO {
    return this.ceoData;
  }

  updateCEOData(newData: CEO): void {
    this.ceoData = newData;
  }

  constructor() { }
}


