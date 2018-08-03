import getColours from "./getColours";

function drawGround(cavas_width, canvas_height) {
  let ground = new createjs.Shape();
  let darkgray = getColours("darkgray");
  ground.graphics.beginStroke("#000");
  ground.graphics.beginFill(darkgray);
  let rect_width = cavas_width;
  let rect_height = canvas_height / 5;
  ground.graphics.drawRect(0, 0, rect_width, rect_height);
  ground.x = 0;
  ground.y = canvas_height - rect_height;
  ground.width = rect_width;
  ground.height = rect_height;

  return ground;
}

export default drawGround;
