interface Area {
  city: string
}

interface Customer{
  name:string;
  bills: number[];
  location: Area    // nested interface
}

function printCustomerInfo(customer: Customer) {
  console.log(customer);
}

let customer = {
              name: 'raj', 
              bills: [1,2,3,4],
              location : {
                city : 'bangalore'
              }
            }

printCustomerInfo(customer);
