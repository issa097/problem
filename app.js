

// Ex7: Use forEach to  Return all the names in the array  [“Rawan", "Jafar", "Hind", "Muhammad", "Esraa", “Dareen”] using loops.

let arr = ["Rawan", "Jafar", "Hind", "Muhammad", "Esraa", "Dareen"];
let newarr = [];
arr.forEach((d) => {
  newarr.push(d);
});
console.log(newarr);

// Ex8: Project an array of series into an array of {id, title} pairs using forEach()

let varsd = [];
let vars = [];
let varsw = [];

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
