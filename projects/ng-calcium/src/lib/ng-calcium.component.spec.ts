import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCalciumComponent } from './ng-calcium.component';

describe('NgCalciumComponent', () => {
  let component: NgCalciumComponent;
  let fixture: ComponentFixture<NgCalciumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCalciumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCalciumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
