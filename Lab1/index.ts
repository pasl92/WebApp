class CalculateApp1
{
    userInput1: HTMLInputElement;
    userInput2: HTMLInputElement;
    userInput3: HTMLInputElement;
    userInput4: HTMLInputElement;

    sumOutput: HTMLInputElement;
    averageOutput: HTMLInputElement;
    minimumOutput: HTMLInputElement;
    maximumOutput: HTMLInputElement;

    constructor()
    {
        this.openApplication();
    }

    openApplication()
    {
        this.getInputs();
        this.watchInputValues();
    }

    getInputs()
    {
        this.userInput1 = document.querySelector('#data1');
        this.userInput2 = document.querySelector('#data2');
        this.userInput3 = document.querySelector('#data3');
        this.userInput4 = document.querySelector('#data4');
        this.sumOutput = document.querySelector('#sum');
        this.averageOutput = document.querySelector('#avg');
        this.minimumOutput = document.querySelector('#min');
        this.maximumOutput = document.querySelector('#max');
    }

    watchInputValues()
    {
        this.userInput1.addEventListener('input', () => this.computeData());
        this.userInput2.addEventListener('input', () => this.computeData());
        this.userInput3.addEventListener('input', () => this.computeData());
        this.userInput4.addEventListener('input', () => this.computeData());
    }   

    computeData()
    {
        const value1 = +this.userInput1.value;
        const value2 = +this.userInput2.value;
        const value3 = +this.userInput3.value;
        const value4 = +this.userInput4.value;  

        const sum = value1 + value2 + value3 + value4;
        const avg = sum / 4;
        const min = Math.min(value1, value2, value3, value4);
        const max = Math.max(value1, value2, value3, value4);

        this.showValues(sum, avg, min, max);
    }

    showValues(sum: number, avg: number, min: number, max: number)
    {
        this.sumOutput.value = sum.toString();
        this.averageOutput.value = avg.toString();
        this.minimumOutput.value = min.toString();
        this.maximumOutput.value = max.toString();

         
    }
}
const calculateApp1 = new CalculateApp1();