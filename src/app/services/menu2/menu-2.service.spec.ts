import { TestBed } from '@angular/core/testing';

import { Menu2Service } from './menu-2.service';

describe('Menu2Service', () => {
  let service: Menu2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Menu2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
