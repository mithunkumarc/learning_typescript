#### Nominal type system/ name based type system

nominative type system (or name-based type system) 
if compatibility and equivalence of data types is determined by explicit declarations and/or the name of the types. 

        // in java, variable type and object (value type) must be same, or atleast subtype

        class Person {
          String name;
        }
        class Customer {
          String name;
        }

        Person p = new Customer(); // error not possible in java


#### Typescript follows structural type system

#### structural type system (or property-based type system) 

It is a major class of type system in which type compatibility and equivalence are determined by the type's actual structure or 
definition and not by other characteristics such as its name or place of declaration

        class Person {
            constructor(public name: string){
            }
        }
        
        class Customer {
            constructor(public name: string){
            }
        }

        // LOL, No errors: the type structures are the same
        let customer: Customer = new Person("rajath");
