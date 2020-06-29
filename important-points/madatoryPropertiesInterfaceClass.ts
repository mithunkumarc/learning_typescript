interface Person {
    name : string;
    contactNumber : number;
}

//below code raise error : Customer incorreclty implements Person
// contactNumber mandatory
class Customer implements Person{
    // if you make property optional here, you will get error as Person force u to make it mandatory
    constructor(public name : string, public contactNumber? : number){}   //contact number cannot be optional, remove ? symbol
}
