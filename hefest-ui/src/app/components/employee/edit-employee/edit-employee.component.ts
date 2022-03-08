import { Component, OnInit, Input } from '@angular/core'
import { SharedService } from '../../../services/shared.service'
import { Employee } from '../../../models/Employee'
import { Department } from '../../../models/Department'

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  constructor(private service: SharedService) {}

  @Input() employee: Employee | undefined
  employeeId: number | undefined = 0
  employeeName: string = ''
  departmentName: string = ''
  createdAt: string = ''
  updatedAt: string | undefined = ''
  salary: number | undefined = 0
  job: string | undefined = ''
  lastName: string | undefined = ''
  suspended: boolean | undefined = false
  notes: string | undefined = ''

  departmentsList: Department[] = []

  ngOnInit(): void {
    this.loadDepartmentsList()
    if (!this.employee) return
    this.employeeId = this.employee.id
    this.employeeName = this.employee.name
    this.departmentName = this.employee.department
    this.createdAt = this.employee.createdAt
    this.updatedAt = this.employee.updatedAt
    this.salary = this.employee.salary
    this.job = this.employee.job
    this.lastName = this.employee.lastName
    this.suspended = this.employee.suspended
    this.notes = this.employee.notes
  }

  /**
   * loadDepartmentsList
   * @description Get all the departments
   */
  loadDepartmentsList() {
    this.service.getDepartmentList().subscribe((data) => {
      this.departmentsList = data
    })
  }
  /**
   * addEmployee
   * @description Creates a new employee
   */
  addEmployee() {
    const employee: Employee = {
      name: this.employeeName,
      department: this.departmentName,
      createdAt: this.createdAt,
      updatedAt: new Date().toISOString(),
      salary: this.salary,
      job: this.job,
      lastName: this.lastName,
      suspended: this.suspended,
      notes: this.notes
    }
    this.service.addEmployee(employee).subscribe((data) => {
      alert(JSON.stringify(data))
      this.employeeId = 0
      this.employeeName = ''
      this.departmentName = ''
      this.createdAt = ''
      this.updatedAt = ''
      this.salary = 0
      this.job = ''
      this.lastName = ''
      this.suspended = false
      this.notes = ''
    })
  }

  /**
   * updateEmployee
   * @description Updates an existing employee
   */
  updateEmployee() {
    const employee: Employee = {
      id: this.employeeId,
      name: this.employeeName,
      department: this.departmentName,
      createdAt: this.createdAt,
      updatedAt: new Date().toISOString(),
      salary: this.salary,
      job: this.job,
      lastName: this.lastName,
      suspended: this.suspended,
      notes: this.notes
    }
    this.service.updateEmployee(employee).subscribe((data) => {
      alert(JSON.stringify(data))
      this.employeeId = 0
      this.employeeName = ''
      this.departmentName = ''
      this.createdAt = ''
      this.updatedAt = ''
      this.salary = 0
      this.job = ''
      this.lastName = ''
      this.suspended = false
      this.notes = ''
    })
  }
}
