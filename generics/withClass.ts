class Data<T> {
  _t:T;
  get t() {
    return this._t;
  }
  set t(n:T) {
    this._t = n;
  }
}

let d:Data<string> = new Data();
d.t = "hello";
console.log(d.t); // hello

let d1:Data<number> = new Data();
d1.t = 23;
console.log(d1.t); // 23
