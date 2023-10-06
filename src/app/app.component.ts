import { Component } from '@angular/core';
import { CEO } from './models/employee.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ceoData: CEO;

  constructor(private dataService: DataService) {
    this.ceoData = this.dataService.getCEOData();
  }
}
