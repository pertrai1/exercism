//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (scores) => {
  return Object.fromEntries(
      Object.entries(scores)
        .flatMap(
          ([score, letters]) => 
            letters.map(
              letter => [letter.toLowerCase(), +score]
            )
          )
        )
};
