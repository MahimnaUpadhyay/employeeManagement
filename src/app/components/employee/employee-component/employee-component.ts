import { Component, inject, OnInit } from '@angular/core';
import { EmployeeList } from '../employee-list/employee-list';
import { EmployeeForm } from '../employee-form/employee-form';
import { employeeClass } from '../../../models/employee/employeeClass';
import { EmployeeService } from '../../../service/employee/employee-service';

@Component({
  selector: 'app-employee-component',
  imports: [EmployeeList, EmployeeForm],
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css',
})

export class EmployeeComponent implements OnInit {

  employees: employeeClass[] = [];

  private employeeService = inject(EmployeeService);

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployeeList().subscribe({
      next: (data) => this.employees = data,
      error: (err) => console.log("Error in get method of employee", err)
    });
  }

  onAddEmployee(employee: employeeClass){
    this.employeeService.addEmployee(employee).subscribe({
      next: (newEmployee) => {
        this.employees = [...this.employees, newEmployee];
      },
      error: (err) => console.log("Error in push method of employee", err)
    });
  }

}
