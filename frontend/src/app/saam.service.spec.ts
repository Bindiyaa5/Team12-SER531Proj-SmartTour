import { TestBed } from '@angular/core/testing';

import { SaamService } from './saam.service';

describe('SaamService', () => {
  let service: SaamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
