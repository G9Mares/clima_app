import { Component, inject, OnInit} from '@angular/core';
import { MatIconModule } from "@angular/material/icon"
import { WeatherService } from '../../services/weather-service';
import { HistoricalData } from '../../models/weatherModels';

@Component({
  selector: 'app-historical-component',
  imports: [MatIconModule],
  templateUrl: './historical-component.html',
  styleUrl: './historical-component.css'
})
export class HistoricalComponent {
  weatherSerice = inject(WeatherService)
  historical:HistoricalData[] = []

  ngOnInit(){
    this.getHistorical()
  }
  getHistorical(){
    this.historical = this.weatherSerice.getHistoricalInfo()
    
  }
}
