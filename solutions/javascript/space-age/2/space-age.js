const earthYearsSeconds = 31557600.0;

const planetEarthOrbitalRatio = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

const earthYears = (seconds) => seconds / earthYearsSeconds;

export const age = (planet, seconds) =>
  parseFloat(
    (earthYears(seconds) / planetEarthOrbitalRatio[planet]).toFixed(2)
  );
