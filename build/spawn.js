"use strict";
var creep_1 = require("./creep");
var Spawn = (function () {
    function Spawn(spawn) {
        this.spawn = spawn;
    }
    Spawn.prototype.createCreep = function () {
        var creep = new creep_1.Creep(this.spawn.createCreep([WORK, WORK, MOVE, CARRY]));
    };
    return Spawn;
}());
exports.Spawn = Spawn;
