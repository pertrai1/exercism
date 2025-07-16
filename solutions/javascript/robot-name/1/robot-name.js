/**
 * Shim for flattening an array.
 */
Array.prototype.flat = function () {
    return [].concat(...this);
}
/**
 * Shim for mapping an array and flattening it.
 */
Array.prototype.flatMap = function (cb) {
    return this.map(cb).flat();
}
/**
 * Alphabet letters
 */
const ALPHABET = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
/**
 * Digits numbered "randomly" to avoid generating
 * sequential robot names.
 */
const DIGITS = [...'0246813579'];
/**
 * Generating upfront robot names.
 */
const ROBOT_NAMES =
    ALPHABET.flatMap(l1 =>
        ALPHABET.flatMap(l2 =>
            DIGITS.flatMap(d1 =>
                DIGITS.flatMap(d2 =>
                    DIGITS.flatMap(d3 => `${l1}${l2}${d1}${d2}${d3}`)
                )
            )
        )
    );
const ROBOT_NAMES_COUNT = ROBOT_NAMES.length;
/**
 * Pointer to the next robot name unused.
 */
let currentRobotName = 0;
/**
 * Robot class.
 */
export class Robot {
    constructor() {
        this.reset();
    }
    /**
     * Retrieve the current robot name.
     */
    get name() {
        return this._name;
    }
    /**
     * Set a new name for current robot.
     */
    reset() {
        if (currentRobotName >= ROBOT_NAMES_COUNT)
            throw new RangeError('No name remaining!');
        this._name = ROBOT_NAMES[currentRobotName++];
    }
}
/**
 * Reset robot name queue.
 */
Robot.releaseNames = () => { currentRobotName = 0; };
