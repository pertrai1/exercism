const ALPHABET = [..."abcdefghijklmnopqrstuvwxyz"];

export const isPangram = (sentence) => {
  const sanitize = (input) => sentence.toLowerCase().includes(input);
  return ALPHABET.every((letter) => sanitize(letter));
};
