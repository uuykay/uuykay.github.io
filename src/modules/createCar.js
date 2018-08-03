function createCar({ queue, car_type, x, y }) {
  var car = new createjs.Bitmap(queue.getResult(car_type));
  var car_bounds = car.getBounds();
  car.width = car_bounds.width;
  car.height = car_bounds.height;
  car.regY = car.height;
  car.x = x;
  car.y = y;

  return car;
}

export default createCar;
