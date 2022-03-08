import {IMotion} from "./IMotion";
import {ZoneState} from "./ZoneState";

const ROT_0 = { x:0, y:-1}
const ROT_90 = { x:1, y:0}
const ROT_180 = { x:0, y:1}
const ROT_270 = { x:-1, y:0}

export class Motion implements IMotion {
    position: number[] = [1, 1]
    orientation: number = 90
    move: any = ROT_90
    public grid: number[][] = [[]];
    private endOfGame: boolean = false;

    constructor(width: number, height: number) {
        for(let i: number = 0; i < width; i++) {
            this.grid[i] = [];
            for (let j: number = 0; j < height; j++) {
                this.grid[i][j] = ZoneState.Unknown;
            }
        }
        for(let i=0; i < width; i++)
        {
            this.grid[0][i] = ZoneState.Obstructed;
            this.grid[height - 1][i] = ZoneState.Obstructed;
            this.grid[i][0] = ZoneState.Obstructed;
            this.grid[i][width - 1] = ZoneState.Obstructed;

        }
        this.grid[1][1] = ZoneState.Free;
    }

    Move(number): boolean {
        console.clear()
        if(this.grid[this.position[0] + this.move.x][this.position[1] + this.move.y] !== -1 &&
            this.grid[this.position[0] + this.move.x][this.position[1] + this.move.y] !== 1
        ) {
            this.position = [this.position[0] + this.move.x, this.position[1] + this.move.y]
            this.grid[this.position[0]][this.position[1]] = ZoneState.Free
            this.print()
            return true;
        }
        this.print()
        return false
    }

    updateMove = () => {
        switch (this.orientation) {
            case 0:
                this.move = ROT_0
                break;
            case 90:
                this.move = ROT_90
                break;
            case 180:
                this.move = ROT_180
                break;
            case 270:
                this.move = ROT_270
                break;
        }

        if(this.grid[this.position[0] + this.move.x][this.position[1] + this.move.y] === 1) {
            this.endOfGame = true;
        }
    }

    print = () => {
        for (let i = 0; i < this.grid.length; i++) {
            console.log(this.grid[i].toString())
        }
    }

    Rotate(angle): void {
        this.orientation = (this.orientation === 270) ? 0 : this.orientation + angle
        this.updateMove()
        console.log("Rotation to " + this.orientation + "°")
    }

    getEndOfGame() {
        return this.endOfGame
    }
}