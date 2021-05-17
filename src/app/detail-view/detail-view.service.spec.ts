import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DetailViewService } from './detail-view.service';

describe('DetailViewService', () => {
  let service: DetailViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
    });
    service = TestBed.inject(DetailViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
