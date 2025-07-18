export interface HistoricalData {
    id:string
    ciudad:string
    fecha:string
    temperatura:string
}

export interface HistoricalResponseModel {
    status:number
    error?:string
    data?:WeatherModel[]
}

export class WeatherModel {
    contry:string = ""
    city:string = "Busca una nueva ciudad"
    region:string = ""
    dateQuery:string = ""
    temp_c:string = "-"
    condition:string = "-"
    humidity:string = "-"
    wind_kph:string = "-"

}
type WeatherKey = keyof WeatherModel
export interface WeatherPropertyModel {
    clave:WeatherKey
    alias:string
    img:string
}