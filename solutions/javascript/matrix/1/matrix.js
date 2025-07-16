export class Matrix {
  constructor(input) {
    this._rows = input.split("\n").map((row) => row.split(" ").map(Number));
    this._columns = this.rows[0].map((_, i) => {
      return this.rows.map((row) => row[i]);
    });
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}
