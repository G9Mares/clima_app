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
    {clave:"humedad", alias:"Humedad",img:"/humedad.png"},
    {clave:"viento", alias:"Viento",img:"/viento.png"},
    {clave:"condicion", alias:"Condicion",img:"/condicion.png"},
    {clave:"temperatura", alias:"Temperatura C°",img:"/temperatura.png"},
  ]

}
