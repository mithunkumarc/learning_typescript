interface Clock{
  hour:number;
  minute:number;
  setTime(hour: number, minute: number): void;
}


class WallClock implements Clock {
  // dont know why , you cant mark properties as private
  constructor(public hour: number, public minute: number) {
  }
  setTime(hour: number, minute: number) {
    this.hour = hour;
    this.minute = minute;
  }
}
