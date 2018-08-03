import getColours from "./getColours";

function drawWall(cavas_width, canvas_height, ground_height) {
  let wall = new createjs.Shape();
  let firebrick = getColours("firebrick");
  wall.graphics.beginStroke("#000");
  wall.graphics.beginFill(firebrick);
  let rect_width = cavas_width / 20;
  let rect_height = canvas_height / 2;
  wall.graphics.drawRect(0, 0, rect_width, rect_height);
  wall.x = cavas_width / 1.5;
  wall.y = canvas_height - (rect_height + ground_height);
  wall.width = rect_width;
  wall.height = rect_height;

  return wall;
}

export default drawWall;
