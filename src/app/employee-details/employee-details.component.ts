import { Component, OnInit,Input } from '@angular/core';
import {Location} from '@angular/common';
import {Employee} from '../employee';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../employee.service';
import {EmployeesComponent} from '../employees/employees.component';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
@Input() employee?:Employee

  constructor(private route:ActivatedRoute,private empService:EmployeeService,private location:Location ) { }



  getEmployee():void
  {
    const id=this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.empService.getEmployees(id).subscribe((emp)=>{
      this.employee =emp
       
    })
  }
  ngOnInit(): void {
    this.getEmployee()
  }

}
