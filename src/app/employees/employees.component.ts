import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {Response} from '../response'

import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employee:Response[]=[
  // {
  //   id:101,
  //   name:'Ashok',
  //   salary:2000
  // },
 
  // {
  //   id:102,
  //   name:'Manoj',
  //   salary:2000
  // },
  // {
  //   id:103,
  //   name:'Yash',
  //   salary:4000
  // },
  // {
  //   id:104,
  //   name:'Akash',
  //   salary:5000
  // }
]
constructor(private employeeService:EmployeeService,private messageService:MessageService) { }
selectedEmployee:Employee
displayedColumns:string[]=['id','name','salary']
onSelect(emp: Employee):void{
  console.log('Hi i was executed',emp);
  this.selectedEmployee=emp;
}
onClear():void{
  this.selectedEmployee = null;
}

getEmployee():void{
  this.employeeService.getAllEmployees().subscribe((emp) => {
    this.employee = emp.map((emp) => ({
      id: emp.id,
      name: emp.name,
      salary: emp.salary
    }));
  });
 }

 getMessage():void{
// this.messageService.addMessage('Initiating employees')
// this.messageService.addMessage('These are the employee details');
 }

  ngOnInit(): void {
    // console.log(this.selectedEmployee)
this.getEmployee()

}
}
