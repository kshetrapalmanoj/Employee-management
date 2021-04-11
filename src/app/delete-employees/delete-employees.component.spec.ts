import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeesComponent } from './delete-employees.component';

describe('DeleteEmployeesComponent', () => {
  let component: DeleteEmployeesComponent;
  let fixture: ComponentFixture<DeleteEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
