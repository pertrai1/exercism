// Collection of solutions I like from community. See each iteration for reference.
// this makes it easier to bookmark for reference rather than having to always go to the
// community solutions. There might be differences based on changes I make for experimentation.

// Iteration #1
// Solution: https://exercism.org/tracks/javascript/exercises/book-store/solutions/vishnudevroy

const DEFAULT_BOOK_PRICE = 800;
const PRICE_MULTIPLIER_BY_GROUP = new Map([
  [1, 1.0],
  [2, 0.95],
  [3, 0.9],
  [4, 0.8],
  [5, 0.75],
]);

class BookCounter {
  #remainingBookCounts;
  constructor(books) {
    this.#remainingBookCounts = new Map();
    for (const book of books) {
      this.#remainingBookCounts.set(
        book,
        (this.#remainingBookCounts.get(book) ?? 0) + 1
      );
    }
  }
  removeSetFromRemaining(set) {
    for (const book of set) {
      const count = this.#remainingBookCounts.get(book);
      if (count === 1) {
        this.#remainingBookCounts.delete(book);
      } else {
        this.#remainingBookCounts.set(book, count - 1);
      }
    }
  }
  get remainingBookSet() {
    return new Set(this.#remainingBookCounts.keys());
  }
  get hasPending() {
    return this.#remainingBookCounts.size > 0;
  }
}
export const cost = (books) => {
  const setSizes = [];
  const counter = new BookCounter(books);
  while (counter.hasPending) {
    const largestGroup = counter.remainingBookSet;
    setSizes.push(largestGroup.size);
    counter.removeSetFromRemaining(largestGroup);
  }

  const sum = (array) => array.reduce((a, b) => a + b, 0);
  const groupPrice = (groupSize) => {
    return (
      DEFAULT_BOOK_PRICE * groupSize * PRICE_MULTIPLIER_BY_GROUP.get(groupSize)
    );
  };
  const threeCount = setSizes.filter((size) => size === 3).length;
  const fiveCount = setSizes.filter((size) => size === 5).length;
  const threeFivePairs = Math.min(threeCount, fiveCount);
  const finalGroups = [
    ...Array(threeFivePairs * 2).fill(4),
    ...Array(threeCount - threeFivePairs).fill(3),
    ...Array(fiveCount - threeFivePairs).fill(5),
    ...setSizes.filter((size) => size !== 3 && size !== 5),
  ];

  return sum(finalGroups.map(groupPrice));
};
