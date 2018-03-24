import {inject, TestBed} from '@angular/core/testing';

import {TierListService} from './tier-list.service';

describe('TierListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TierListService]
    });
  });

  it('should be created', inject([TierListService], (service: TierListService) => {
    expect(service).toBeTruthy();
  }));
});
