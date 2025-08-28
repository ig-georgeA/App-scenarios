import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FinTechAPIService } from './fin-tech-api.service';

describe('FinTechAPIService', () => {
  let service: FinTechAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(FinTechAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
