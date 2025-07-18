import { Component, inject } from '@angular/core';
import { WeatherModel } from '../../models/weatherModels';
import { WeatherPropertyModel } from '../../models/weatherModels';

@Component({
  selector: 'app-display-wheather',
  imports: [],
  templateUrl: './display-wheather.html',
  styleUrl: './display-wheather.css'
})
export class DisplayWheather {
  weatherData:WeatherModel = new WeatherModel()

  

  weatherFields:WeatherPropertyModel[] = [
    {clave:"humidity", alias:"Humedad",img:"/humedad.png"},
    {clave:"wind_kph", alias:"Viento",img:"/viento.png"},
    {clave:"condition", alias:"Condicion",img:"/condicion.png"},
    {clave:"temp_c", alias:"Temperatura C°",img:"/temperatura.png"},
  ]

}
