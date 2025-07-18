import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { WeatherService } from '../../services/weather-service';
import { FormControl, ReactiveFormsModule, Validators} from "@angular/forms"


@Component({
  selector: 'app-form-wheater',
  imports: [MatIconModule, ReactiveFormsModule],
  templateUrl: './form-wheater.html',
  styleUrl: './form-wheater.css',
})
export class FormWheater {
  weatherService = inject(WeatherService)
  cityControl = new FormControl('', [Validators.required,Validators.pattern(/^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/)])
  msgError = ""


  refreshData(){
    if(this.cityControl.invalid){
      
      this.msgError = "Ciudad no valida, Solo debe contener letras"
      return
    } 

    this.weatherService.triggerRefresh(this.cityControl.value!)
  }

}
