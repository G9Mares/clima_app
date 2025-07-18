import { Component, inject, OnInit } from '@angular/core';
import { WeatherModel } from '../../models/weatherModels';
import { WeatherPropertyModel, ResponseModelCity } from '../../models/weatherModels';
import { WeatherService } from '../../services/weather-service';
import { retry } from 'rxjs';

@Component({
  selector: 'app-display-wheather',
  imports: [],
  templateUrl: './display-wheather.html',
  styleUrl: './display-wheather.css'
})
export class DisplayWheather {
  weatherData:WeatherModel = new WeatherModel()
  weatherService = inject(WeatherService)
  errorMsg = ""

  ngOnInit(){
    this.weatherService.refreshData$.subscribe((city:string)=>{
      this.getWeatherCity(city)
    })
  }

  getWeatherCity(city:string){
    this.weatherService.getCityInfo(city).subscribe({
      next:(response:ResponseModelCity)=>{
        if(response.error ){
          return this.errorMsg = response.error
        }
        return this.weatherData = response.data!
      },
      error:()=>{
        return this.errorMsg = "Ocurrio un error inesperado en la App"
      }
    })
  }
  

  weatherFields:WeatherPropertyModel[] = [
    {clave:"humidity", alias:"Humedad",img:"/humedad.png"},
    {clave:"wind_kph", alias:"Viento",img:"/viento.png"},
    {clave:"condition", alias:"Condicion",img:"/condicion.png"},
    {clave:"temp_c", alias:"Temperatura C°",img:"/temperatura.png"},
  ]

}
