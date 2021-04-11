import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Employee } from '../employee';
import {EmployeeService} from "../employee.service";
import { MessageService } from '../message.service';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employees.component.html',
  styleUrls: ['./update-employees.component.css']
})
export class UpdateEmployeesComponent implements OnInit {
  employee?:Employee={id:'',name:'',salary:null};
  employeeUpdate?:Employee;
  message?="";
  constructor(private empService:EmployeeService,private route:ActivatedRoute,private messageService:MessageService) { }
  getEmployee():void{
    const id = this.route.snapshot.paramMap.get('id');
    this.empService.getEmployees(id).subscribe(emp=>{
      this.employee=emp;
    })
  }

  updateEmp(emp):void{
    this.employeeUpdate=emp
    this.empService.updateEmployee(this.employeeUpdate).subscribe((data)=>{
      console.log(data);
      this.messageService.addMessage(`Details of employee with id ${emp.id} updated successfully`);
    })
  }

  ngOnInit(): void {
    this.getEmployee();
  }

}