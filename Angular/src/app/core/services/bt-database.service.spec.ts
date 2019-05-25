import { TestBed } from '@angular/core/testing';

import { BtDatabaseService } from './bt-database.service';

describe('BtDatabaseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BtDatabaseService = TestBed.get(BtDatabaseService);
    expect(service).toBeTruthy();
  });
});
