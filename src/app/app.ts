import { Component, signal } from '@angular/core';
import { DisplayWheather } from './components/display-wheather/display-wheather';
import { FormWheater } from './components/form-wheater/form-wheater';
import { HistoricalComponent } from './components/historical-component/historical-component';


@Component({
  selector: 'app-root',
  imports: [DisplayWheather, FormWheater, HistoricalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clima_app');
}
