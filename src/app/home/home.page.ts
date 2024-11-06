import { Component , OnInit } from '@angular/core';
import { Employee } from '../employee/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  employees: Employee[] = [
    {
      "id": 0,
      "name": "黒田 繁樹",
      "number": "090-4564-9971",
      "departmentName": "総務部"
    },
    {
      "id": 0,
      "name": "大崎 義将",
      "number": "090-4571-9745",
      "departmentName": "人事部"
    },
    {
      "id": 0,
      "name": "川原 恵志",
      "number": "090-8756-4123",
      "departmentName": "事業部"
    },
    {
      "id": 0,
      "name": "古賀 督彦",
      "number": "090-1244-7451",
      "departmentName": "開発部"
    },
    {
      "id": 0,
      "name": "田中 由枝",
      "number": "090-7893-2563",
      "departmentName": "営業部"
    },
    {
      "id": 0,
      "name": "亀井 康伸",
      "number": "090-9654-3257",
      "departmentName": "経理部"
    },
    {
      "id": 0,
      "name": "溝口 大夢",
      "number": "090-4682-5241",
      "departmentName": "総務部"
    },
    {
      "id": 0,
      "name": "山中 一智",
      "number": "090-3214-6654",
      "departmentName": "人事部"
    }
  ];
  constructor(private employeeService: EmployeeService) {}
  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
      //this.employees = data;
    });
  }
}
