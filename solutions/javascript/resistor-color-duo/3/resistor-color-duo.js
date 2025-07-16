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

const colorIndex = color => COLORS.indexOf(color);

export const decodedValue = ([color1, color2]) =>
  colorIndex(color1) * 10 + colorIndex(color2);
