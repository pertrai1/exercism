//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const DROPS = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong'
}
export const convert = num => {
  return Object.keys(DROPS)
          .reduce((acc, curr) => {
            return num % curr === 0 ? acc + DROPS[curr] : acc
          }, '') || `${num}`
}