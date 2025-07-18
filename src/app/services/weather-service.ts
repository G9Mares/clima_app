import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../environments/enviroments';
import { HistoricalData } from '../models/weatherModels';

@Injectable({
  providedIn: 'root'
})


export class WeatherService {
  http = inject(HttpClient)

  dumbInfo:HistoricalData[] = [
    {id:"1",ciudad:"CDMX",fecha:"10/05/2025",temperatura:"38"},
    {id:"2",ciudad:"Queretaro",fecha:"10/05/2025",temperatura:"38"},
    {id:"3",ciudad:"Celaya",fecha:"10/05/2025",temperatura:"38"},
    {id:"4",ciudad:"Madrid",fecha:"10/05/2025",temperatura:"38"},
    {id:"5",ciudad:"Uruapan",fecha:"10/05/2025",temperatura:"38"},
    {id:"1",ciudad:"CDMX",fecha:"10/05/2025",temperatura:"38"},
    {id:"2",ciudad:"Queretaro",fecha:"10/05/2025",temperatura:"38"},
    {id:"3",ciudad:"Celaya",fecha:"10/05/2025",temperatura:"38"},
    {id:"4",ciudad:"Madrid",fecha:"10/05/2025",temperatura:"38"},
    {id:"5",ciudad:"Uruapan",fecha:"10/05/2025",temperatura:"38"},
    {id:"1",ciudad:"CDMX",fecha:"10/05/2025",temperatura:"38"},
    {id:"2",ciudad:"Queretaro",fecha:"10/05/2025",temperatura:"38"},
    {id:"3",ciudad:"Celaya",fecha:"10/05/2025",temperatura:"38"},
    {id:"4",ciudad:"Madrid",fecha:"10/05/2025",temperatura:"38"},
    {id:"5",ciudad:"Uruapan",fecha:"10/05/2025",temperatura:"38"},
  ] 

  getHistoricalInfo(){
    // this.http.get(environments.apiWeather)
    return this.dumbInfo
  }
}
