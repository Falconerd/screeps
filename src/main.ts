import {Spawn} from "./spawn";

const spawn1 = new Spawn(Game.spawns.Spawn1);

export const loop = () => {
  spawn1.createCreep();
};
