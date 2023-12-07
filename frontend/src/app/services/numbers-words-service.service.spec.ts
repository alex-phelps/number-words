import { TestBed } from '@angular/core/testing';

import { NumbersWordsServiceService } from './numbers-words-service.service';

describe('NumbersWordsServiceService', () => {
  let service: NumbersWordsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumbersWordsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
