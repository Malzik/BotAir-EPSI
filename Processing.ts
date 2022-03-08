import {IMotion} from "./IMotion";

export class Processing {
    motion: IMotion = null

    constructor(motion: IMotion) {
        this.motion = motion
    }

    async scan() {
        let stop = false
        while (stop === false) {
            const canMove = this.motion.Move(1)
            if (!canMove) {
                this.motion.Rotate(90)
                if (this.motion.getEndOfGame() === true) {
                    stop = true
                }
            }
            await new Promise(f => setTimeout(f, 0));
        }
    }
}