import { IForecastData, IWeatherData } from './interface';

export class App {
    opwApiKey = '444cac076196e5700436d363ef5480ee';

    
    constructor() {
        this.getCityName;
    }
    
    async getCityInfo(city: string) {
        const weather = await this.getWeather(city);
        this.saveData(weather);
    }
    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}&lang=pl&units=metric`;
        const weatherResponse = await fetch(openWeatherUrl)
            .then(response => response.json())
            
            
        return weatherResponse;
    }


    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(data));
    }
    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }
    }

    getCityName(){
        var cityName = (<HTMLInputElement>document.getElementById("enterCity")).value;
        //console.log(cityName);
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
        temperatureDiv.textContent = 'Tepmeratura: ' + Math.round(weatherInfo.main.temp) + '°C';
        mainDiv.appendChild(temperatureDiv);

    
       
        mainDiv.innerHTML;
        return mainDiv;
    }

}

