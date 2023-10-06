// employee.model.ts

export interface Employee {
  isLeader: boolean;
  name: string;
  id: string;
  phone: string;
  email: string;
  team: string;
  position: string
}

export interface Team {
  name: string;
  position: string;
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
