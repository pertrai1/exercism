const EARTH_YEAR = 31557600;
const PLANETS = {
  earth: 1.0 * EARTH_YEAR,
  jupiter: 11.862615 * EARTH_YEAR,
  mars: 1.8808158 * EARTH_YEAR,
  mercury: 0.2408467 * EARTH_YEAR,
  venus: 0.61519726 * EARTH_YEAR,
  saturn: 29.447498 * EARTH_YEAR,
  uranus: 84.016846 * EARTH_YEAR,
  neptune: 164.79132 * EARTH_YEAR,
};

const roundedNumber = (num) => {
  return Math.round(10 ** 2 * num) / 10 ** 2;
};

export const age = (planet, time) => {
  return roundedNumber(time / PLANETS[planet]);
};
