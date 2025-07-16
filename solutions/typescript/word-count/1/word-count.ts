export function count(word: string): Map<string, number> {
  const words = word
    .toLowerCase()
    .replace(/\n/m, " ")
    .replace(/\t/m, " ")
    .split(" ");
  const wordMap = new Map<string, number>();

  for (let eachWord of words) {
    if (eachWord === "") {
      continue;
    }
    const wordValue = wordMap.get(eachWord) || 0;
    wordMap.set(eachWord.trim(), wordValue + 1);
  }

  return wordMap;
}
