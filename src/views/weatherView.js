function weatherView(weather) {
    const mainContainer = document.querySelector('.main_container');

    const viewContainer = document.createElement('div');
    viewContainer.classList.add('view_container');

    const newSearch = document.createElement('div');
    newSearch.classList.add('new_search_button');
    newSearch.innerText = 'Reset Search';

    const weatherImageContainer = document.createElement('div');
    weatherImageContainer.classList.add('weather_image_container');

    const weatherImage = document.createElement('img');
    weatherImage.classList.add('weather_image');

    const weatherInfoContainer = document.createElement('div');
    weatherInfoContainer.classList.add('weather_info_container');

    const weatherInfo = document.createElement('ul');
    weatherInfo.classList.add('weather_info');

    const labels = [
        'City',
        'Country',
        'Current Temperature',
        'Max. Temperature', 
        'Min. Temperature' 
    ];
    weather.forEach((item, i) => {
        console.log(item)
        let li = document.createElement('li');
        let label = document.createElement('h3');
        let span = document.createElement('span');
        li.classList.add('weather_item');
        li.id = i;
        label.innerText = labels[i];
        span.innerText = item;
        li.appendChild(label);
        li.appendChild(span);
        weatherInfo.appendChild(li);
    });

    weatherInfoContainer.appendChild(weatherInfo);
    weatherImageContainer.appendChild(weatherImage);
    viewContainer.appendChild(weatherImageContainer);
    viewContainer.appendChild(weatherInfoContainer);
    viewContainer.appendChild(newSearch);
    mainContainer.appendChild(viewContainer);
    console.log('loaded weather info')
};

export { weatherView };