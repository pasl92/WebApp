import { IForecastData, IWeatherData } from './interface';

export class App {
    opwApiKey = '444cac076196e5700436d363ef5480ee';


    constructor() {
        this.getCityName;
    }
    
    async getCityInfo(city: string) {
         await this.getWeather(city);
    }
    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}&lang=pl&units=metric`;
        const weatherResponse = await fetch(openWeatherUrl)
            .then(response => response.json())
            
            
        return weatherResponse;
    }


    saveData(data: any) {
        localStorage.setItem("cityArray", data);
    ;
    }

    async getData() {
        let citiesContainer = <HTMLDivElement>document.getElementById("citiesContainer")
        let data: any = (localStorage.getItem('cityArray')).split(",");


        if (data.length != 0) {
            for (let i=0; i<data.length; i++) {
                let weatherLoop = await this.getWeather(data[i])
                let cityDiv = this.createCityDiv(weatherLoop);
                citiesContainer.appendChild(cityDiv);
            }
        } else {
            return {};
        }
    }

    getCityName(){
        var cityName = (<HTMLInputElement>document.getElementById("enterCity")).value;
        return cityName;
    }

    capitalizeFirstLetter(data: string) {
        return data.charAt(0).toUpperCase() + data.slice(1);
      }

    createCityDiv(weatherInfo: IWeatherData){
        let mainDiv: HTMLDivElement = document.createElement("div");
        mainDiv.className = "mainDiv"

        let cityDiv: HTMLDivElement = document.createElement("div");
        cityDiv.className = "cityDiv"
        cityDiv.textContent = weatherInfo.name;
        mainDiv.appendChild(cityDiv);

        let weatherDiv: HTMLDivElement = document.createElement("div");
        weatherDiv.className = "weatherDiv"
        weatherDiv.textContent = this.capitalizeFirstLetter(weatherInfo.weather[0].description);
        mainDiv.appendChild(weatherDiv);


        let temperatureDiv: HTMLDivElement = document.createElement("div");
        temperatureDiv.className = "tepmeratureDiv";
        temperatureDiv.textContent = 'Temperatura: ' + Math.round(weatherInfo.main.temp) + '°C';
        mainDiv.appendChild(temperatureDiv);

        mainDiv.innerHTML;
        return mainDiv;
    }

}

