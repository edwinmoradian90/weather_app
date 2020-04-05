/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/images/gifs.js":
/*!***********************************!*\
  !*** ./src/assets/images/gifs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  cold: '<iframe src=\"https://giphy.com/embed/s4Bi420mMDRBK\" width=\"150\" height=\"180\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>',\n  medium: '<iframe src=\"https://giphy.com/embed/fYTUarigdyZyvwFQsU\" width=\"150\" height=\"150\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></<iframe>',\n  hot: '<iframe src=\"https://giphy.com/embed/h8OVffxQIVXWM2pwG4\" width=\"150\" height=\"150\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>',\n});\n\n//# sourceURL=webpack:///./src/assets/images/gifs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Initialize */ \"./src/modules/Initialize.js\");\n\n\nconst initialize = new _modules_Initialize__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\ninitialize.loadPage();\ninitialize.startEventListener();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/Initialize.js":
/*!***********************************!*\
  !*** ./src/modules/Initialize.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weather */ \"./src/modules/Weather.js\");\n/* harmony import */ var _views_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/main */ \"./src/views/main.js\");\n/* eslint-disable class-methods-use-this */\n\n\n\nclass Initialize {\n  constructor() {\n    this.weather = new _Weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.loadPage = this.loadPage.bind(this);\n    this.clearPage = this.clearPage.bind(this);\n    this.resetPage = this.resetPage.bind(this);\n    this.startEventListener = this.startEventListener.bind(this);\n  }\n\n  loadPage() {\n    Object(_views_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  }\n\n  clearPage() {\n    const mainContainer = document.querySelector('.main_container');\n    while (mainContainer.firstChild) {\n      mainContainer.removeChild(mainContainer.firstChild);\n    }\n  }\n\n  resetPage() {\n    const content = document.querySelector('#content');\n    while (content.firstChild) {\n      content.removeChild(content.firstChild);\n    }\n  }\n\n  startEventListener() {\n    document.addEventListener('click', (e) => {\n      if (e.target.matches('.submit_button')) {\n        this.weather.getInputValue();\n        this.clearPage();\n        this.weather.render();\n      } else\n      if (e.target.matches('.new_search_button')) {\n        this.resetPage();\n        this.loadPage();\n      } else\n      if (e.target.matches('.toggle_units')) {\n        console.log('convert units');\n        this.weather.resetPage();\n        this.weather.toggleUnits();\n        this.weather.render();\n      }\n    });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Initialize);\n\n\n//# sourceURL=webpack:///./src/modules/Initialize.js?");

/***/ }),

/***/ "./src/modules/Weather.js":
/*!********************************!*\
  !*** ./src/modules/Weather.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_weatherView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/weatherView */ \"./src/views/weatherView.js\");\n/* harmony import */ var _views_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/main */ \"./src/views/main.js\");\n/* harmony import */ var _assets_images_gifs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/gifs */ \"./src/assets/images/gifs.js\");\n/* eslint-disable camelcase */\n/* eslint-disable class-methods-use-this */\n\n\n\n\nclass Weather {\n  constructor() {\n    this.getInputValue = this.getInputValue.bind(this);\n    this.getWeather = this.getWeather.bind(this);\n    this.resetPage = this.resetPage.bind(this);\n    this.convertUnits = this.convertUnits.bind(this);\n    this.processData = this.processData.bind(this);\n    this.render = this.render.bind(this);\n    this.inputValue = '';\n    this.city = '';\n    this.country = '';\n    this.type = '';\n    this.isCelsius = false;\n    this.unit = 'F';\n    this.temp = 0;\n    this.tempMin = 0;\n    this.tempMax = 0;\n    this.gif = '';\n  }\n\n  resetPage() {\n    const content = document.querySelector('.main_container');\n    while (content.firstChild) {\n      content.removeChild(content.firstChild);\n    }\n  }\n\n  gifPicker() {\n    if (this.isCelsius) {\n      if (this.temp <= 0) {\n        this.gif = _assets_images_gifs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cold;\n      } else if (this.temp > 0 && this.temp < 25) {\n        this.gif = _assets_images_gifs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].medium;\n      } else {\n        this.gif = _assets_images_gifs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hot;\n      }\n    } else\n    if (!this.isCelsius) {\n      if (this.temp <= 32) {\n        this.gif = _assets_images_gifs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].cold;\n      } else if (this.temp > 32 && this.temp < 77) {\n        this.gif = _assets_images_gifs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].medium;\n      } else {\n        this.gif = _assets_images_gifs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hot;\n      }\n    }\n    console.log(this.gif, typeof this.gif);\n  }\n\n  getInputValue() {\n    const input = document.querySelector('.input');\n    this.inputValue = input.value;\n  }\n\n  toggleUnits() {\n    this.isCelsius = !this.isCelsius;\n    this.unit = this.isCelsius\n      ? 'C'\n      : 'F';\n  }\n\n  toC(temps) {\n    const newTemp = temps.map((temp) => Math.floor(temp - 273));\n    [this.temp, this.tempMin, this.tempMax] = newTemp;\n    this.gifPicker();\n  }\n\n  toF(temps) {\n    const newTemp = temps.map((temp) => Math.floor(((temp - 273) * (9 / 5)) + 32));\n    [this.temp, this.tempMin, this.tempMax] = newTemp;\n    this.gifPicker();\n  }\n\n  convertUnits(data) {\n    const { temp, temp_min, temp_max } = data.main;\n    const info = [temp, temp_min, temp_max];\n    return this.isCelsius ? this.toC(info) : this.toF(info);\n  }\n\n  processData(data) {\n    this.city = data.name;\n    this.country = data.sys.country;\n    this.type = data.weather[0].main;\n    this.convertUnits(data);\n  }\n\n  async getWeather() {\n    const appId = '5a780b06ff7c407971caf4cfc118b1cc';\n    const response = await fetch(\n      `http://api.openweathermap.org/data/2.5/weather?q=${this.inputValue}&APPID=${appId}`,\n      { mode: 'cors' },\n    );\n    const data = await response.json();\n    if (response.ok) {\n      return data;\n    }\n    throw new Error('Something wrong with the input. Check your spelling.');\n  }\n\n  render() {\n    this.getWeather()\n      .then((data) => {\n        this.processData(data);\n        const weather = {\n          city: this.city,\n          country: this.country,\n          type: this.type,\n          temp: this.temp,\n          maxTemp: this.tempMax,\n          minTemp: this.tempMin,\n          unit: this.unit,\n          gif: this.gif,\n        };\n        console.log(weather);\n        Object(_views_weatherView__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(weather);\n      }).catch((err) => {\n        this.resetPage();\n        Object(_views_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        throw new Error(err);\n      });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\n\n\n//# sourceURL=webpack:///./src/modules/Weather.js?");

