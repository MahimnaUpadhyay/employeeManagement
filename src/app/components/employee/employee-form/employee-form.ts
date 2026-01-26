import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { employeeClass } from '../../../models/employee/employeeClass';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm {
  @Output() addEmployee = new EventEmitter<employeeClass>();

  employee: employeeClass = {
    id: 0,
    name: '',
    dept: '',
    email: ''
  };

  onSubmit(){
    this.addEmployee.emit(this.employee);

    this.employee = {id:0, name: '', dept: '', email: ''};
  }
}
