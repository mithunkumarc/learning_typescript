class Point {
  constructor(private x?: number, private y?:number) {
  }
  mark(): void {
    console.log('x : ',this.x);
    console.log('y : ',this.y);
  }
}
const p1 = new Point();
p1.mark();  // undefined, undefined
const p2 = new Point(3);
p2.mark();  //x : 3, y : undefined
const p3 = new Point(4,5);
p3.mark();  //x : 4, y : 5
