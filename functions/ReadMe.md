function is a datatype i js and ts:   

                let demo = () => "hello";
                console.log(typeof demo); // function
                
array row function with this keyword :   

                var person = {
                  name: "Brendan Eich",
                  hello: function(thing) {
                    console.log(this.name + " says hello " + thing);
                  },
                }

                // this:
                person.hello("world")

todo : 

        https://www.typescriptlang.org/docs/handbook/functions.html
