import { Colas } from "./colas";

export class queueGame extends Colas {
  constructor() {
    super();
  }

  hotPotato(nameList: string | any[], num: number) {
    let queue = new Colas();

    for (let i = 0; i < nameList.length; i++) {
      queue.enqueue(nameList[i]);
    }

    let eliminated = "";
    while (queue.size() > 1) {
      for (let i = 0; i < num; i++) {
        queue.enqueue(queue.dequeue());
      }
      eliminated = queue.dequeue();
      console.log(`${eliminated} fue eliminado del juego.`);
    }

    return queue.dequeue();
  }
}

let names = ["John", "Pepe", "Ada", "Bart", "Maggie"];
let game = new queueGame();
let winner = game.hotPotato(names, 4);
console.log(`El ganador es ${winner}`);
