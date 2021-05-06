import { App } from './app';
import './main.scss';
import { IForecastData, IWeatherData } from './interface';

let addButton = <HTMLButtonElement>document.getElementById("addButton")
let citiesContainer = <HTMLDivElement>document.getElementById("citiesContainer")
let cityDiv: any = " ";
let city: string = " ";
let data: any = {};
let counterStorage: number = 0;
let citiesArray: string[] = [];

window.onload = function() {
    app.getData();
}

addButton.addEventListener('click', async() =>  {
    city = app.getCityName();

    if(citiesArray.includes(city) == false)
    {
        console.log(citiesArray);
        data =  await app.getWeather(city);
        console.log(data);
        cityDiv = app.createCityDiv(data);
        citiesContainer.appendChild(cityDiv);
        citiesArray.push(data.name)
        app.saveData(citiesArray);
        counterStorage++;
    }
    else{
        return;
    }
    
});


const app = new App();
