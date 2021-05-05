"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require("./main.scss");
let addButton = document.getElementById("addButton");
let citiesContainer = document.getElementById("citiesContainer");
let cityDiv = " ";
let city = " ";
let data = {};
addButton.addEventListener('click', () => {
    city = app.getCityName();
    data = app.getWeather(city);
    app.saveData(city);
    cityDiv = app.createCityDiv(city, data);
    citiesContainer.appendChild(cityDiv);
});
const app = new app_1.App();
//# sourceMappingURL=index.js.map