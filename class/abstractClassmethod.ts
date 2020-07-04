abstract class Car {
  abstract start(): boolean;
}
abstract class ElectricCar extends Car {
  abstract start(): boolean;
}
class Eco extends ElectricCar {
  start() {
    console.log('starting car...')
    return true;
  }
}
let e:Car = new Eco();
console.log(e.start());
