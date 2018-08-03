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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _drawGround = __webpack_require__(/*! ./modules/drawGround */ \"./src/modules/drawGround.js\");\n\nvar _drawGround2 = _interopRequireDefault(_drawGround);\n\nvar _drawWall = __webpack_require__(/*! ./modules/drawWall */ \"./src/modules/drawWall.js\");\n\nvar _drawWall2 = _interopRequireDefault(_drawWall);\n\nvar _createCar = __webpack_require__(/*! ./modules/createCar */ \"./src/modules/createCar.js\");\n\nvar _createCar2 = _interopRequireDefault(_createCar);\n\nvar _createText = __webpack_require__(/*! ./modules/createText */ \"./src/modules/createText.js\");\n\nvar _createText2 = _interopRequireDefault(_createText);\n\nvar _createBitmap = __webpack_require__(/*! ./modules/createBitmap */ \"./src/modules/createBitmap.js\");\n\nvar _createBitmap2 = _interopRequireDefault(_createBitmap);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Variables to track\nvar stage;\nvar queue;\nvar ground;\nvar wall;\nvar car;\nvar car_type;\nvar canvas_width = 1600;\nvar canvas_height = 900;\nvar left_key_down = false;\nvar right_key_down = false;\n\n// Scoreboard\nvar collided = false;\nvar text_kinetic_energy;\nvar text_work;\nvar ke_score;\nvar w_score;\nvar car_score;\n\n// Scene control\nvar scene_number = 1;\n\n// Controls\nvar ARROW_KEY_LEFT = 37;\nvar ARROW_KEY_RIGHT = 39;\n\nfunction preload() {\n  queue = new createjs.LoadQueue();\n  queue.addEventListener(\"complete\", init);\n  queue.loadManifest([{ id: \"1_game_title\", src: \"images/1_game_title.png\" }, { id: \"1_game_graphic\", src: \"images/1_game_graphic.png\" }, { id: \"intro_button\", src: \"images/intro_button.png\" }, { id: \"intro_text\", src: \"images/intro_text.png\" }, { id: \"play_button\", src: \"images/play_button.png\" }, { id: \"old_car_pick\", src: \"images/old_car_pick.png\" }, { id: \"new_car_pick\", src: \"images/new_car_pick.png\" }, { id: \"old_car_scaled\", src: \"images/old_car_scaled.png\" }, { id: \"new_car_scaled\", src: \"images/new_car_scaled.png\" }, { id: \"text_kinetic_energy\", src: \"images/text_kinetic_energy.png\" }, { id: \"text_work\", src: \"images/text_work.png\" }, { id: \"text_low\", src: \"images/text_low.png\" }, { id: \"text_high\", src: \"images/text_high.png\" }, { id: \"text_zero\", src: \"images/text_zero.png\" }, { id: \"score_old_car\", src: \"images/score_old_car.png\" }, { id: \"score_new_car\", src: \"images/score_new_car.png\" }]);\n}\n\nfunction init() {\n  var target = document.getElementById(\"canvas\");\n  stage = new createjs.Stage(target);\n\n  //Set up the updating function\n  createjs.Ticker.setFPS(60);\n  createjs.Ticker.addEventListener(\"tick\", tick);\n\n  // 1) Splash screen\n  scene1SplashScreen();\n\n  // Select a car\n\n  // Set up a new game\n  // startGame();\n}\n\nfunction scene1SplashScreen() {\n  // Title\n\n  var game_title = (0, _createBitmap2.default)({\n    from_queue: queue.getResult(\"1_game_title\"),\n    x: canvas_width / 2,\n    y: 80\n  });\n  stage.addChild(game_title);\n\n  // Graphic\n  var game_graphic = (0, _createBitmap2.default)({\n    from_queue: queue.getResult(\"1_game_graphic\"),\n    x: canvas_width / 2,\n    y: canvas_height / 2.3\n  });\n  stage.addChild(game_graphic);\n\n  // Intro button\n  var intro_button = (0, _createBitmap2.default)({\n    from_queue: queue.getResult(\"intro_button\"),\n    x: canvas_width / 2,\n    y: canvas_height / 1.2\n  });\n  stage.addChild(intro_button);\n  pulseItem(intro_button);\n\n  intro_button.addEventListener(\"click\", function () {\n    intro_button.removeAllEventListeners();\n    stage.removeAllChildren();\n    scene_number = 2;\n    // startGame();\n    scene2IntroScreen();\n  });\n}\n\nfunction scene2IntroScreen() {\n  // Intro text\n  var intro_text = (0, _createBitmap2.default)({\n    from_queue: queue.getResult(\"intro_text\"),\n    x: canvas_width / 2,\n    y: canvas_height / 4\n  });\n  stage.addChild(intro_text);\n\n  // Play button\n  var play_button = (0, _createBitmap2.default)({\n    from_queue: queue.getResult(\"play_button\"),\n    x: canvas_width / 2,\n    y: canvas_height / 1.2\n  });\n  stage.addChild(play_button);\n  pulseItem(play_button);\n  play_button.addEventListener(\"click\", function () {\n    play_button.removeAllEventListeners();\n    stage.removeAllChildren();\n    scene_number = 3;\n    scene3PickCar();\n  });\n}\n\nfunction scene3PickCar() {\n  // Old Car\n  var old_car_pick = (0, _createBitmap2.default)({\n    from_queue: queue.getResult(\"old_car_pick\"),\n    x: canvas_width / 3,\n    y: canvas_height / 2\n  });\n  stage.addChild(old_car_pick);\n  old_car_pick.addEventListener(\"click\", function () {\n    old_car_pick.removeAllEventListeners();\n    stage.removeAllChildren();\n    scene_number = 4;\n    startGame(\"old_car_scaled\");\n  });\n\n  // New Car\n  var new_car_pick = (0, _createBitmap2.default)({\n    from_queue: queue.getResult(\"new_car_pick\"),\n    x: canvas_width / 1.5,\n    y: canvas_height / 2\n  });\n  stage.addChild(new_car_pick);\n  new_car_pick.addEventListener(\"click\", function () {\n    new_car_pick.removeAllEventListeners();\n    stage.removeAllChildren();\n    scene_number = 4;\n    startGame(\"new_car_scaled\");\n  });\n}\n\n// Set up the ground, wall and car that was chosen.\nfunction startGame(car_type_select) {\n  console.log(\"startGame\");\n\n  ground = (0, _drawGround2.default)(canvas_width, canvas_height);\n  stage.addChild(ground);\n\n  wall = (0, _drawWall2.default)(canvas_width, canvas_height, ground.height);\n  stage.addChild(wall);\n\n  text_kinetic_energy = (0, _createText2.default)({\n    queue: queue,\n    text_type: \"text_kinetic_energy\",\n    x: 20,\n    y: 20\n  });\n  stage.addChild(text_kinetic_energy);\n\n  ke_score = (0, _createText2.default)({\n    queue: queue,\n    text_type: \"text_zero\",\n    x: text_kinetic_energy.x,\n    y: 70\n  });\n  stage.addChild(ke_score);\n\n  text_work = (0, _createText2.default)({\n    queue: queue,\n    text_type: \"text_work\",\n    x: canvas_width / 2 - 20,\n    y: 20\n  });\n  stage.addChild(text_work);\n\n  w_score = (0, _createText2.default)({\n    queue: queue,\n    text_type: \"text_zero\",\n    x: text_work.x,\n    y: 70\n  });\n  stage.addChild(w_score);\n\n  car_type = car_type_select;\n  car = (0, _createCar2.default)({ queue: queue, car_type: car_type, x: 20, y: canvas_height - ground.height });\n  stage.addChild(car);\n\n  window.onkeydown = moveCar;\n  window.onkeyup = stopCar;\n}\n\nfunction moveCar(e) {\n  e = !e ? window.event : e;\n  switch (e.keyCode) {\n    case ARROW_KEY_LEFT:\n      left_key_down = true;\n      break;\n    case ARROW_KEY_RIGHT:\n      right_key_down = true;\n      break;\n  }\n}\nfunction stopCar(e) {\n  e = !e ? window.event : e;\n  switch (e.keyCode) {\n    case 37:\n      left_key_down = false;\n      break;\n    case 39:\n      right_key_down = false;\n      break;\n  }\n}\n\n//Does the pulsating effect\nfunction pulseItem(item) {\n  createjs.Tween.get(item, { loop: true }).to({ scaleX: 1.2, scaleY: 1.2 }, 900).to({ scaleX: 1, scaleY: 1 }, 900);\n}\n\n// Actions\nfunction movingAndHasntCollided() {\n  // Change the score high if moving and hasn't collided\n  if (right_key_down && !collided && ke_score.text_type !== \"text_high\") {\n    stage.removeChild(ke_score);\n    ke_score = (0, _createText2.default)({\n      queue: queue,\n      text_type: \"text_high\",\n      x: text_kinetic_energy.x,\n      y: 70\n    });\n    stage.addChild(ke_score);\n    pulseItem(ke_score);\n  }\n}\n\nfunction stoppedAndHasCollided() {\n  // Change the score to zero if has collided\n  if (collided && ke_score.text_type !== \"text_zero\") {\n    stage.removeChild(ke_score);\n    ke_score = (0, _createText2.default)({\n      queue: queue,\n      text_type: \"text_zero\",\n      x: text_kinetic_energy.x,\n      y: 70\n    });\n    stage.addChild(ke_score);\n\n    stage.removeChild(w_score);\n    w_score = (0, _createText2.default)({\n      queue: queue,\n      text_type: \"text_high\",\n      x: text_work.x,\n      y: 70\n    });\n    stage.addChild(w_score);\n  }\n}\n\nfunction afterCollision() {\n  right_key_down = false;\n  left_key_down = false;\n  window.onkeydown = null;\n  var text_type;\n  if (car_type === \"old_car_scaled\") {\n    text_type = \"score_old_car\";\n  } else if (car_type === \"new_car_scaled\") {\n    text_type = \"score_new_car\";\n  }\n\n  car_score = (0, _createText2.default)({\n    queue: queue,\n    text_type: text_type,\n    x: 300,\n    y: 70\n  });\n  car_score.alpha = 0;\n  stage.addChild(car_score);\n  createjs.Tween.get(car_score).to({ alpha: 1 }, 1000);\n\n  // Play button\n  var play_button = (0, _createBitmap2.default)({\n    from_queue: queue.getResult(\"play_button\"),\n    x: canvas_width / 1.3,\n    y: canvas_height / 2\n  });\n  stage.addChild(play_button);\n  play_button.addEventListener(\"click\", function () {\n    play_button.removeAllEventListeners();\n    stage.removeAllChildren();\n    scene_number = 3;\n    scene3PickCar();\n  });\n}\n\nfunction update() {\n  // Car updaters\n  if (scene_number === 4 && car) {\n    var nextX = car.x;\n    // Left movement\n    if (left_key_down) {\n      nextX = car.x - 10;\n      // Left edge of screen\n      if (nextX < 0) {\n        nextX = 0;\n      }\n    }\n    // Right movement\n    else if (right_key_down) {\n        nextX = car.x + 10;\n\n        // The wall\n        if (nextX + car.width > wall.x) {\n          nextX = wall.x - car.width;\n          collided = true;\n\n          if (car_type === \"old_car_scaled\") {\n            createjs.Tween.get(car).to({ x: car.x - 150 }, 200).to({ scaleX: 0.9 }, 300).call(afterCollision);\n          } else if (car_type === \"new_car_scaled\") {\n            createjs.Tween.get(car).to({ scaleX: 0.7 }, 300).call(afterCollision);\n          }\n        }\n\n        // Right edge of screen\n        if (nextX > stage.canvas.width - car.width) {\n          nextX = stage.canvas.width - car.width;\n        }\n      }\n    car.nextX = nextX;\n\n    movingAndHasntCollided();\n    stoppedAndHasCollided();\n\n    if (!ke_score.pulsing && ke_score.text_type === \"text_high\") {\n      pulseItem(ke_score);\n      ke_score.pulsing = true;\n    }\n\n    if (!w_score.pulsing && w_score.text_type === \"text_high\") {\n      pulseItem(w_score);\n      w_score.pulsing = true;\n    }\n  }\n}\n\nfunction render() {\n  if (scene_number === 4 && car) {\n    car.x = car.nextX;\n  }\n}\n\nfunction tick(e) {\n  update();\n  render();\n  stage.update();\n}\n\nwindow.onload = function () {\n  preload();\n};\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modules/createBitmap.js":
/*!*************************************!*\
  !*** ./src/modules/createBitmap.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction createBitmap(_ref) {\n  var from_queue = _ref.from_queue,\n      x = _ref.x,\n      y = _ref.y,\n      regX = _ref.regX,\n      regY = _ref.regY;\n\n  var bitmap = new createjs.Bitmap(from_queue);\n  var bounds = bitmap.getBounds();\n  if (regX) {\n    bitmap.regX = regX;\n  } else {\n    bitmap.regX = bounds.width / 2;\n  }\n\n  if (regY) {\n    bitmap.regY = regY;\n  } else {\n    bitmap.regY = bounds.height / 2;\n  }\n\n  bitmap.width = bounds.width;\n  bitmap.height = bounds.height;\n  bitmap.x = x;\n  bitmap.y = y;\n\n  return bitmap;\n}\n\nexports.default = createBitmap;\n\n//# sourceURL=webpack:///./src/modules/createBitmap.js?");

/***/ }),

