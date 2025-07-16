export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    this.colors = colors;
    if (colors.length <= 1) {
      throw new Error('At least two colors need to be present');
    }
  }
  value = (): number => {
    return 0;
  };
}
