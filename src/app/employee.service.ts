import { Injectable } from '@angular/core';
import {Employee} from './employee';
import {Response} from './response';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url='http://localhost:3000/employee'

  httpOptions={headers:new HttpHeaders({'Content-Type': 'application/json'})}

  constructor(private http:HttpClient) { }
  getAllEmployees():Observable <Response[]>
    {
    return this.http.get<Response[]>(this.url,this.httpOptions)
  
    }
    
   getEmployees(id:string):Observable<Response>
      {
        // console.log('in get employee')
        const newUrl=`http://localhost:3000/employee/${id}`
        return this.http.get<Response>(newUrl, this.httpOptions)
      }

      addEmployee(employee: Employee): Observable<Response> {
       
        const body = {
          id: employee.id,
          name: employee.name,
          salary: employee.salary,
        };
    
        return this.http.post<Response>(this.url, body,this.httpOptions);
      }
   
      deleteEmployee(id):Observable<Response>{
        const deleteUrl = `${this.url}/${id}`
        return this.http.delete<Response>(deleteUrl,this.httpOptions);
      }
      
      updateEmployee(emp:Employee):Observable<Response>{
        const updateUrl = `${this.url}/${emp.id}`
        return this.http.put<Response>(updateUrl,emp,this.httpOptions);
      }
     
      
  }