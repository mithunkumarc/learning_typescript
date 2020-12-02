#### Mixins encourage code reuse and can be used to avoid the inheritance ambiguity that multiple inheritance can cause 

MIXINS : Similar to interface in java, mixins provides additinal features to existing class.

overview :

Sprite Class(need extra props) => Mixin Function Scale(Sprite) : adds extra props => New instance with Sprite props and extra props

In Typescript, The pattern(MIXIN) relies on using Generics with class inheritance to extend a base class.   
TypeScript’s best mixin support is done via the class expression pattern.  

example for implemeting mixin

Consider a class Sprite, This is class which we are going to apply mixin  

        // in old javascript, this sprite class is equavalent to constructor function
        // means, js object can be created using (constructor)function too.
        class Sprite {
          name = "";
          x = 0;
          y = 0;

          constructor(name: string) {
            this.name = name;
          }
        }

creating a custom type called Constructor function, Anonymous Function object assigned as value(Class Sprite will extend this)

        // type : used to create alias type
        // (...args: any[]) => {} : anonymous Function with arugments
        // args : constructor aruments ex: new Sprite("val1", "val2", ...)
        // we have chosen Constructor word to indicate it contains Constructor function 
        // to make sure that mixin function receiving a class , we need this type
        // doc says : The main responsibility is to declare, that the type being passed in is a class.
        type Constructor = new (...args: any[]) => {}; 
        
creating Mixin , we are declaring a function which receives a class and add methods(set/get methods)  
Below function will take Sprite class which extends Custom type (Constructor function) Constructor.  
New class created called Scaling and it inherits properties from Sprite returns new type/class.  
        
        // extends Constructor makes sure that Base is a class, not a value/other types
        function Scale<TBase extends Constructor>(Base: TBase) {
        // here Base must be of type constructor function, so TBase extends Constructor(function)
        // still need clarity on whey class Scaling needs class of type Constructor(function)
        // The main responsibility of type constructor is to make sure incoming param is a class.
          return class Scaling extends Base {
  
            _scale = 1;

            setScale(scale: number) {
              this._scale = scale;
            }

            get scale(): number {
              return this._scale;
            }
          };
        }        
        
        
Compose a new class from the Sprite class,  
with the Mixin Scale applier:  

        const EightBitSprite = Scale(Sprite);

        const flappySprite = new EightBitSprite("Bird");
        flappySprite.setScale(0.8);
        console.log(flappySprite.scale);        
