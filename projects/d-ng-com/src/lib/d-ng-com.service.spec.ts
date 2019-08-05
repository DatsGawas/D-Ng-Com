import { TestBed } from '@angular/core/testing';

import { DNgComService } from './d-ng-com.service';

describe('DNgComService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DNgComService = TestBed.get(DNgComService);
    expect(service).toBeTruthy();
  });
});
