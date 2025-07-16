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
          .filter(key => num % key === 0)
          .map(key => DROPS[key])
          .join('') || num.toString();
}