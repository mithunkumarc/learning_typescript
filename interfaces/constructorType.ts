
// type for any class which implements ClockInterface with ClockConstructor
// hour and minute
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

class Dock {
  constructor(h: number, m: number) {

  }
}


interface ClockInterface {
    tick(): void;
}

// Digital clock implements ClockInterface with hour minute in //constructor
class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}

function createClock(cc: ClockConstructor, hour: number, min: number){
  return new DigitalClock(hour,min);
}

const d = createClock(DigitalClock, 23,2)
d.tick()
