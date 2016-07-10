"use strict";
var Spawn = (function () {
    function Spawn(spawn) {
        this.spawn = spawn;
    }
    Spawn.prototype.createCreep = function () {
        var creep = this.spawn.createCreep([WORK, WORK, MOVE]);
    };
    return Spawn;
}());
exports.Spawn = Spawn;
