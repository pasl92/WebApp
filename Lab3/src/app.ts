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
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}&units=metric`;
        const weatherResponse = await fetch(openWeatherUrl)
            
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

    createCityDiv(weatherInfo: IWeatherData){
        let cityDiv: HTMLDivElement = document.createElement("div");
        cityDiv.style.backgroundColor = "blue";
        cityDiv.textContent = 'Miasto: ' + weatherInfo.name;

        //cityDiv.textContent = (weaterInfo.base).toString();
        //console.log(weaterInfo);
        //var weaterObj = JSON.parse(weaterInfo);
        console.log(weatherInfo.name);
        //console.log(weaterInfo.main.temp)
        //console.log(JSON.parse(weaterInfo).main.temp);
        //console.log(weaterObj);
        //cityDiv.textContent = cityName;
        //cityDiv.textContent = weaterInfo.id;
        cityDiv.innerHTML;
        
        return cityDiv;
    }

}

