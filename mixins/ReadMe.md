MIXINS : Similar to interface in java, mixins provides additinal features to existing class.


In Typescript, The pattern(MIXIN) relies on using Generics with class inheritance to extend a base class.   
TypeScript’s best mixin support is done via the class expression pattern.  

example for implemeting mixin

Consider a class Sprite, This is class which we are going to apply mixin  

        class Sprite {
          name = "";
          x = 0;
          y = 0;

          constructor(name: string) {
            this.name = name;
          }
        }

creating a custom type called Constructor, Anonymous Function object assigned as value

        // type : used to create alias type
        // (...args: any[]) => {} : anonymous Function
        type Constructor = new (...args: any[]) => {};
        
creating Mixin , we are declaring a function which receives a class and add methods(set/get methods)

        function Scale<TBase extends Constructor>(Base: TBase) {
          return class Scaling extends Base {
            // Mixins may not declare private/protected properties
            // however, you can use ES2020 private fields
            _scale = 1;

            setScale(scale: number) {
              this._scale = scale;
            }

            get scale(): number {
              return this._scale;
            }
          };
        }        
