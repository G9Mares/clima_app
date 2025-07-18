export interface HistoricalData {
    id:string
    ciudad:string
    fecha:string
    temperatura:string
}

export interface WeatherPropertyModel {
    clave:string
    alias:string
    img:string
}

export class WeatherModel {
    contry:string = "Bergh"
    city:string = "Ciudad gotica"
    region:string = "Nuevo Toledo"
    dateQuery:string = "2025-07-17 20:31"

}
