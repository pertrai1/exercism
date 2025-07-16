const ALPHABET = [..."qwertyuiopasdfghjklzxcvbnm"];

export default class Pangram {
  constructor(private readonly sentence: string) {}

  public isPangram(): boolean {
    const lowercaseSentence = this.sentence.toLowerCase();
    return ALPHABET.every((letter) => lowercaseSentence.includes(letter));
  }
}
