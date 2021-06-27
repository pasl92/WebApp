class App1
{
    //pobierami div z html
    codo: HTMLDivElement = <HTMLDivElement>document.getElementById('container')
    obliczenia: HTMLDivElement = <HTMLDivElement>document.getElementById('statsData')
    zmienna: HTMLInputElement = <HTMLInputElement>document.getElementById('member')
    addButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById('add')
    deleteButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById('delete')
    loader: HTMLDivElement = <HTMLDivElement>document.getElementById('loaderContainer')
    sumOutput: HTMLInputElement;
    averageOutput: HTMLInputElement;
    minimumOutput: HTMLInputElement;
    maximumOutput: HTMLInputElement;
    

    
    //Tablica inputow do obliczen - tablica
    numbersArray: number[] = [];


    constructor()
    {
        this.getInputs()
        //Tablica inputow do obliczen
        this.createInput();
        this.showSum();
        this.showAvg();
        this.showMin();
        this.showMax();
        this.hiddenLoader();
    }

    getInputs()
    {
        this.sumOutput = document.querySelector('#sum');
        this.averageOutput = document.querySelector('#avg');
        this.minimumOutput = document.querySelector('#min');
        this.maximumOutput = document.querySelector('#max');
    }

    hiddenLoader()
    {
        this.loader.style.visibility ='hidden';
    }

    showLoader()
    {
        this.loader.style.visibility ='visible';
    }


    createInput()
    {
        //obsługa triggerowania inputow
        this.zmienna.addEventListener("input", () => 
        {
            this.showLoader();
            this.numbersArray = [];
            //input ile bedzie inputow do obliczen
            const inputValue : number = +this.zmienna.value;
            this.codo.innerHTML = '';

            for (let i = 0; i < inputValue; i++)
            {
                var newForm = document.createElement('input');
                newForm.type = 'number'
                newForm.id = "form"+i
                newForm.value = '0';
                this.codo.appendChild(newForm);
            }
        });
    }

    getValues()
    {
        const inputValue = this.codo.getElementsByTagName('input').length;

        for (let i = 0; i < inputValue; i++)
            {
                this.numbersArray[i] = +(document.getElementById('form'+i) as HTMLInputElement).value;
            }

    }

    showSum()
    {
        
        this.codo.addEventListener("input", () => 
        {
            this.showLoader();
            this.getValues();
            let sum : number = 0;

            for (let i = 0; i < this.numbersArray.length; i++)
                {
                    sum += +this.numbersArray[i];
                }

            this.sumOutput.value = sum.toString();
            this.hiddenLoader();
        });
        
    }

    showAvg()
    {
        this.codo.addEventListener("input", () => 
        {
            this.getValues();

                let sum : number = 0;

                for (let i = 0; i < this.numbersArray.length; i++)
                    {
                        sum += +this.numbersArray[i];
                    }

                let avg: number = sum/this.numbersArray.length;
                this.averageOutput.value = avg.toString();
        });
    }

    showMin()
    {
        
        this.codo.addEventListener("input", () => 
        {
            this.getValues();

            let min = Math.min(...this.numbersArray);
        
            this.minimumOutput.value = min.toString();
        });
    }

    showMax()
    {
        
        this.codo.addEventListener("input", () => 
        {
            this.getValues();

            let max = Math.max(...this.numbersArray);
        
            this.maximumOutput.value = max.toString();
        });
    }

    addClickButton()
    {
        var currencyInputNumbers = this.codo.getElementsByTagName('input');

        var newForm = document.createElement('input');
        newForm.type = 'number'
        newForm.id = "form"+(currencyInputNumbers.length)
        newForm.value = '0';
        
        this.codo.appendChild(newForm);
    }

    deleteClickButton()
    {
        var currencyInputNumbers = this.codo.getElementsByTagName('input');
        var removeElement = document.getElementById("form"+(currencyInputNumbers.length-1));
        this.codo.removeChild(removeElement);
    }
}

const calculateApp1 = new App1();