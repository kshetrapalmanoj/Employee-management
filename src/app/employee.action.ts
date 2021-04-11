import { createAction, props } from '@ngrx/store';
import { Employee } from './employee';

export const addEmployee = createAction('Add Employee', props<{employee: Employee}>());
export const updateEmployee = createAction('Update Employee');
export const removeEmployee = createAction('Remove Employee');
