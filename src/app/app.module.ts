import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { MessageComponent } from './message/message.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AppRoutingModule } from './app-routing.module';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { FormsModule } from '@angular/forms';
import { DeleteEmployeesComponent } from './delete-employees/delete-employees.component';
import { UpdateEmployeesComponent } from './update-employees/update-employees.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './counter.reducer';
import { MyCounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    MessageComponent,
    EmployeeDetailsComponent,
    AddEmployeesComponent,
    DeleteEmployeesComponent,
    UpdateEmployeesComponent,
    MyCounterComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    StoreModule.forRoot({ count: counterReducer })
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
