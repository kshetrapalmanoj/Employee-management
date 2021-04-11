import { DeleteEmployeesComponent } from './delete-employees/delete-employees.component';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';
import {AddEmployeesComponent} from './add-employees/add-employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
 import {UpdateEmployeesComponent} from './update-employees/update-employees.component';
// import {EmployeeDetailsComponent} from './employee-details/employee-details.component';

const routes:Routes=[
  {path:"employeeList",component:EmployeesComponent,data:{title:'Employee List'}},
  {path:"addEmployee",component:AddEmployeesComponent,data:{title:'Add Employee'}},
  {path:"employeeDetail/:id",component:EmployeeDetailsComponent},
   {path:"updateEmployee/:id",component:UpdateEmployeesComponent,data:{title:'Update Employee'}},
  {path:"deleteEmployee/:id",component:DeleteEmployeesComponent,data:{title:'Delete Employee'}},
  {path:'',redirectTo:'/employeeList',pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
