//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (words) => {
  const formattedWords = words.toLowerCase().match(/\w+('\w+)?/g);
  const wordCount = {};

  formattedWords.map((word) => (wordCount[word] = 1 + (wordCount[word] || 0)));

  return wordCount;
};
