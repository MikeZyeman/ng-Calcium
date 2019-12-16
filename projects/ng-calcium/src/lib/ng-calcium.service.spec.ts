import { TestBed } from '@angular/core/testing';

import { NgCalciumService } from './ng-calcium.service';

describe('NgCalciumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgCalciumService = TestBed.get(NgCalciumService);
    expect(service).toBeTruthy();
  });
});
