const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];



//Map
//Nombres
const names = characters.map((persona) => persona.name);

//Alturas
const heights = characters.map((altura) => altura.height);

//Array de objetos con nombre y altura
const namesHeights = characters.map((propiedad) => {
  return {
    name: propiedad.name,
    height: propiedad.height,
  };
});


//Reduce
//Masa total
const reduce1 = characters.reduce(
  (total, actual) => total + parseInt(actual.mass),
  0
);

//Altura total
const reduce2 = characters.reduce(
  (total, actual) => total + parseInt(actual.height),
  0
);

//Total caracteres
const reduce3 = characters.reduce(
  (total, actual) => total + actual.name.length,
  0
);

//Contar por color de ojos
const reduce4 = characters.reduce((count, character) => {
  const eyeColor = character.eye_color;
  count[eyeColor] = (count[eyeColor] || 0) + 1;
  return count;
}, {});

for (const eyeColor in reduce4) {
  console.log(`Total de personajes con el color ${eyeColor}: ${reduce4[eyeColor]}`);
}



//Filter
//Masa superior a 100
const filter1 = characters.filter((character) => character.mass > 100);

//Altura inferior a 200
const filter2 = characters.filter((character) => character.height < 200);

//Solo personajes masculinos
const filter3 = characters.filter((character) => character.gender === "male");

//Solo personajes femeninos
const filter4 = characters.filter((character) => character.gender === "female");



//Sort
//Ordenar por nombre
const sort1 = characters.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

//Ordenar por masa
const sort2 = characters.sort((a, b) => {
  if (a.mass > b.mass) {
    return 1;
  } else if (a.mass < b.mass) {
    return -1;
  } else {
    return 0;
  }
});

//Ordenar por altura
const sort3 = characters.sort((a, b) => {
  if (a.height > b.height) {
    return -1;
  } else if (a.height < b.height) {
    return 1;
  } else {
    return 0;
  }
});

//Ordenar por genero
const sort4 = characters.sort((a, b) => {
  if (a.gender < b.gender) {
    return -1;
  }
  if (a.gender > b.gender) {
    return 1;
  }
  return 0;
});



//Every
//Todos los personajes tienen ojos azules?
const every1 = characters.every((character) => character.eye_color === "blue");

//Todos los personajes tienen una maza superior a 40?
const every2 = characters.every((character) => character.mass > 40);

//Todos los caracteres son mas bajos que 200? (creo que el enunciado hace referencia a la altura de los characters)
const event3 = characters.every((character) => character.height < 200);

//Todos los personajes son hombres?
const every4 = characters.every((character) => character.gender === "male");



//Some
//Hay al menos un personaje masculino?
const some1 = characters.some((character) => character.gender === "male");

//Hay al menos un personaje con ojos azules?
const some2 = characters.some((character) => character.eye_color === "blue");

//Hay al menos un personaje mas alto que 200?
const some3 = characters.some((character) => character.height > 200);

//Hay al menos un personaje que tenga una masa inferior a 50?
const some4 = characters.some((character) => character.mass < 50);
