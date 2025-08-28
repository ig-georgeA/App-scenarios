import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NorthwindAPIIGService } from './northwind-apiig.service';

describe('NorthwindAPIIGService', () => {
  let service: NorthwindAPIIGService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(NorthwindAPIIGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
