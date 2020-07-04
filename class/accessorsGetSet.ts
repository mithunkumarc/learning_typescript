// property made private
// to read and write property ,get set accessors created.

// set : helps in validation, 
// get ; returns processed data/value

const passwordLength = 5;
class Wifi {
  private _password : string;
  get password() {
    return this._password;
  }
  // can be done validation
  set password(pwd: string) {
    if (pwd.length >= passwordLength){
      this._password = pwd;
    } else {
      console.log("password length must be at least ", passwordLength)
    }
    
  }
}

let w:Wifi = new Wifi();
w.password = "123"; // password length must be at least 5
console.log(w.password); // undefined 
