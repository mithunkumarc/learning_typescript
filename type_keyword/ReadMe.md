TypeScript allows you to create custom types by using the keyword , by declaring a class or type an interface, or by declaring an enum.  
The keyword allows you to declare a new type or a type alias for the existing one.  

      // person need Height and weight in terms of foot and pound.
      type Foot = number;
      type Pound = number;

      type Patient = {
        name: string;
        height: Foot;
        weight: Pound;
      }

      let patient: Patient = {
        name: 'john',
        height: 5,
        weight: 100
      }

      console.log(patient.name);
      console.log(patient.height);
      console.log(patient.weight);
      

Error when you miss a field

        type Foot = number;
        type Pound = number;

        type Patient = {
          name: string;
          height: Foot;
          weight: Pound;
        }

        // error missing 'weight'
        let patient: Patient = {
          name: 'john',
          height: 5,
        }


solution : making field weight optional

        type Foot = number;
        type Pound = number;

        type Patient = {
          name: string;
          height: Foot;
          weight?: Pound;
        }

        // no error, weight is optional
        let patient: Patient = {
          name: 'john',
          height: 5,
        }



#### interface and class itself are custom type, still you can create alias of interface or class.

##### example:  creating alias interace Hero for interface Person

            // as both are custom type, no need to create new alias Hero.
            interface Person {
                name: string;
            }

            type Hero = Person;

            let actor: Hero = {name: "rajanna"};