/***/ "./src/modules/createCar.js":
/*!**********************************!*\
  !*** ./src/modules/createCar.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction createCar(_ref) {\n  var queue = _ref.queue,\n      car_type = _ref.car_type,\n      x = _ref.x,\n      y = _ref.y;\n\n  var car = new createjs.Bitmap(queue.getResult(car_type));\n  var car_bounds = car.getBounds();\n  car.width = car_bounds.width;\n  car.height = car_bounds.height;\n  car.regY = car.height;\n  car.x = x;\n  car.y = y;\n\n  return car;\n}\n\nexports.default = createCar;\n\n//# sourceURL=webpack:///./src/modules/createCar.js?");

/***/ }),

/***/ "./src/modules/createText.js":
/*!***********************************!*\
  !*** ./src/modules/createText.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction createText(_ref) {\n  var queue = _ref.queue,\n      text_type = _ref.text_type,\n      x = _ref.x,\n      y = _ref.y;\n\n  var text = new createjs.Bitmap(queue.getResult(text_type));\n  var text_bounds = text.getBounds();\n  text.width = text_bounds.width;\n  text.height = text_bounds.height;\n  text.x = x;\n  text.y = y;\n  text.text_type = text_type;\n\n  return text;\n}\n\nexports.default = createText;\n\n//# sourceURL=webpack:///./src/modules/createText.js?");

/***/ }),

