"use strict";
var spawn_1 = require("./spawn");
var spawn1 = new spawn_1.Spawn(Game.spawns.Spawn1);
exports.loop = function () {
    spawn1.createCreep();
};
