const ASCII_A = "A".charCodeAt(0);
const USED_NAMES = new Set();

type MinMax = (min: number, max: number) => number;

const randomBetweenInclusive: MinMax = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomLetter = (): string =>
  String.fromCharCode(randomBetweenInclusive(ASCII_A, ASCII_A + 26));
const randomDigit = (): number => randomBetweenInclusive(100, 999);

const generateName = (): string => {
  const name = [randomLetter(), randomLetter(), randomDigit()].join("");

  if (USED_NAMES.has(name)) {
    return generateName();
  }

  USED_NAMES.add(name);
  return name;
};
export default class Robot {
  static _name: string;
  constructor() {
    this.resetName();
  }

  public get name(): string {
    return Robot._name;
  }

  public resetName(): void {
    Robot._name = generateName();
  }

  public static releaseNames(): void {
    USED_NAMES.clear();
  }
}
