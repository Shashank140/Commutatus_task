// employee.model.ts

export interface Employee {
  isLeader: boolean;
  name: string;
  id: string;
  phone: string;
  email: string;
  teamPosition: string;
  position: string
}

export interface Team {
  name: string;
  teamPosition: string;
  members: Employee[];
}

export interface Head {
  name: string;
  position: string;
  teams: Team[];
}

export interface CEO {
  name: string;
  position: string;
  heads: Head[];
}
