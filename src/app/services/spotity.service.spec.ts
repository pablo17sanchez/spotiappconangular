/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpotityService } from './spotity.service';

describe('Service: Spotity', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotityService]
    });
  });

  it('should ...', inject([SpotityService], (service: SpotityService) => {
    expect(service).toBeTruthy();
  }));
});
