import { Component, OnInit } from '@angular/core'
import { SharedService } from '../../../services/shared.service'
import { Department } from '../../../models/Department'

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.css']
})
export class ShowDepartmentComponent implements OnInit {
  constructor(private service: SharedService) {}
  DepartmentList: Department[] = []

  ModalTitle = ''
  ActivateAddEditDepartmentComponent: boolean = false
  department: Department | undefined

  DepartmentIdFilter = ''
  DepartmentNameFilter = ''
  DepartmentListWithoutFilter: Department[] = []

  ngOnInit(): void {
    this.refreshDepList()
  }

  /**
   * addClick
   * @description Show the department modal for add department
   */
  addClick() {
    this.department = {
      id: 0,
      name: ''
    }
    this.ModalTitle = 'Create department'
    this.ActivateAddEditDepartmentComponent = true
  }

  /**
   * editClick
   * @param item Department object to edit
   * @description Show the modal to edit a department
   */
  editClick(item: Department) {
    this.department = item
    this.ModalTitle = 'Edit department'
    this.ActivateAddEditDepartmentComponent = true
  }

  /**
   * deleteClick
   * @param item Department object to delete
   * @description Deletes a department
   */
  deleteClick(item: Department) {
    if (!item.id) return
    if (confirm('Are you sure you want to delete this department?')) {
      this.service.deleteDepartment(item.id).subscribe((data) => {
        alert(JSON.stringify(data))
        this.refreshDepList()
      })
    }
  }

  /**
   * closeClick
   * @description Close the department modal
   */
  closeClick() {
    this.ActivateAddEditDepartmentComponent = false
    this.refreshDepList()
  }

  /**
   * refreshDepList
   * @description Get all the departments from the server
   * @returns Department[]
   */
  refreshDepList() {
    this.service.getDepartmentList().subscribe((data) => {
      this.DepartmentList = data
      this.DepartmentListWithoutFilter = data
    })
  }

  /**
   * FilterFn
   * @description Filter the department list
   * @returns Department[] filtered list
   */
  FilterFn() {
    const DepartmentIdFilter = this.DepartmentIdFilter
    const DepartmentNameFilter = this.DepartmentNameFilter
    this.DepartmentList = this.DepartmentListWithoutFilter.filter(function (
      el
    ) {
      if (!el?.id) return
      return (
        el.id
          .toString()
          .toLowerCase()
          .includes(DepartmentIdFilter.toString().trim().toLowerCase()) &&
        el.name
          .toString()
          .toLowerCase()
          .includes(DepartmentNameFilter.toString().trim().toLowerCase())
      )
    })
  }

  /**
   * sortResult
   * @description Sort the department list
   * @param by property to sort by
   * @param asc ascending or descending
   * @returns Department[] sorted list
   */
  sortResult(by: string, asc: boolean) {
    this.DepartmentList = this.DepartmentListWithoutFilter.sort(function (
      a: any,
      b: any
    ) {
      if (asc) {
        return a[by] > b[by] ? 1 : a[by] < b[by] ? -1 : 0
      } else {
        return b[by] > a[by] ? 1 : b[by] < a[by] ? -1 : 0
      }
    })
  }
}
