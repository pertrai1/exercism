//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];

export const decodedValue = colors => {
  let total = [];

  colors.slice(0, 2).map(c => {
    total.push(COLORS.indexOf(c));
  }); /*? */

  return Number(total.join('')); /*? */
};

// decodedValue(['blue', 'grey']) /*? */
