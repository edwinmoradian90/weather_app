function weatherView(weather) {
  const mainContainer = document.querySelector('.main_container');

  const viewContainer = document.createElement('div');
  viewContainer.classList.add('view_container');

  const newSearch = document.createElement('div');
  newSearch.classList.add('new_search_button');
  newSearch.innerText = 'Reset Search';

  const toggleUnits = document.createElement('span');
  toggleUnits.classList.add('toggle_units');
  toggleUnits.innerText = 'Units';

  const weatherImageContainer = document.createElement('div');
  weatherImageContainer.classList.add('weather_image_container');

  const weatherImage = document.createElement('img');
  weatherImage.classList.add('weather_image');

  const weatherInfo = `
    <div class='location_container'>
      <h2 class='location'>
        ${weather.city}, ${weather.country}
      </h2>
      <h3 class='weather_type'>
        ${weather.type}
      </h3>
      <div class='current_temp_container'>
        <h1 class='current_temp'>
        ${weather.temp}
          <span>
            ${weather.unit}
          </span>
        </h1>
      </div>
      <div class='min_max_container'>
        <h3 class='min_temp'>
          Min: ${weather.minTemp}
          <span>
            ${weather.unit}
          </span>
        </h3>
        <h3 class='max_temp'>
          Max: ${weather.maxTemp} 
          <span>
            ${weather.unit}
          </span>
        </h3>
      </div>
    </div>
  `;

  const buttonContainer = `
    <div class='button_container'>
      <div class='new_search_button'>
        New Search
      </div>
      <div class='toggle_units'>
        Toggle Units
      </div>
    </div>
  `;

  const weatherInfoContainer = document.createElement('div');
  weatherInfoContainer.classList.add('weather_info_container');

  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('button_container');
  buttonWrapper.innerHTML = buttonContainer;

  weatherInfoContainer.innerHTML = weatherInfo;
  viewContainer.appendChild(weatherImageContainer);
  viewContainer.appendChild(weatherInfoContainer);
  viewContainer.appendChild(buttonWrapper);
  mainContainer.appendChild(viewContainer);
}

export default weatherView;
