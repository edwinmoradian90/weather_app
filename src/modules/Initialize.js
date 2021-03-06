/* eslint-disable class-methods-use-this */
import Weather from './Weather';
import mainView from '../views/main';

class Initialize {
  constructor() {
    this.weather = new Weather();
    this.loadPage = this.loadPage.bind(this);
    this.clearPage = this.clearPage.bind(this);
    this.resetPage = this.resetPage.bind(this);
    this.startEventListener = this.startEventListener.bind(this);
  }

  loadPage() {
    mainView();
  }

  clearPage() {
    const mainContainer = document.querySelector('.main_container');
    while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.firstChild);
    }
  }

  resetPage() {
    const content = document.querySelector('#content');
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  }

  startEventListener() {
    document.addEventListener('click', (e) => {
      if (e.target.matches('.submit_button')) {
        this.weather.getInputValue();
        this.clearPage();
        this.weather.render();
      } else if (e.target.matches('.new_search_button')) {
        this.resetPage('.main_container');
        this.loadPage();
      } else if (e.target.matches('.toggle_units')) {
        this.weather.resetPage('.main_container');
        this.weather.toggleUnits();
        this.weather.render();
      }
    });
  }
}

export default Initialize;
