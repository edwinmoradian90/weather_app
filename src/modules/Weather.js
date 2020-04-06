/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import weatherView from '../views/weatherView';
import mainView from '../views/main';
import gifs from '../assets/images/gifs';

class Weather {
  constructor() {
    this.getInputValue = this.getInputValue.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.resetPage = this.resetPage.bind(this);
    this.convertUnits = this.convertUnits.bind(this);
    this.processData = this.processData.bind(this);
    this.render = this.render.bind(this);
    this.inputValue = '';
    this.city = '';
    this.country = '';
    this.type = '';
    this.isCelsius = false;
    this.unit = 'F';
    this.temp = 0;
    this.tempMin = 0;
    this.tempMax = 0;
    this.gif = '';
  }

  resetPage(page) {
    const content = document.querySelector(page);
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  }

  gifPicker() {
    if (this.isCelsius) {
      if (this.temp <= 0) {
        this.gif = gifs.cold;
      } else if (this.temp > 0 && this.temp < 25) {
        this.gif = gifs.medium;
      } else {
        this.gif = gifs.hot;
      }
    } else if (!this.isCelsius) {
      if (this.temp <= 32) {
        this.gif = gifs.cold;
      } else if (this.temp > 32 && this.temp < 77) {
        this.gif = gifs.medium;
      } else {
        this.gif = gifs.hot;
      }
    }
  }

  getInputValue() {
    const input = document.querySelector('.input');
    this.inputValue = input.value;
  }

  toggleUnits() {
    this.isCelsius = !this.isCelsius;
    this.unit = this.isCelsius
      ? 'C'
      : 'F';
  }

  toC(temps) {
    const newTemp = temps.map((temp) => Math.floor(temp - 273));
    [this.temp, this.tempMin, this.tempMax] = newTemp;
    this.gifPicker();
  }

  toF(temps) {
    const newTemp = temps.map((temp) => Math.floor(((temp - 273) * (9 / 5)) + 32));
    [this.temp, this.tempMin, this.tempMax] = newTemp;
    this.gifPicker();
  }

  convertUnits(data) {
    const { temp, temp_min, temp_max } = data.main;
    const info = [temp, temp_min, temp_max];
    return this.isCelsius ? this.toC(info) : this.toF(info);
  }

  processData(data) {
    this.city = data.name;
    this.country = data.sys.country;
    this.type = data.weather[0].main;
    this.convertUnits(data);
  }

  async getWeather() {
    const appId = '5a780b06ff7c407971caf4cfc118b1cc';
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.inputValue}&APPID=${appId}`,
      { mode: 'cors' },
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error('Something wrong with the input. Check your spelling.');
  }

  render() {
    this.getWeather()
      .then((data) => {
        this.processData(data);
        const weather = {
          city: this.city,
          country: this.country,
          type: this.type,
          temp: this.temp,
          maxTemp: this.tempMax,
          minTemp: this.tempMin,
          unit: this.unit,
          gif: this.gif,
        };
        weatherView(weather);
      }).catch((err) => {
        this.resetPage('#content');
        mainView({ error: true });
        throw new Error(err);
      });
  }
}

export default Weather;
