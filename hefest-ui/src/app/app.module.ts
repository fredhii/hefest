import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ShowDepartmentComponent } from './components/department/show-department/show-department.component'
import { DepartmentComponent } from './components/department/department.component'
import { EditDepartmentComponent } from './components/department/edit-department/edit-department.component'
import { EmployeeComponent } from './components/employee/employee.component'
import { ShowEmployeeComponent } from './components/employee/show-employee/show-employee.component'
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ShowDepartmentComponent,
    DepartmentComponent,
    EditDepartmentComponent,
    EmployeeComponent,
    ShowEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
