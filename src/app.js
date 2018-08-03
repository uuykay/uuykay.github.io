import drawGround from "./modules/drawGround";
import drawWall from "./modules/drawWall";
import createCar from "./modules/createCar";
import createText from "./modules/createText";
import createBitmap from "./modules/createBitmap";

// Variables to track
var stage;
var queue;
var ground;
var wall;
var car;
var car_type;
var canvas_width = 1600;
var canvas_height = 900;
var left_key_down = false;
var right_key_down = false;

// Scoreboard
var collided = false;
var text_kinetic_energy;
var text_work;
var ke_score;
var w_score;
var car_score;

// Scene control
var scene_number = 1;

// Controls
const ARROW_KEY_LEFT = 37;
const ARROW_KEY_RIGHT = 39;

function preload() {
  queue = new createjs.LoadQueue();
  queue.addEventListener("complete", init);
  queue.loadManifest([
    { id: "1_game_title", src: "images/1_game_title.png" },
    { id: "1_game_graphic", src: "images/1_game_graphic.png" },
    { id: "intro_button", src: "images/intro_button.png" },
    { id: "intro_text", src: "images/intro_text.png" },
    { id: "play_button", src: "images/play_button.png" },
    { id: "old_car_pick", src: "images/old_car_pick.png" },
    { id: "new_car_pick", src: "images/new_car_pick.png" },
    { id: "old_car_scaled", src: "images/old_car_scaled.png" },
    { id: "new_car_scaled", src: "images/new_car_scaled.png" },
    { id: "text_kinetic_energy", src: "images/text_kinetic_energy.png" },
    { id: "text_work", src: "images/text_work.png" },
    { id: "text_low", src: "images/text_low.png" },
    { id: "text_high", src: "images/text_high.png" },
    { id: "text_zero", src: "images/text_zero.png" },
    { id: "score_old_car", src: "images/score_old_car.png" },
    { id: "score_new_car", src: "images/score_new_car.png" }
  ]);
}

function init() {
  let target = document.getElementById("canvas");
  stage = new createjs.Stage(target);

  //Set up the updating function
  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", tick);

  // 1) Splash screen
  scene1SplashScreen();

  // Select a car

  // Set up a new game
  // startGame();
}

function scene1SplashScreen() {
  // Title

  var game_title = createBitmap({
    from_queue: queue.getResult("1_game_title"),
    x: canvas_width / 2,
    y: 80
  });
  stage.addChild(game_title);

  // Graphic
  var game_graphic = createBitmap({
    from_queue: queue.getResult("1_game_graphic"),
    x: canvas_width / 2,
    y: canvas_height / 2.3
  });
  stage.addChild(game_graphic);

  // Intro button
  var intro_button = createBitmap({
    from_queue: queue.getResult("intro_button"),
    x: canvas_width / 2,
    y: canvas_height / 1.2
  });
  stage.addChild(intro_button);
  pulseItem(intro_button);

  intro_button.addEventListener("click", function() {
    intro_button.removeAllEventListeners();
    stage.removeAllChildren();
    scene_number = 2;
    // startGame();
    scene2IntroScreen();
  });
}

function scene2IntroScreen() {
  // Intro text
  var intro_text = createBitmap({
    from_queue: queue.getResult("intro_text"),
    x: canvas_width / 2,
    y: canvas_height / 4
  });
  stage.addChild(intro_text);

  // Play button
  var play_button = createBitmap({
    from_queue: queue.getResult("play_button"),
    x: canvas_width / 2,
    y: canvas_height / 1.2
  });
  stage.addChild(play_button);
  pulseItem(play_button);
  play_button.addEventListener("click", function() {
    play_button.removeAllEventListeners();
    stage.removeAllChildren();
    scene_number = 3;
    scene3PickCar();
  });
}

function scene3PickCar() {
  // Old Car
  var old_car_pick = createBitmap({
    from_queue: queue.getResult("old_car_pick"),
    x: canvas_width / 3,
    y: canvas_height / 2
  });
  stage.addChild(old_car_pick);
  old_car_pick.addEventListener("click", function() {
    old_car_pick.removeAllEventListeners();
    stage.removeAllChildren();
    scene_number = 4;
    startGame("old_car_scaled");
  });

  // New Car
  var new_car_pick = createBitmap({
    from_queue: queue.getResult("new_car_pick"),
    x: canvas_width / 1.5,
    y: canvas_height / 2
  });
  stage.addChild(new_car_pick);
  new_car_pick.addEventListener("click", function() {
    new_car_pick.removeAllEventListeners();
    stage.removeAllChildren();
    scene_number = 4;
    startGame("new_car_scaled");
  });
}