/***/ }),

/***/ "./src/views/main.js":
/*!***************************!*\
  !*** ./src/views/main.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction mainView() {\n  const content = document.querySelector('#content');\n\n  const mainContainer = document.createElement('div');\n  mainContainer.classList.add('main_container');\n\n  const title = document.createElement('h2');\n  title.classList.add('title');\n  title.innerText = 'Weather App';\n\n  const inputContainer = document.createElement('div');\n  inputContainer.classList.add('input_container');\n\n  const input = document.createElement('input');\n  input.setAttribute('type', 'text');\n  input.setAttribute('placeholder', 'Enter your city...');\n  input.classList.add('input');\n\n  const submit = document.createElement('span');\n  submit.classList.add('submit_button');\n  submit.innerText = 'Submit';\n\n  inputContainer.appendChild(input);\n  inputContainer.appendChild(submit);\n  mainContainer.appendChild(title);\n  mainContainer.appendChild(inputContainer);\n  content.appendChild(mainContainer);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mainView);\n\n\n//# sourceURL=webpack:///./src/views/main.js?");

/***/ }),

/***/ "./src/views/weatherView.js":
/*!**********************************!*\
  !*** ./src/views/weatherView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction weatherView(weather) {\n  const mainContainer = document.querySelector('.main_container');\n\n  const viewContainer = document.createElement('div');\n  viewContainer.classList.add('view_container');\n\n  const newSearch = document.createElement('div');\n  newSearch.classList.add('new_search_button');\n  newSearch.innerText = 'Reset Search';\n\n  const toggleUnits = document.createElement('span');\n  toggleUnits.classList.add('toggle_units');\n  toggleUnits.innerText = 'Units';\n\n  const weatherImageContainer = document.createElement('div');\n  weatherImageContainer.classList.add('weather_image_container');\n\n  const weatherImage = document.createElement('img');\n  weatherImage.classList.add('weather_image');\n\n  const weatherInfo = `\n    <div class='location_container'>\n      <div class='content_wrapper'>\n        <h2 class='location'>\n          ${weather.city}, ${weather.country}\n        </h2>\n        <h3 class='weather_type'>\n          ${weather.type}\n        </h3>\n        <div class='current_temp_container'>\n          <h1 class='current_temp'>\n          ${weather.temp}\n            <span>\n              ${weather.unit}\n            </span>\n          </h1>\n        </div>\n        <div class='min_max_container'>\n          <h3 class='min_temp'>\n            Min: ${weather.minTemp}\n            <span>\n              ${weather.unit}\n            </span>\n          </h3>\n          <h3 class='max_temp'>\n            Max: ${weather.maxTemp} \n            <span>\n              ${weather.unit}\n            </span>\n          </h3>\n        </div>\n      </div>\n      <div class='gif_container'>\n        ${weather.gif}\n      </div>\n    </div>\n  `;\n\n  const buttonContainer = `\n    <div class='button_container'>\n      <div class='new_search_button'>\n        New Search\n      </div>\n      <div class='toggle_units'>\n        Toggle Units\n      </div>\n    </div>\n  `;\n\n  const weatherInfoContainer = document.createElement('div');\n  weatherInfoContainer.classList.add('weather_info_container');\n\n  const buttonWrapper = document.createElement('div');\n  buttonWrapper.classList.add('button_container');\n  buttonWrapper.innerHTML = buttonContainer;\n\n  weatherInfoContainer.innerHTML = weatherInfo;\n  viewContainer.appendChild(weatherImageContainer);\n  viewContainer.appendChild(weatherInfoContainer);\n  viewContainer.appendChild(buttonWrapper);\n  mainContainer.appendChild(viewContainer);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (weatherView);\n\n\n//# sourceURL=webpack:///./src/views/weatherView.js?");

/***/ })

/******/ });