// string as index
class Veggie {
  [index: string]: number;
}
const v: Veggie = {"tomato":50, "onion":40, "lady's finger":25};
console.log(v["tomato"]); // 50  , same as console.log(v.onion)
console.log(v["onion"]); // 40
console.log(v["lady's finger"]); // 25
