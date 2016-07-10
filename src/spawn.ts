export class Spawn {
  spawn: any;

  constructor(spawn) {
    this.spawn = spawn;
  }

  createCreep() {
    const creep = this.spawn.createCreep([WORK, WORK, MOVE]);
  }
}
