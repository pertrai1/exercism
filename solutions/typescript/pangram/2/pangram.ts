const ALPHABET: string[] = [..."qwertyuiopasdfghjklzxcvbnm"];

export default class Pangram {
  constructor(private readonly sentence: string) {}

  public isPangram(): boolean {
    const lowercaseSentence = this.sentence.toLowerCase();
    return ALPHABET.every((letter: string) =>
      lowercaseSentence.includes(letter)
    );
  }
}
