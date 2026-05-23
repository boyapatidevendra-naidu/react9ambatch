// let arr = [1, 2, 3, 4];
// let arr1 = [5, 6, 7, 8];

// console.log(arr.concat(arr1));

// let arr3 = [...arr, ...arr1];
// console.log(arr3);

// function details(name, age, ...rest) {
//   console.log(name);
//   console.log(age);
//   console.log(rest);
// }

// details("ram", 52, "hyd", 1234567890);

// let userName = "asfjakshjn"

// let data = [...userName]
// console.log(data)

// ! Destructuring

// let roomShifting = ["clothes", "snacks", "creams", "protein", "bucket"];

// let [a, b, c, d, e] = roomShifting;

// console.log(a);
// console.log(e);

// let [clothes, , creams, , bucket] = roomShifting;
// console.log(creams);
// console.log(bucket);
// console.log(clothes, bucket);

// let [f,g,...rest] = roomShifting
// console.log(f)
// console.log(g)
// console.log(rest[1])

// ! Object Destructuring

let details = {
  name: "ravi",
  age: 25,
  place: "hyd",
  skills: {
    frontend: "React JS",
    database: "SQL",
    backend: "Java/Python",
  },
};
console.log(details);

let { age, name, place,skills:{frontend,backend,database} } = details;
console.log(age);
console.log(name);
console.log(place);
console.log(frontend)
console.log(backend)
