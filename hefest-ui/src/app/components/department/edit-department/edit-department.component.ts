import { Component, OnInit, Input } from '@angular/core'
import { Department } from '../../../models/Department'
import { SharedService } from '../../../services/shared.service'

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
  constructor(private service: SharedService) {}

  @Input() department: Department | undefined
  departmentId: number | undefined = 0
  departmentName: string = ''

  ngOnInit(): void {
    if (!this.department) return
    this.departmentId = this.department.id
    this.departmentName = this.department.name
  }

  /**
   * addDepartment
   * @description Creates a new department
   */
  addDepartment() {
    const department: Department = {
      name: this.departmentName
    }
    this.service.addDepartment(department).subscribe((data) => {
      alert(JSON.stringify(data))
      this.departmentId = 0
      this.departmentName = ''
    })
  }

  /**
   * updateDepartment
   * @description Updates an existing department
   */
  updateDepartment() {
    const department: Department = {
      id: this.departmentId,
      name: this.departmentName
    }
    this.service.updateDepartment(department).subscribe((data) => {
      alert(JSON.stringify(data))
      this.departmentId = 0
      this.departmentName = ''
    })
  }
}
