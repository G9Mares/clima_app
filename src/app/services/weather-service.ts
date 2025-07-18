import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../environments/enviroments';
import { HistoricalResponseModel, WeatherModel, ResponseModelCity} from '../models/weatherModels';
import { Observable, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class WeatherService {
  private refreshData:Subject<string> = new Subject()
  constructor(private http:HttpClient){}


  refreshData$ = this.refreshData.asObservable();

  triggerRefresh(city:string) {
    this.refreshData.next(city);
  }
  
  getCityInfo(city:string):Observable<ResponseModelCity>{
    return this.http.get<ResponseModelCity>(environments.apiWeather+"/weather?city="+city)
  }

  getHistoricalInfo():Observable<HistoricalResponseModel>{
    return this.http.get<HistoricalResponseModel>(environments.apiWeather+"/history")
  }
}
