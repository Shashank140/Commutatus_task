import { Injectable } from '@angular/core';
import { CEO } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private ceoData: CEO = {
    name: 'Shashank Jaiswal',
    position: 'CEO',
    
    heads: [
      {
        name: 'Tom Holland',
        position: 'Head of staff/HR',
        teams: [
          {
            name: 'HR Team 1',
            teamPosition: 'Head of staff/HR',
            members: [
              {
                name: 'HR Team Leader 1',
                isLeader: true,
                position: 'Leader',
                id: 'HR001',
                phone: '123456789',
                email: 'hrleader1@example.com',
                teamPosition: 'Head of staff/HR'
              },
              {
                name: 'HR Team Member 1',
                isLeader: false,
                position: 'Member',
                id: 'HRM001',
                phone: '987654321',
                email: 'hrmember1@example.com',
                teamPosition: 'Head of staff/HR'
              }
            ]
          },
          {
            name: 'HR Team 2',
            teamPosition: 'Head of staff/HR',
            members: [
              {
                name: 'HR Team Leader 2',
                isLeader: true,
                position: 'Leader',
                id: 'HR021',
                phone: '123456789',
                email: 'hrleader2@example.com',
                teamPosition: 'Head of staff/HR'
              },
              {
                name: 'HR Team Member 4',
                isLeader: false,
                position: 'Member',
                id: 'HRM024',
                phone: '9876348761',
                email: 'hrmember4@example.com',
                teamPosition: 'Head of staff/HR'
              }
            ]
          }
        ]
      },
      {
        name: 'Robert Downey',
        position: 'Head of engineering',
        teams: [
          {
            name: 'Engineering Team 1',
            teamPosition: 'Head of engineering',
            members: [
              {
                name: 'Er. Team Leader 1',
                isLeader: true,
                position: 'Leader',
                id: 'ER001',
                phone: '123456789',
                email: 'erleader1@example.com',
                teamPosition: 'Head of engineering'
              },
              {
                name: 'Er. Team Member 1',
                isLeader: false,
                position: 'Member',
                id: 'ERM001',
                phone: '987654323',
                email: 'ermember1@example.com',
                teamPosition: 'Head of engineering'
              },
              {
                name: 'Er. Team Member 2',
                isLeader: false,
                position: 'Member',
                id: 'ERM002',
                phone: '198264530',
                email: 'ermember2@example.com',
                teamPosition: 'Head of engineering'
              }
            ]
          },
          {
            name: 'Engineering Team 2',
            teamPosition: 'Head of engineering',
            members: [
              {
                name: 'Er. Team Leader 2',
                isLeader: true,
                position: 'Leader',
                id: 'ER021',
                phone: '123456789',
                email: 'erleader2@example.com',
                teamPosition: 'Head of engineering'
              },
              {
                name: 'Er. Team Member 4',
                isLeader: false,
                position: 'Member',
                id: 'ERM024',
                phone: '987654323',
                email: 'ermember4@example.com',
                teamPosition: 'Head of engineering'
              },
              {
                name: 'Er. Team Member 5',
                isLeader: false,
                position: 'Member',
                id: 'ERM025',
                phone: '198264530',
                email: 'ermember5@example.com',
                teamPosition: 'Head of engineering'
              }
            ]
          }
        ]
      },
      {
        name: 'Chris Evans',
        position: 'Head of Design',
        teams: [
          {
            name: 'Design Team 1',
            teamPosition: 'Head of Design',
            members: [
              {
                name: 'Design Team Leader 1',
                isLeader: true,
                position: 'Leader',
                id: 'DR001',
                phone: '123456789',
                email: 'drleader1@example.com',
                teamPosition: 'Head of Design'
              },
              {
                name: 'Design Team Member 1',
                isLeader: false,
                position: 'Member',
                id: 'DRM001',
                phone: '987654321',
                email: 'drmember1@example.com',
                teamPosition: 'Head of Design'
              },
              {
                name: 'Design Team Member 2',
                isLeader: false,
                position: 'Member',
                id: 'DRM002',
                phone: '987654323',
                email: 'drmember2@example.com',
                teamPosition: 'Head of Design'
              }
            ]
          },
          {
            name: 'Design Team 2',
            teamPosition: 'Head of Design',
            members: [
              {
                name: 'Design Team Leader 2',
                isLeader: true,
                position: 'Leader',
                id: 'DR011',
                phone: '123456789',
                email: 'drleader2@example.com',
                teamPosition: 'Head of Design'
              },
              {
                name: 'Design Team Member 4',
                isLeader: false,
                position: 'Member',
                id: 'DRM014',
                phone: '987654321',
                email: 'drmember4@example.com',
                teamPosition: 'Head of Design'
              },
              {
                name: 'Design Team Member 5',
                isLeader: false,
                position: 'Member',
                id: 'DRM015',
                phone: '987654323',
                email: 'drmember5@example.com',
                teamPosition: 'Head of Design'
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


