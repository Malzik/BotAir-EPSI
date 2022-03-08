export interface IMotion {
    Rotate: (number) => void

    Move: (number) => boolean

    getEndOfGame: () => boolean
}