import { Component, CSP_NONCE, inject, OnInit} from '@angular/core';
import { MatIconModule } from "@angular/material/icon"
import { WeatherService } from '../../services/weather-service';
import { WeatherModel, HistoricalResponseModel } from '../../models/weatherModels';

@Component({
  selector: 'app-historical-component',
  imports: [MatIconModule],
  templateUrl: './historical-component.html',
  styleUrl: './historical-component.css'
})
export class HistoricalComponent {
  weatherSerice = inject(WeatherService)
  historical:WeatherModel[] = []
  errorMsg:string = ""

  ngOnInit(){
    this.getHistorical()
    this.weatherSerice.refreshData$.subscribe((city)=>{
      setTimeout(() => {
        this.getHistorical()
        
      }, 2000);
    })
  }

  
  getHistorical(){
    
    this.weatherSerice.getHistoricalInfo().subscribe({
      next:(response:HistoricalResponseModel)=>{
        if (response.error){
          return this.errorMsg = response.error
        }
        
        return this.historical = response.data as WeatherModel[]
      },
      error:()=>{
        return this.errorMsg = "Ocurrio un error inesperado en la app"
      }
    })
    
  }
}
