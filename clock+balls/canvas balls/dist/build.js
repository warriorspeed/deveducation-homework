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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/init.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/controller.js":
/*!**************************!*\
  !*** ./js/controller.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./js/logic.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst logic = new _logic__WEBPACK_IMPORTED_MODULE_0__[\"Logic\"]();\r\nconst ball = new _logic__WEBPACK_IMPORTED_MODULE_0__[\"default\"](50,70, 1, 1);\r\n_logic__WEBPACK_IMPORTED_MODULE_0__[\"model\"].allBalls.push(ball);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    initController(){\r\n        Object(_logic__WEBPACK_IMPORTED_MODULE_0__[\"clickCanvas\"])()\r\n        setInterval(() => {\r\n            logic.getContext();\r\n            logic.addRound();\r\n            Object(_logic__WEBPACK_IMPORTED_MODULE_0__[\"moving\"])(_logic__WEBPACK_IMPORTED_MODULE_0__[\"model\"].allBalls);\r\n        },10)\r\n    },\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./js/controller.js?");

/***/ }),

/***/ "./js/init.js":
/*!********************!*\
  !*** ./js/init.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./js/controller.js\");\n\r\n\r\n_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initController();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/init.js?");

/***/ }),

/***/ "./js/logic.js":
/*!*********************!*\
  !*** ./js/logic.js ***!
  \*********************/
/*! exports provided: model, Logic, moving, default, clickCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"model\", function() { return model; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logic\", function() { return Logic; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moving\", function() { return moving; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ball; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickCanvas\", function() { return clickCanvas; });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./js/model.js\");\n\r\nconst model = new _model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"]();\r\nclass Logic {\r\n    getContext() {\r\n        model.ctx = document.getElementById('canvas').getContext('2d');\r\n        model.ctx.save();\r\n    }\r\n    addRound(){\r\n        model.ctx.clearRect(0,0,400,600);\r\n        model.ctx.beginPath();\r\n        model.ctx.lineWidth = 5;\r\n        model.ctx.moveTo(0, 0);\r\n        model.ctx.lineTo(0,600);\r\n        model.ctx.lineTo(400,600);\r\n        model.ctx.lineTo(400,0);\r\n        model.ctx.lineTo(0,0);\r\n        model.ctx.stroke();\r\n        model.ctx.fillStyle = 'rgba(28,215,226, 0.3)';\r\n        model.ctx.fill();\r\n    }\r\n};\r\n\r\nconst moving = (balls) => {\r\n    for(let i = 0; i < balls.length; i++){\r\n        balls[i].setCoord();\r\n        balls[i].collision();\r\n        balls[i].direction();\r\n    }\r\n};\r\n\r\nclass Ball {\r\n    constructor(x, y, dx, dy) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.dx = dx;\r\n        this.dy = dy;\r\n        this.model = new _model__WEBPACK_IMPORTED_MODULE_0__[\"Model\"](x, y, dx, dy);\r\n        this.model.save();\r\n        this.getCoords = () =>{\r\n            return [this.x, this.y]\r\n        };\r\n        this.setCoord = () => {\r\n            this.x += this.dx;\r\n            this.y += this.dy;\r\n            if(this.x + this.dx >= 380 || this.x + this.dx === 20){\r\n                this.dx = -this.dx;\r\n            }\r\n            if(this.y + this.dy >= 580 || this.y + this.dy === 20){\r\n                this.dy = -this.dy;\r\n            }\r\n          /*console.log(this.dx);\r\n          console.log(this.dy);*/\r\n        };\r\n        this.move = (x,y) =>{\r\n            this.model.ctx.beginPath();\r\n            this.model.ctx.lineWidth = 1;\r\n            this.model.ctx.arc(x , y, 20, 0, 2 * Math.PI);\r\n            this.model.ctx.stroke();\r\n            this.model.ctx.fillStyle = 'red';\r\n            this.model.ctx.fill();\r\n        };\r\n        this.direction = () => {\r\n            this.model.x += this.model.dx;\r\n            this.model.y += this.model.dy;\r\n            if(this.model.x + this.model.dx >= 380 || this.model.x + this.model.dx === 20){\r\n                this.model.dx = -this.model.dx;\r\n            }\r\n            if(this.model.y + this.model.dy >= 580 || this.model.y + this.model.dy === 20){\r\n                this.model.dy = -this.model.dy;\r\n            }\r\n            this.move(this.model.x, this.model.y)\r\n        };\r\n        this.collision = () => {\r\n            for (let i = 0; i < model.allBalls.length; i++) {\r\n                if(model.allBalls[i].x !== this.x && model.allBalls[i].y !== this.y ) {\r\n                    let distanse = Math.sqrt(Math.pow(this.model.x - model.allBalls[i].model.x, 2) + Math.pow(this.model.y - model.allBalls[i].model.y, 2))\r\n                    console.log(distanse)\r\n                    if(distanse <= 40){\r\n                        this.model.dx = -this.model.dx;\r\n                        this.model.dy = -this.model.dy;\r\n                        console.log(123444)\r\n                    }\r\n                }\r\n            }\r\n        };\r\n        this.addBalls = (e) => {\r\n            let clickX = e.offsetX;\r\n            let clickY = e.offsetY;\r\n            let distanceFromCenter;\r\n            distanceFromCenter = Math.sqrt(Math.pow(this.model.x - clickX, 2) + Math.pow(this.model.y - clickY, 2));\r\n            if (distanceFromCenter < 20) {\r\n                console.log(model.allBalls);\r\n                this.model.save();\r\n                let newBall1 = new Ball(clickX + 40, clickY - 40, -this.model.dx , -this.model.dy );\r\n                model.allBalls.push(newBall1);\r\n                let newBall2 = new Ball(clickX - 40, clickY + 40, this.model.dx , -this.model.dy );\r\n                model.allBalls.push(newBall2);\r\n                let newBall3 = new Ball(clickX - 40, clickY - 40, -this.model.dx , this.model.dy );\r\n                model.allBalls.push(newBall3);\r\n                this.model.save();\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction clickCanvas(){\r\n    model.canvas.addEventListener('click', function (e) {\r\n        let length = model.allBalls.length\r\n        for(let i = 0; i < length; i++){\r\n            model.allBalls[i].addBalls(e);\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./js/logic.js?");

/***/ }),

/***/ "./js/model.js":
/*!*********************!*\
  !*** ./js/model.js ***!
  \*********************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Model\", function() { return Model; });\nclass Model {\r\n    constructor(x, y, dx, dy) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.dx = dx;\r\n        this.dy = dy;\r\n        this.canvas = document.getElementById('canvas');\r\n        this.ctx = document.getElementById('canvas').getContext('2d');\r\n        this.save = function(){\r\n            this.ctx.save()\r\n        };\r\n        this.allBalls = [];\r\n    }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/model.js?");

/***/ })

/******/ });