import { Component, OnInit } from '@angular/core'
import { SharedService } from '../../../services/shared.service'
import { Employee } from '../../../models/Employee'

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {
  constructor(private service: SharedService) {}
  EmployeesList: Employee[] = []

  ModalTitle = ''
  ActivateAddEditEmployeeComponent: boolean = false
  employee: Employee | undefined

  // DepartmentListWithoutFilter:Department[] = []
  // DepartmentIdFilter = ''
  // DepartmentNameFilter = ''

  ngOnInit(): void {
    this.refreshEmpList()
  }

  /**
   * addClick
   * @description Show the modal for add an employee
   */
  addClick() {
    this.employee = {
      id: 0,
      name: '',
      department: '',
      createdAt: ''
    }
    this.ModalTitle = 'Create employee'
    this.ActivateAddEditEmployeeComponent = true
  }

  /**
   * editClick
   * @param item Employee object to edit
   * @description Show the modal to edit an employee
   */
  editClick(item: Employee) {
    this.employee = item
    this.ModalTitle = 'Edit employee'
    this.ActivateAddEditEmployeeComponent = true
  }

  /**
   * deleteClick
   * @param item Employee object to delete
   * @description Deletes an employee
   */
  deleteClick(item: Employee) {
    if (!item.id) return
    if (confirm('Are you sure you want to delete this employee?')) {
      this.service.deleteEmployee(item.id).subscribe((data) => {
        alert(JSON.stringify(data))
        this.refreshEmpList()
      })
    }
  }

  /**
   * closeClick
   * @description Close the employee modal
   */
  closeClick() {
    this.ActivateAddEditEmployeeComponent = false
    this.refreshEmpList()
  }

  /**
   * refreshEmpList
   * @description Get all the employees from the server
   * @returns Employees[]
   */
  refreshEmpList() {
    this.service.getEmployeeList().subscribe((data) => {
      this.EmployeesList = data
      // this.DepartmentListWithoutFilter = data
    })
  }
}
