import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  showSpinner() {
    throw new Error('Method not implemented.');
  }
  hideSpinner() {
    throw new Error('Method not implemented.');
  }
  private spinnerSubject = new Subject<boolean>();
  spinnerState$ = this.spinnerSubject.asObservable();
  isLoading$: any;

  show(): void {
    this.spinnerSubject.next(true);
  }

  hide(): void {
    this.spinnerSubject.next(false);
  }
}
