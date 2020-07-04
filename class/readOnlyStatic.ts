// static readonly
// similar to static final in java

class Car {
  static readonly speedLimit = 100; // i tried to initialize in constructor, not possible , even in java too
}
console.log(Car.speedLimit);
