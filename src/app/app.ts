import { Component, signal } from '@angular/core';
import { EmployeeComponent } from './components/employee/employee-component/employee-component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [EmployeeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('employeeManagement');
}
