import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { WeatherService } from '../../services/weather-service';


@Component({
  selector: 'app-form-wheater',
  imports: [MatIconModule],
  templateUrl: './form-wheater.html',
  styleUrl: './form-wheater.css',
})
export class FormWheater {
  weatherService = inject(WeatherService)


  refreshData(){
    this.weatherService.triggerRefresh()
  }

}
