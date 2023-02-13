import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'wph-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  constructor(private _employeesService: EmployeesService) {

  }

  title: string = "Welcome To WebPoCHub Employees List!";
  subTitle: string = "Core Development Members Of WebPoCHub!";
  employees: Employee[];

  ngOnInit(): void {
    this._employeesService.getAllEmployees().subscribe(data => this.employees = data);
  }
}
