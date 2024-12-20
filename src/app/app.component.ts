import { Component } from '@angular/core';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'golden-raspberry';
  isLoading$ = this.spinnerService.spinnerState$;

  constructor(private spinnerService: SpinnerService) { }

}
