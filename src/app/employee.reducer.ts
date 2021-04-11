import { createReducer, on } from '@ngrx/store';
import { addEmployee, removeEmployee, updateEmployee } from './employee.action';
import { Employee } from './employee';
import { state } from '@angular/animations';
export const initialState: Employee[] = [];

const _employeesReducer = createReducer(
  initialState,
  on(addEmployee, (state, { employee }) => [...state, employee])
)

export function employeeReducer(state, action) {
  return _employeesReducer(state, action);
}