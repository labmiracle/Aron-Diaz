class Tamagotchi {
  name: string;
  energy: number;
  genere: string;
  humor: number;
  age: number;
  counterFood: number;
  counterDrink: number;

  constructor(name: string, genere: string, age: number) {
    this.name = name;
    this.energy = 100;
    this.genere = genere;
    this.humor = 5;
    this.age = age;
    this.counterFood = 0;
    this.counterDrink = 0;
  }

  eat() {
    if (this.counterFood >= 5) {
      console.log(`${this.name} comió demasiado y murió`);
      return;
    }

    console.log(`${this.name} está comiendo`);
    this.counterFood++;
    this.energy = this.energy + 25;
  }

  drink() {
    if (this.counterDrink >= 5) {
      console.log(`${this.name} bebió demasiado y murió`);
      return;
    }

    console.log(`${this.name} está bebiendo`);
    this.counterDrink++;
  }

  sleep() {
    console.log(`${this.name} está durmiendo`);
  }

  jump() {
    if (this.energy <= 0) {
      console.log(`${this.name} está muy cansado y murió`);
      return;
    }
    console.log(`${this.name} está saltando`);
    this.energy = this.energy - 25;
  }

  walk() {
    if (this.energy <= 0) {
      console.log(`${this.name} está muy cansado y murió`);
      return;
    }

    console.log(`${this.name} está caminando`);
    this.energy = this.energy - 10;
  }

  run() {
    console.log(`${this.name} está corriendo`);
  }
}

// const pepe = new Tamagotchi("Pepe", "M", 20);
// pepe.run();
// pepe.jump();

class Tamagotchis {
  tamagotchis: Tamagotchi[];

  constructor() {
    this.tamagotchis = [];
  }

  addTamagotchi(tamagotchi: Tamagotchi) {
    this.tamagotchis.push(tamagotchi);
  }

  deleteTamagotchi(name: string) {
    this.tamagotchis = this.tamagotchis.filter(
      (tamagotchi) => tamagotchi.name !== name
    );
  }

  searchTamagotchi(name: string) {
    return this.tamagotchis.find((tamagotchi) => tamagotchi.name === name);
  }
}

const tamagotchis = new Tamagotchis();
const pepito = new Tamagotchi("Pepito", "M", 20);
const pipo = new Tamagotchi("Pipo", "M", 20);

tamagotchis.addTamagotchi(pepito);
tamagotchis.addTamagotchi(pipo);

console.log(tamagotchis.searchTamagotchi("Pepito"));
pepito.eat();
console.log(tamagotchis);

tamagotchis.deleteTamagotchi("Pepito");
console.log(tamagotchis.tamagotchis);
