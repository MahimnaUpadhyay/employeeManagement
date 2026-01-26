import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { employeeClass } from '../../../models/employee/employeeClass';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})

export class EmployeeList {
  @Input() employeeData: employeeClass[] = [];
}
