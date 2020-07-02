// tax has default value 10
// tax : default parameter, but you can override
function purchaseProduct(price : number, tax : number = 10) {
  return price + ((tax/price) * 100);
}
console.log(purchaseProduct(100)) // 110
const discountOffer = 5;
// tax value overrided by discountOffer
console.log(purchaseProduct(100,discountOffer)) // 105

