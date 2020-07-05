/*
  approach : 
  your class will be subclassed with new class and 
  your class properties will be added to new class with new 
  properties.

 */


/*
Steps to create mixin
[A mixin is] a function that
1. takes a constructor,
2. creates a class that extends that constructor with new functionality
3. returns the new class
*/

// Needed for all mixins
// Constructor : user defined name given to type
// T = {} : any object
// 
type Constructor<T = {}> = new (...args: any[]) => T;

////////////////////
// Example mixins
////////////////////

// A mixin that adds a property
function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now();
  };
}

// a mixin that adds a property and methods
function Activatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isActivated = false;

    activate() {
      this.isActivated = true;
    }

    deactivate() {
      this.isActivated = false;
    }
  };
}



////////////////////
// Usage to compose classes
////////////////////

// Simple class
class User {
  name = '';
}

// User that is Timestamped
// TimestampedUser = User properties + new properties
const TimestampedUser = Timestamped(User);

// User that is Timestamped and Activatable
// TimestampedActivatableUser = user properties + new properties
const TimestampedActivatableUser = Timestamped(Activatable(User));

////////////////////
// Using the composed classes
////////////////////

const timestampedUserExample = new TimestampedUser();
console.log(timestampedUserExample.timestamp);

const timestampedActivatableUserExample = new TimestampedActivatableUser();
console.log(timestampedActivatableUserExample.timestamp);
console.log(timestampedActivatableUserExample.isActivated)
