class Car {
  // variable
  static companyName: string = "maruthi";
  // static method
  static getCompanyName() {
    return Car.companyName;
  }
}

console.log(Car.companyName);
console.log(Car.getCompanyName());
