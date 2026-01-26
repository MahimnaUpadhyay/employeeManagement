import { inject, Injectable } from '@angular/core';
import { getEmployee, addEmployee, updateEmployee, deleteEmployee } from '../../utility/API_ENDPOINTS/employeeEndpoints';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { employeeClass } from '../../models/employee/employeeClass';

@Injectable({
  providedIn: 'root',
})

export class EmployeeService {

  // API ENDPOINTS
  private getEndpoint = getEmployee;
  private addEndpoint = addEmployee;
  private updateEndpoint = updateEmployee;
  private deleteEndpoint = deleteEmployee;

  // inject httpclient
  private httpClient = inject(HttpClient);

  // method for getting the employee
  getEmployeeList(): Observable<employeeClass[]> {
    console.log("employeelist: ", this.httpClient.get<employeeClass[]>(this.getEndpoint));
    return this.httpClient.get<employeeClass[]>(this.getEndpoint);
  }

  // method for adding the employee
  addEmployee(employeeData: employeeClass): Observable<employeeClass> {
    return this.httpClient.post<employeeClass>(this.addEndpoint, employeeData);
  }

  // method for updating the employee
  updateEmployee(employeeData: employeeClass, employeeID: employeeClass["id"]): Observable<employeeClass[]> {
    return this.httpClient.put<employeeClass[]>(this.updateEndpoint, employeeData);
  }

  // method for deleting the employee
  deleteEmployee(employeeData: employeeClass, employeeID: employeeClass["id"]): Observable<employeeClass[]> {
    return this.httpClient.put<employeeClass[]>(this.deleteEndpoint, employeeData);
  }

}
