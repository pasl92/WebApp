import { App } from './app';
import './main.scss';

let addButton = <HTMLButtonElement>document.getElementById("addButton")
let citiesContainer = <HTMLDivElement>document.getElementById("citiesContainer")
let cityDiv: any = " ";
let city: string = " ";
let data: any = {};

addButton.addEventListener('click', async() =>  {
    city = app.getCityName();
    data =  await app.getWeather(city);
    //console.log(data);
    app.saveData(city);
    cityDiv = app.createCityDiv(data);
    citiesContainer.appendChild(cityDiv);
});


const app = new App();
