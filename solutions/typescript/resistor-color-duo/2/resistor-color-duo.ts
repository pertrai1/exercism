export class ResistorColor {
  private colors: string[];

  private static bands = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
  ];

  constructor(colors: string[] = []) {
    this.colors = colors;
    if (colors.length < 2) {
      throw new Error('At least two colors need to be present');
    }
  }
  value = (): number => {
    return (
      10 * ResistorColor.bands.indexOf(this.colors[0]) +
      ResistorColor.bands.indexOf(this.colors[1])
    );
  };
}
