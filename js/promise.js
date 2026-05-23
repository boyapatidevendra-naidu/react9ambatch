// console.log("start");
// let myPromise = new Promise((res, rej) => {
//   let lunch = true;
//   if (lunch) {
//     res("Fulfilled");
//   } else {
//     rej("Rejected");
//   }
// });
// console.log(myPromise);

// let data = async () => {
//   let response = await  myPromise;
//   console.log(response);
// };
// data();
// console.log("end");

// ! Fetching the data by using the fetch method

let products = async () => {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let convertedData = await response.json();
    console.log(convertedData);
    convertedData.map((product) => {
      let p = document.createElement("p");
      let image = document.createElement("img");
      p.innerHTML = product.title;
      image.src = product.image;
      document.body.append(p, image);
      console.log(p.innerHTML);
    });
  } catch (error) {
    console.log(error);
  }
};
products();
