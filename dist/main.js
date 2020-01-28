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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Initialize */ \"./src/modules/Initialize.js\");\n\r\n\r\nconst initialize = new _modules_Initialize__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\ninitialize.loadPage();\r\ninitialize.startEventListener();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/Initialize.js":
/*!***********************************!*\
  !*** ./src/modules/Initialize.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weather */ \"./src/modules/Weather.js\");\n/* harmony import */ var _views_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/main */ \"./src/views/main.js\");\n\r\n\r\n\r\nclass Initialize {\r\n    constructor() {\r\n        this.weather = new _Weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        this.loadPage = this.loadPage.bind(this);\r\n        this.clearPage = this.clearPage.bind(this);\r\n        this.resetPage = this.resetPage.bind(this);\r\n        this.startEventListener = this.startEventListener.bind(this);\r\n    }\r\n\r\n    loadPage() {\r\n        Object(_views_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    }\r\n\r\n    clearPage() {\r\n        const mainContainer = document.querySelector('.main_container');\r\n        while(mainContainer.firstChild) {\r\n            mainContainer.removeChild(mainContainer.firstChild);\r\n        }\r\n    }\r\n\r\n    resetPage() {\r\n        const content = document.querySelector('#content');\r\n        while(content.firstChild) {\r\n            content.removeChild(content.firstChild);\r\n        }\r\n    }\r\n\r\n    startEventListener() {\r\n        console.log('listening')\r\n        document.addEventListener('click', (e)=> {\r\n            if(e.target.matches('.submit_button')) {\r\n                this.weather.getInputValue();\r\n                this.clearPage();\r\n                this.weather.render();\r\n            } else \r\n            if(e.target.matches('.new_search_button')) {\r\n                this.resetPage();\r\n                this.loadPage();\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Initialize);\n\n//# sourceURL=webpack:///./src/modules/Initialize.js?");

/***/ }),

/***/ "./src/modules/Weather.js":
/*!********************************!*\
  !*** ./src/modules/Weather.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_weatherView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/weatherView */ \"./src/views/weatherView.js\");\n/* harmony import */ var _views_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/main */ \"./src/views/main.js\");\n\r\n\r\n\r\nclass Weather {\r\n    constructor() {\r\n        this.getInputValue = this.getInputValue.bind(this);\r\n        this.getWeather = this.getWeather.bind(this);\r\n        this.resetPage = this.resetPage.bind(this);\r\n        this.convertUnits = this.convertUnits.bind(this);\r\n        this.processData = this.processData.bind(this);\r\n        this.render = this.render.bind(this);\r\n        this.inputValue = ''\r\n        this.city = '';\r\n        this.country = '';\r\n        this.temp = 0;\r\n        this.minTemp = 0;\r\n        this.maxTemp = 0;\r\n\r\n    }\r\n\r\n    resetPage() {\r\n        const content = document.querySelector('#content');\r\n        while(content.firstChild) {\r\n            content.removeChild(content.firstChild);\r\n        }\r\n    }\r\n\r\n    getInputValue() {\r\n        const input = document.querySelector('.input');\r\n        this.inputValue = input.value;\r\n    }\r\n\r\n    convertUnits(data) {\r\n        const { temp, temp_min, temp_max } = data.main;\r\n        const info = [temp, temp_min, temp_max];\r\n\r\n        let newTemp = \r\n            info.map(\r\n\r\n                temp => Math.floor(((temp - 273) * 9/5) + 32)\r\n                \r\n                );\r\n        [\r\n            this.temp, \r\n            this.minTemp, \r\n            this.maxTemp\r\n        ] = [\r\n            `${newTemp[0]} F`,\r\n            `${newTemp[1]} F`, \r\n            `${newTemp[2]} F`\r\n        ];\r\n    }\r\n\r\n    processData(data) {\r\n        this.city = data.name;\r\n        this.country = data.sys.country;\r\n        this.convertUnits(data);\r\n    }\r\n\r\n    async getWeather() {\r\n        const appId = '5a780b06ff7c407971caf4cfc118b1cc';\r\n        const response = \r\n            await fetch(\r\n                `http://api.openweathermap.org/data/2.5/weather?q=${this.inputValue}&APPID=${appId}`, \r\n                { mode: 'cors' }\r\n                );\r\n        const data = await response.json();\r\n        if (response.ok) {\r\n            return data;\r\n        }\r\n        throw new Error(\"Something wrong with the input. Check your spelling.\");\r\n    }   \r\n\r\n    render() {\r\n        console.log('rendering')\r\n        this.getWeather()\r\n            .then(data => { \r\n            this.processData(data) \r\n            const weather = [\r\n                this.city,\r\n                this.country, \r\n                this.temp, \r\n                this.maxTemp, \r\n                this.minTemp\r\n            ];\r\n            Object(_views_weatherView__WEBPACK_IMPORTED_MODULE_0__[\"weatherView\"])(weather);\r\n        }).catch(err => {\r\n            console.log(err);\r\n            this.resetPage();\r\n            Object(_views_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n        });\r\n    }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\n\n//# sourceURL=webpack:///./src/modules/Weather.js?");

