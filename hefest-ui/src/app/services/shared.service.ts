import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Department } from '../models/Department'
import { Employee } from '../models/Employee'
// TODO: Import config to replace hardcoded url
// import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly API_URL = 'https://localhost:44327/'

  constructor(private http: HttpClient) {}

  // ==============================================================
  // Department controller
  // ==============================================================
  getDepartmentList(): Observable<Department[]> {
    return this.http.get(this.API_URL + 'Department') as Observable<
      Department[]
    >
  }

  addDepartment(department: Department): Observable<any> {
    return this.http.post(this.API_URL + 'Department', department)
  }

  updateDepartment(department: Department): Observable<any> {
    return this.http.put(
      this.API_URL + `Department/${department.id}`,
      department
    )
  }

  deleteDepartment(id: number): Observable<any> {
    return this.http.delete(this.API_URL + 'Department/' + id)
  }

  // ==============================================================
  // Employee controller
  // ==============================================================
  getEmployeeList(): Observable<Employee[]> {
    return this.http.get(this.API_URL + 'Employee') as Observable<Employee[]>
  }

  addEmployee(employee: Employee): Observable<any> {
    return this.http.post(this.API_URL + 'Employee', employee)
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.API_URL + `Employee/${employee.id}`, employee)
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(this.API_URL + 'Employee/' + id)
  }
}
