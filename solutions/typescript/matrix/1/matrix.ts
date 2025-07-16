class Matrix {
  private _rows: number[][];
  private _columns: number[][];

  constructor(input: string) {
    this._rows = input.split("\n").map((rows) => rows.split(" ").map(Number));
    this._columns = this._rows.map((_, i) => {
      return this._rows.map((rows) => rows[i]);
    });
  }

  get rows(): number[][] {
    return this._rows;
  }

  get columns(): number[][] {
    return this._columns;
  }
}

export default Matrix;
