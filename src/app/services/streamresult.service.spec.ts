import { TestBed, inject } from '@angular/core/testing';

import { StreamresultService } from './streamresult.service';

describe('StreamresultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StreamresultService]
    });
  });

  it('should be created', inject([StreamresultService], (service: StreamresultService) => {
    expect(service).toBeTruthy();
  }));
});
