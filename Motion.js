"use strict";
exports.__esModule = true;
exports.Motion = void 0;
var ZoneState_1 = require("./ZoneState");
var ROT_0 = { x: 0, y: -1 };
var ROT_90 = { x: 1, y: 0 };
var ROT_180 = { x: 0, y: 1 };
var ROT_270 = { x: -1, y: 0 };
var Motion = /** @class */ (function () {
    function Motion(width, height) {
        var _this = this;
        this.position = [1, 1];
        this.orientation = 90;
        this.move = ROT_90;
        this.grid = [[]];
        this.endOfGame = false;
        this.updateMove = function () {
            switch (_this.orientation) {
                case 0:
                    _this.move = ROT_0;
                    break;
                case 90:
                    _this.move = ROT_90;
                    break;
                case 180:
                    _this.move = ROT_180;
                    break;
                case 270:
                    _this.move = ROT_270;
                    break;
            }
            if (_this.grid[_this.position[0] + _this.move.x][_this.position[1] + _this.move.y] === 1) {
                _this.endOfGame = true;
            }
        };
        this.print = function () {
            for (var i = 0; i < _this.grid.length; i++) {
                console.log(_this.grid[i].toString());
            }
        };
        for (var i = 0; i < width; i++) {
            this.grid[i] = [];
            for (var j = 0; j < height; j++) {
                this.grid[i][j] = ZoneState_1.ZoneState.Unknown;
            }
        }
        for (var i = 0; i < width; i++) {
            this.grid[0][i] = ZoneState_1.ZoneState.Obstructed;
            this.grid[height - 1][i] = ZoneState_1.ZoneState.Obstructed;
            this.grid[i][0] = ZoneState_1.ZoneState.Obstructed;
            this.grid[i][width - 1] = ZoneState_1.ZoneState.Obstructed;
        }
        this.grid[1][1] = ZoneState_1.ZoneState.Free;
    }
    Motion.prototype.Move = function (number) {
        console.clear();
        if (this.grid[this.position[0] + this.move.x][this.position[1] + this.move.y] !== -1 &&
            this.grid[this.position[0] + this.move.x][this.position[1] + this.move.y] !== 1) {
            this.position = [this.position[0] + this.move.x, this.position[1] + this.move.y];
            this.grid[this.position[0]][this.position[1]] = ZoneState_1.ZoneState.Free;
            this.print();
            return true;
        }
        this.print();
        return false;
    };
    Motion.prototype.Rotate = function (angle) {
        this.orientation = (this.orientation === 270) ? 0 : this.orientation + angle;
        this.updateMove();
        console.log("Rotation to " + this.orientation + "°");
    };
    Motion.prototype.getEndOfGame = function () {
        return this.endOfGame;
    };
    return Motion;
}());
exports.Motion = Motion;
