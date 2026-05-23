let details = {
  productName: "Mobile",
  price: 25000,
};
// console.log(details);
// console.log(details.productName);
// console.log(details.price);
// console.log(details["productName"]);
// console.log(details["price"]);
for (let i in details) {
  console.log(details[i]);
}
