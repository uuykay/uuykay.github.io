function createBitmap({ from_queue, x, y, regX, regY }) {
  var bitmap = new createjs.Bitmap(from_queue);
  var bounds = bitmap.getBounds();
  if (regX) {
    bitmap.regX = regX;
  } else {
    bitmap.regX = bounds.width / 2;
  }

  if (regY) {
    bitmap.regY = regY;
  } else {
    bitmap.regY = bounds.height / 2;
  }

  bitmap.width = bounds.width;
  bitmap.height = bounds.height;
  bitmap.x = x;
  bitmap.y = y;

  return bitmap;
}

export default createBitmap;
