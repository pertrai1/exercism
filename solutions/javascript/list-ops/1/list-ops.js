//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = values;
  }
  
  append(list) {
    return new List(this.values.concat(list.values));
  }

  concat(listOfLists) {
    return listOfLists.values.reduce((acc, list) => acc.append(list), this);
  }

  filter(predicate) {
    return new List(this.values.filter(predicate));
  }

  map(mapper) {
    return new List(this.values.map(mapper));
  }

  length() {
    return this.values.length;
  }

  foldl(reducer, initial) {
    return this.values.reduce(reducer, initial);
  }

  foldr(reducer, initial) {
    return this.values.reduceRight(reducer, initial);
  }

  reverse() {
    return new List(this.values.reverse());
  }
}
