import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Employee } from '../employee';
import {EmployeeService} from "../employee.service";
import { MessageService } from '../message.service';


@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employees.component.html',
  styleUrls: ['./delete-employees.component.css']
})
export class DeleteEmployeesComponent implements OnInit {
  count$: Observable<number>;
 

  employee?:Employee={id:'',name:'',salary:null};
  employeeUpdate?:Employee;
  message?="";
  constructor(private empService:EmployeeService,private route:ActivatedRoute,private messageService:MessageService,private store: Store<{ count: number }>) { this.count$ = store.select('count'); }
  getEmployee():void{
    const id = this.route.snapshot.paramMap.get('id');
    this.empService.getEmployees(id).subscribe(emp=>{
      this.employee=emp;
    })
  }

  deleteEmp(id):void{
    // this.employeeUpdate=emp
    this.empService.deleteEmployee(id).subscribe((data)=>{
      console.log(data);
      this.messageService.addMessage(`Deleted employee with id ${id} successfully!`);
    })
  }

  ngOnInit(): void {
    this.getEmployee();
  }

}