// Set up the ground, wall and car that was chosen.
function startGame(car_type_select) {
  console.log("startGame");
  collided = false;
  ground = drawGround(canvas_width, canvas_height);
  stage.addChild(ground);

  wall = drawWall(canvas_width, canvas_height, ground.height);
  stage.addChild(wall);

  text_kinetic_energy = createText({
    queue,
    text_type: "text_kinetic_energy",
    x: 20,
    y: 20
  });
  stage.addChild(text_kinetic_energy);

  ke_score = createText({
    queue,
    text_type: "text_zero",
    x: text_kinetic_energy.x,
    y: 70
  });
  stage.addChild(ke_score);

  text_work = createText({
    queue,
    text_type: "text_work",
    x: canvas_width / 2 - 20,
    y: 20
  });
  stage.addChild(text_work);

  w_score = createText({
    queue,
    text_type: "text_zero",
    x: text_work.x,
    y: 70
  });
  stage.addChild(w_score);

  car_type = car_type_select;
  car = createCar({ queue, car_type, x: 20, y: canvas_height - ground.height });
  stage.addChild(car);

  window.onkeydown = moveCar;
  window.onkeyup = stopCar;
}

function moveCar(e) {
  e = !e ? window.event : e;
  switch (e.keyCode) {
    case ARROW_KEY_LEFT:
      left_key_down = true;
      break;
    case ARROW_KEY_RIGHT:
      right_key_down = true;
      break;
  }
}
function stopCar(e) {
  e = !e ? window.event : e;
  switch (e.keyCode) {
    case 37:
      left_key_down = false;
      break;
    case 39:
      right_key_down = false;
      break;
  }
}

//Does the pulsating effect
function pulseItem(item) {
  createjs.Tween.get(item, { loop: true })
    .to({ scaleX: 1.2, scaleY: 1.2 }, 900)
    .to({ scaleX: 1, scaleY: 1 }, 900);
}

// Actions
function movingAndHasntCollided() {
  // Change the score high if moving and hasn't collided
  if (right_key_down && !collided && ke_score.text_type !== "text_high") {
    stage.removeChild(ke_score);
    ke_score = createText({
      queue,
      text_type: "text_high",
      x: text_kinetic_energy.x,
      y: 70
    });
    stage.addChild(ke_score);
    pulseItem(ke_score);
  }
}

function stoppedAndHasCollided() {
  // Change the score to zero if has collided
  if (collided && ke_score.text_type !== "text_zero") {
    stage.removeChild(ke_score);
    ke_score = createText({
      queue,
      text_type: "text_zero",
      x: text_kinetic_energy.x,
      y: 70
    });
    stage.addChild(ke_score);

    stage.removeChild(w_score);
    w_score = createText({
      queue,
      text_type: "text_high",
      x: text_work.x,
      y: 70
    });
    stage.addChild(w_score);
  }
}

function afterCollision() {
  right_key_down = false;
  left_key_down = false;
  window.onkeydown = null;
  var text_type;
  if (car_type === "old_car_scaled") {
    text_type = "score_old_car";
  } else if (car_type === "new_car_scaled") {
    text_type = "score_new_car";
  }

  car_score = createText({
    queue,
    text_type,
    x: 300,
    y: 70
  });
  car_score.alpha = 0;
  stage.addChild(car_score);
  createjs.Tween.get(car_score).to({ alpha: 1 }, 1000);

  // Play button
  var play_button = createBitmap({
    from_queue: queue.getResult("play_button"),
    x: canvas_width / 1.3,
    y: canvas_height / 2
  });
  stage.addChild(play_button);
  play_button.addEventListener("click", function() {
    play_button.removeAllEventListeners();
    stage.removeAllChildren();
    scene_number = 3;
    scene3PickCar();
  });
}

function update() {
  // Car updaters
  if (scene_number === 4 && car) {
    var nextX = car.x;
    // Left movement
    if (left_key_down) {
      nextX = car.x - 10;
      // Left edge of screen
      if (nextX < 0) {
        nextX = 0;
      }
    }
    // Right movement
    else if (right_key_down) {
      nextX = car.x + 10;

      // The wall
      if (nextX + car.width > wall.x) {
        nextX = wall.x - car.width;
        collided = true;

        if (car_type === "old_car_scaled") {
          createjs.Tween.get(car)
            .to({ x: car.x - 150 }, 200)
            .to({ scaleX: 0.9 }, 300)
            .call(afterCollision);
        } else if (car_type === "new_car_scaled") {
          createjs.Tween.get(car)
            .to({ scaleX: 0.7 }, 300)
            .call(afterCollision);
        }
      }

      // Right edge of screen
      if (nextX > stage.canvas.width - car.width) {
        nextX = stage.canvas.width - car.width;
      }
    }
    car.nextX = nextX;

    movingAndHasntCollided();
    stoppedAndHasCollided();

    if (!ke_score.pulsing && ke_score.text_type === "text_high") {
      pulseItem(ke_score);
      ke_score.pulsing = true;
    }

    if (!w_score.pulsing && w_score.text_type === "text_high") {
      pulseItem(w_score);
      w_score.pulsing = true;
    }
  }
}

function render() {
  if (scene_number === 4 && car) {
    car.x = car.nextX;
  }
}

function tick(e) {
  update();
  render();
  stage.update();
}

window.onload = function() {
  preload();
};
