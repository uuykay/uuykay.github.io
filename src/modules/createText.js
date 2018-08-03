function createText({ queue, text_type, x, y }) {
  var text = new createjs.Bitmap(queue.getResult(text_type));
  var text_bounds = text.getBounds();
  text.width = text_bounds.width;
  text.height = text_bounds.height;
  text.x = x;
  text.y = y;
  text.text_type = text_type;

  return text;
}

export default createText;
