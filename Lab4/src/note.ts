export class Note {

    constructor() {
        this.getNoteData;
    }
    

    saveData(data: any) {
        localStorage.setItem("notesArray", data);
    }

    async getData() {
        let citiesContainer = <HTMLDivElement>document.getElementById("citiesContainer")
        let data: any = (localStorage.getItem('cityArray')).split(",");


        if (data.length != 0) {
            for (let i=0; i<data.length; i++) {
                // let weatherLoop = await this.getWeather(data[i])
                // let cityDiv = this.createCityDiv(weatherLoop);
                // citiesContainer.appendChild(cityDiv);
            }
        } else {
            return {};
        }
    }

    getNoteData(){
        var noteTitle = (<HTMLInputElement>document.getElementById("enterTitle")).value;
        var noteTitle = (<HTMLInputElement>document.getElementById("enterTitle")).value;
        return noteTitle;
    }

    capitalizeFirstLetter(data: string) {
        return data.charAt(0).toUpperCase() + data.slice(1);
      }

    createCityDiv(){
        let mainDiv: HTMLDivElement = document.createElement("div");
        mainDiv.className = "mainDiv"

        let cityDiv: HTMLDivElement = document.createElement("div");
        cityDiv.className = "cityDiv"
        cityDiv.textContent = "uzupelnij";
        mainDiv.appendChild(cityDiv);

        let weatherDiv: HTMLDivElement = document.createElement("div");
        weatherDiv.className = "weatherDiv"
        weatherDiv.textContent = this.capitalizeFirstLetter("uzupelnij");
        mainDiv.appendChild(weatherDiv);


        let temperatureDiv: HTMLDivElement = document.createElement("div");
        temperatureDiv.className = "tepmeratureDiv";
        temperatureDiv.textContent = 'Temperatura: ' + Math.round(6666) + '°C';
        mainDiv.appendChild(temperatureDiv);

        mainDiv.innerHTML;
        return mainDiv;
    }

}
