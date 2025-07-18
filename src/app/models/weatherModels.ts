export interface HistoricalData {
    id:string
    ciudad:string
    fecha:string
    temperatura:string
}



export class WeatherModel {
    contry:string = "Bergh"
    city:string = "Ciudad gotica"
    region:string = "Nuevo Toledo"
    dateQuery:string = "2025-07-17 20:31"
    temp_c:string = "27°"
    condition:string = "Sunny"
    humidity:string = "49"
    wind_kph:string = "49 km/h"

}
type WeatherKey = keyof WeatherModel
export interface WeatherPropertyModel {
    clave:WeatherKey
    alias:string
    img:string
}