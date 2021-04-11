import { addEmployee } from './../employee.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {
  count$: Observable<number>;
 
  

  constructor(private employeeService: EmployeeService,private router:Router,private messageService:MessageService,private store: Store<{ count: number }>) { this.count$ = store.select('count'); }
  employee?:Employee={id:'',name:'',salary:null};
  
submit(emp): void {
  this.employee = emp;
  this.employeeService.addEmployee(this.employee).subscribe((data) => {
    console.log(data);
    this.messageService.addMessage(`Succesfully added a new employee ${emp.name}`);
  // this.store.dispatch(addEmployee({ employee: emp }))
   });
  }


  
  ngOnInit(): void {
    
    
  }


}
