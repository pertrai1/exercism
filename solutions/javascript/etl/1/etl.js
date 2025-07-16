//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (scores) => {
  return Object.entries(scores).reduce((acc, [key, value]) => {
    value.forEach(val => acc[val.toLowerCase()] = Number(key));
    return acc;
  }, {});
};
