import { App } from './app';
import './main.scss';

let addButton = <HTMLButtonElement>document.getElementById("addButton")
let city: string = " ";

addButton.addEventListener('click', () => {
    city = app.getCityName();
    app.getWeather(city);
});



const app = new App();