/***/ }),

/***/ "./src/views/main.js":
/*!***************************!*\
  !*** ./src/views/main.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction mainView() {\r\n    const content = document.querySelector('#content');\r\n\r\n    const mainContainer = document.createElement('div');\r\n    mainContainer.classList.add('main_container');\r\n\r\n    const title = document.createElement('h2');\r\n    title.classList.add('title');\r\n    title.innerText = 'Weather App';\r\n\r\n    const inputContainer = document.createElement('div');\r\n    inputContainer.classList.add('input_container');\r\n\r\n    const input = document.createElement('input');\r\n    input.setAttribute('type', 'text');\r\n    input.setAttribute('placeholder', 'Enter your city...');\r\n    input.classList.add('input');\r\n\r\n    const submit = document.createElement('span');\r\n    submit.classList.add('submit_button');\r\n    submit.innerText = 'Submit';\r\n\r\n    inputContainer.appendChild(input);\r\n    inputContainer.appendChild(submit);\r\n    mainContainer.appendChild(title);\r\n    mainContainer.appendChild(inputContainer);\r\n    content.appendChild(mainContainer);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (mainView);\n\n//# sourceURL=webpack:///./src/views/main.js?");

/***/ }),

/***/ "./src/views/weatherView.js":
/*!**********************************!*\
  !*** ./src/views/weatherView.js ***!
  \**********************************/
/*! exports provided: weatherView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"weatherView\", function() { return weatherView; });\nfunction weatherView(weather) {\r\n    const mainContainer = document.querySelector('.main_container');\r\n\r\n    const viewContainer = document.createElement('div');\r\n    viewContainer.classList.add('view_container');\r\n\r\n    const newSearch = document.createElement('div');\r\n    newSearch.classList.add('new_search_button');\r\n    newSearch.innerText = 'Reset Search';\r\n\r\n    const weatherImageContainer = document.createElement('div');\r\n    weatherImageContainer.classList.add('weather_image_container');\r\n\r\n    const weatherImage = document.createElement('img');\r\n    weatherImage.classList.add('weather_image');\r\n\r\n    const weatherInfoContainer = document.createElement('div');\r\n    weatherInfoContainer.classList.add('weather_info_container');\r\n\r\n    const weatherInfo = document.createElement('ul');\r\n    weatherInfo.classList.add('weather_info');\r\n\r\n    const labels = [\r\n        'City',\r\n        'Country',\r\n        'Current Temperature',\r\n        'Max. Temperature', \r\n        'Min. Temperature' \r\n    ];\r\n    weather.forEach((item, i) => {\r\n        console.log(item)\r\n        let li = document.createElement('li');\r\n        let label = document.createElement('h3');\r\n        let span = document.createElement('span');\r\n        li.classList.add('weather_item');\r\n        li.id = i;\r\n        label.innerText = labels[i];\r\n        span.innerText = item;\r\n        li.appendChild(label);\r\n        li.appendChild(span);\r\n        weatherInfo.appendChild(li);\r\n    });\r\n\r\n    weatherInfoContainer.appendChild(weatherInfo);\r\n    weatherImageContainer.appendChild(weatherImage);\r\n    viewContainer.appendChild(weatherImageContainer);\r\n    viewContainer.appendChild(weatherInfoContainer);\r\n    viewContainer.appendChild(newSearch);\r\n    mainContainer.appendChild(viewContainer);\r\n    console.log('loaded weather info')\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/views/weatherView.js?");

/***/ })

/******/ });