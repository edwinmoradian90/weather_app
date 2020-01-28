import { weatherView } from "../views/weatherView";
import mainView from "../views/main";

class Weather {
    constructor() {
        this.getInputValue = this.getInputValue.bind(this);
        this.getWeather = this.getWeather.bind(this);
        this.resetPage = this.resetPage.bind(this);
        this.convertUnits = this.convertUnits.bind(this);
        this.processData = this.processData.bind(this);
        this.render = this.render.bind(this);
        this.inputValue = ''
        this.city = '';
        this.country = '';
        this.temp = 0;
        this.minTemp = 0;
        this.maxTemp = 0;

    }

    resetPage() {
        const content = document.querySelector('#content');
        while(content.firstChild) {
            content.removeChild(content.firstChild);
        }
    }

    getInputValue() {
        const input = document.querySelector('.input');
        this.inputValue = input.value;
    }

    convertUnits(data) {
        const { temp, temp_min, temp_max } = data.main;
        const info = [temp, temp_min, temp_max];

        let newTemp = 
            info.map(

                temp => Math.floor(((temp - 273) * 9/5) + 32)
                
                );
        [
            this.temp, 
            this.minTemp, 
            this.maxTemp
        ] = [
            `${newTemp[0]} F`,
            `${newTemp[1]} F`, 
            `${newTemp[2]} F`
        ];
    }

    processData(data) {
        this.city = data.name;
        this.country = data.sys.country;
        this.convertUnits(data);
    }

    async getWeather() {
        const appId = '5a780b06ff7c407971caf4cfc118b1cc';
        const response = 
            await fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${this.inputValue}&APPID=${appId}`, 
                { mode: 'cors' }
                );
        const data = await response.json();
        if (response.ok) {
            return data;
        }
        throw new Error("Something wrong with the input. Check your spelling.");
    }   

    render() {
        console.log('rendering')
        this.getWeather()
            .then(data => { 
            this.processData(data) 
            const weather = [
                this.city,
                this.country, 
                this.temp, 
                this.maxTemp, 
                this.minTemp
            ];
            weatherView(weather);
        }).catch(err => {
            console.log(err);
            this.resetPage();
            mainView();
        });
    }
};

export default Weather;