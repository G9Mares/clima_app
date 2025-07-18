import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../environments/enviroments';
import { HistoricalResponseModel} from '../models/weatherModels';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class WeatherService {
  constructor(private http:HttpClient){}

  
  getHistoricalInfo():Observable<HistoricalResponseModel>{
    return this.http.get<HistoricalResponseModel>(environments.apiWeather+"/history")
  }
}
