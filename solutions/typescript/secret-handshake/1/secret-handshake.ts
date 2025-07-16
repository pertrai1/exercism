const ACTIONS: [number, string][] = [
  [0b1, 'wink'],
  [0b10, 'double blink'],
  [0b100, 'close your eyes'],
  [0b1000, 'jump']
];

const REVERSE = 0b10000;

export function commands(secret: number): string[] {
  const sequences = ACTIONS.filter(([n]) => (n & secret));
  const commands = sequences.map(([_, command]) => command);
  return secret & REVERSE ? commands.reverse() : commands;
}
