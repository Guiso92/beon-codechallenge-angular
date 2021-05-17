import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ListViewService } from './list-view.service';

describe('ListViewService', () => {
  let service: ListViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
    });
    service = TestBed.inject(ListViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
