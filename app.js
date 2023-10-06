
// 5- Write a function that, takes an array of integers as input, iterates over the array, and returns a new array.
//  The returned array should contain the result of raising 2 to the power of the original input element.
// For example,([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
// Use for and forEach and then map to solve this question to see the difference between the three ways

let arr3 = [];
let bas = 2;
function num1() {
  for (let i = 0; i < 5; i++) {
    let prop = prompt("push");
    arr3.push(bas ** prop);
  }
}
num1();
console.log(arr3);

let arr4 = [];
function num2() {
  arr3.forEach((d) => {
    arr4.push(d);
  });
}
num2();
console.log(arr4);

let arr5 = [];
function num3() {
  arr3.map((d) => {
    arr5.push(d);
  });
}
num3();
console.log(arr5);

// 6- Write a function that, takes an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.
// If any element in the array is not a number, the resulting array should have the string "N/A" in its place.
// For example:([1,2,3,"Rawan"]) returns ['odd','even','odd','N/A'].

let bbb = [];
for (let i = 0; i < 5; i++) {
  let iu = prompt("push ");
  bbb.push(iu);
}

let bb = [];
function issaa() {
  bbb.map((d) => {
    if (isNaN(d)) {
      bb.push("N/A");
    } else if (d % 2 == 0) {
      bb.push("even");
    } else if (d % 2 !== 0) {
      bb.push("odd");
    }
  });
}
issaa();
console.log(bb);

// 7- Write a function named fizzbuzz that takes in an array of numbers.
// Iterate over the array using forEach or map to determine the output based on several rules:
//   - If a number is divisible by 3, add the word "Fizz" to the output array.
//   - If the number is divisible by 5, add the word "Buzz" to the output array.
//   - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
//   - Otherwise, add the number to the output array.
// Return the resulting output array.

let fizz = "fizz";
let buzz = "buzz";
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + fizz + buzz);
  } else if (i % 5 === 0) {
    console.log(i + buzz);
  } else if (i % 3 === 0) {
    console.log(i + fizz);
  } else {
    console.log(i);
  }
}

// let arr = ["Rawan", "Jafar", "Hind", "Muhammad", "Esraa", "Dareen"];
// let newarr = [];
// arr.forEach((d) => {
//   newarr.push(d);
// });
// console.log(newarr);









// higher order function

// Ex7: Use forEach to  Return all the names in the array  [“Rawan", "Jafar", "Hind", "Muhammad", "Esraa", “Dareen”] using loops.

let arrc = ["Rawan", "Jafar", "Hind", "Muhammad", "Esraa", "Dareen"];
let newarrc = [];
arrc.forEach((d) => {
  newarrc.push(d);
});
console.log(newarrc);

// Ex8: Project an array of series into an array of {id, title} pairs using forEach()

let varsd = [];
let vars = [];
let varsw = [];

// Ex 12: Create a function displayName that, given the pokemon data, below, uses reduce to return an array containing the names of the characters.
function yy() {
  let newSeries = [
    {
      id: 70111470,
      title: "Die Hard",
      boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 654356453,
      title: "Bad Boys",
      boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
      id: 65432445,
      title: "The Chamber",
      boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [4.0],
      bookmark: [],
    },
    {
      id: 675465,
      title: "Fracture",
      boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      uri: "http://api.netflix.com/catalog/titles/movies/70111470",
      rating: [5.0],
      bookmark: [{ id: 432534, time: 65876586 }],
    },
  ];
  // Ex8: Project an array of series into an array of {id, title} pairs using forEach()

  newSeries.forEach((dd) => {
    let fun = {
      id: dd.id,
      title: dd.title,
    };
    varsd.push(fun);
  });
  //   Ex 9: Use map() now to implement the same previous functionality

  newSeries.map((d) => {
    let fun = {
      id: d.id,
      title: d.title,
    };
    vars.push(fun);
  });

  //   Ex 10: Use filter() to return the series with a rating under 5
  newSeries.filter((de) => {
    if (de.rating < 5) {
      varsw.push(de);
    }
  });
}
yy();
console.log(varsd);
console.log(vars);
console.log(varsw);
// let arr5= ["Java", "JavaScript", "Python", "C++", "PHP"]
// let ff=[]
// arr5.reduce(d=>{
// ff.push()
// })

let pokemonData = [
  {
    game_index: 76,
    version: {
      name: "red",
      url: "https://pokeapi.co/api/v2/version/1/",
    },
  },
  {
    game_index: 76,
    version: {
      name: "blue",
      url: "https://pokeapi.co/api/v2/version/2/",
    },
  },
  {
    game_index: 76,
    version: {
      name: "yellow",
      url: "https://pokeapi.co/api/v2/version/3/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "gold",
      url: "https://pokeapi.co/api/v2/version/4/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "silver",
      url: "https://pokeapi.co/api/v2/version/5/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "crystal",
      url: "https://pokeapi.co/api/v2/version/6/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "ruby",
      url: "https://pokeapi.co/api/v2/version/7/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "sapphire",
      url: "https://pokeapi.co/api/v2/version/8/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "emerald",
      url: "https://pokeapi.co/api/v2/version/9/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "firered",
      url: "https://pokeapi.co/api/v2/version/10/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "leafgreen",
      url: "https://pokeapi.co/api/v2/version/11/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "diamond",
      url: "https://pokeapi.co/api/v2/version/12/",
    },
  },
];

function displayName(pokemonData) {
  return pokemonData.reduce(function (names, d) {
    names.push(d.version.name);

    return names;
  }, []);
}
const hg = displayName(pokemonData);
console.log(hg);

// Ex13: What is the output of the following JS code segments? and Why?

//a
var employee = {
  firstName: "Rawan",
  sayHi: function () {
    console.log("Hi Coach ! " + this.firstName);
  },
};

employee.sayHi(); // ?

// b)
var employee = {
  firstName: "Rawan",
  info: {
    hasCar: true,
    hasPet: true,
  },
  printInfo: function () {
    console.log("Car owner? " + this.info.hasCar);
  },
};

employee.printInfo(); // ?

// c)
var employee = {
  firstName: "Rawan",
  info: {
    hasCar: true,
    hasPet: true,
    printAddress: function () {
      console.log("address: " + this.data.address);
    },
    data: {
      address: "Zarqa",
    },
  },
};

employee.info.printAddress(); // ?




