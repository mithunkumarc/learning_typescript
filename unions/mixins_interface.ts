/*
  In oop language , a mixin (or mix-in) is a class that contains methods for use by other classes without having 
  to be the parent class of those other classes. How those other classes gain access to the mixin's methods depends on the language. 
  Mixins are sometimes described as being "included" rather than "inherited".
*/

class One {
  one() {

  }
}
class Two {
  two() {

  }
}

// error : multiple inheritance not allowed in classes
// class three extends One, Two { }

// interface can extend multiple classes , inteface inherit method but not implementation
interface Three extends One, Two {

}

class Four implements Three {
  //class four has to give implementation
  one(){}
  two(){}
}
