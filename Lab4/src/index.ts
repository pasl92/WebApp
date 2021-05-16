import { App } from './app';
import { Note } from './note';
import './main.scss';

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
        console.log(citiesArray);
        console.log(data);
        cityDiv = app.createCityDiv(data);
        citiesContainer.appendChild(cityDiv);
        citiesArray.push(data.name)
        app.saveData(citiesArray);
        counterStorage++;
    
});


const app = new App();
const note = new Note();
