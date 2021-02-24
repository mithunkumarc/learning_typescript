
        let vAny: any = 10;          // We can assign anything to any
        let vUnknown: unknown =  10; // We can assign anything to unknown just like any 

        let s1: string = vAny;     // Any is assignable to anything, be ready to face runtime error, eg : s1.length
        let s2: string = vUnknown; // Invalid we can't assign vUnknown to any other type (without an explicit assertion)

        vAny.method();     // ok anything goes with any, may get runtime error, method may not exist
        vUnknown.method(); // not ok, we don't know anything about this variable
