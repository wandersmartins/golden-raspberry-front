import { TestBed } from '@angular/core/testing';
import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get spinner visibility', () => {
    service.showSpinner();
    expect(service.isLoading$.getValue()).toBeTrue();

    service.hideSpinner();
    expect(service.isLoading$.getValue()).toBeFalse();
  });
});
