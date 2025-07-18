import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../environments/enviroments';
import { HistoricalResponseModel} from '../models/weatherModels';
import { Observable, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class WeatherService {
  private refreshData:Subject<void> = new Subject()
  constructor(private http:HttpClient){}


  refreshData$ = this.refreshData.asObservable();

  triggerRefresh() {
    this.refreshData.next();
  }
  
  
  getHistoricalInfo():Observable<HistoricalResponseModel>{
    return this.http.get<HistoricalResponseModel>(environments.apiWeather+"/history")
  }
}