/***/ "./src/modules/drawGround.js":
/*!***********************************!*\
  !*** ./src/modules/drawGround.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _getColours = __webpack_require__(/*! ./getColours */ \"./src/modules/getColours.js\");\n\nvar _getColours2 = _interopRequireDefault(_getColours);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction drawGround(cavas_width, canvas_height) {\n  var ground = new createjs.Shape();\n  var darkgray = (0, _getColours2.default)(\"darkgray\");\n  ground.graphics.beginStroke(\"#000\");\n  ground.graphics.beginFill(darkgray);\n  var rect_width = cavas_width;\n  var rect_height = canvas_height / 5;\n  ground.graphics.drawRect(0, 0, rect_width, rect_height);\n  ground.x = 0;\n  ground.y = canvas_height - rect_height;\n  ground.width = rect_width;\n  ground.height = rect_height;\n\n  return ground;\n}\n\nexports.default = drawGround;\n\n//# sourceURL=webpack:///./src/modules/drawGround.js?");

/***/ }),

/***/ "./src/modules/drawWall.js":
/*!*********************************!*\
  !*** ./src/modules/drawWall.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _getColours = __webpack_require__(/*! ./getColours */ \"./src/modules/getColours.js\");\n\nvar _getColours2 = _interopRequireDefault(_getColours);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction drawWall(cavas_width, canvas_height, ground_height) {\n  var wall = new createjs.Shape();\n  var firebrick = (0, _getColours2.default)(\"firebrick\");\n  wall.graphics.beginStroke(\"#000\");\n  wall.graphics.beginFill(firebrick);\n  var rect_width = cavas_width / 20;\n  var rect_height = canvas_height / 2;\n  wall.graphics.drawRect(0, 0, rect_width, rect_height);\n  wall.x = cavas_width / 1.5;\n  wall.y = canvas_height - (rect_height + ground_height);\n  wall.width = rect_width;\n  wall.height = rect_height;\n\n  return wall;\n}\n\nexports.default = drawWall;\n\n//# sourceURL=webpack:///./src/modules/drawWall.js?");

/***/ }),

/***/ "./src/modules/getColours.js":
/*!***********************************!*\
  !*** ./src/modules/getColours.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction getColours(colour) {\n  var hexcode = void 0;\n  if (colour === \"darkgray\") {\n    hexcode = \"#A9A9A9\";\n  } else if (colour === \"firebrick\") {\n    hexcode = \"#B22222\";\n  }\n\n  return hexcode;\n}\n\nexports.default = getColours;\n\n//# sourceURL=webpack:///./src/modules/getColours.js?");

/***/ })

/******/ });