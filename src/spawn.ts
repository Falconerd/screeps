import {Creep} from "./creep";

export class Spawn {
  spawn: any;

  constructor(spawn) {
    this.spawn = spawn;
  }

  createCreep() {
    const creep = new Creep(this.spawn.createCreep([WORK, WORK, MOVE, CARRY]));
  }
}
