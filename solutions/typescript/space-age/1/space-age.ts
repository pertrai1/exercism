type PLANET =
  | 'Earth'
  | 'Mercury'
  | 'Venus'
  | 'Mars'
  | 'Jupiter'
  | 'Saturn'
  | 'Uranus'
  | 'Neptune';

const EARTH_YEAR = 31557600;

const ORBITAL_PERIOD: Record<PLANET, number> = {
  Earth: 1.0 * EARTH_YEAR,
  Jupiter: 11.862615 * EARTH_YEAR,
  Mars: 1.8808158 * EARTH_YEAR,
  Mercury: 0.2408467 * EARTH_YEAR,
  Neptune: 164.79132 * EARTH_YEAR,
  Saturn: 29.447498 * EARTH_YEAR,
  Uranus: 84.016846 * EARTH_YEAR,
  Venus: 0.61519726 * EARTH_YEAR
};

const roundedNumber = (num: number): number => {
  return Math.round(10 ** 2 * num) / 10 ** 2;
};

export default class SpaceAge {
  constructor(public readonly seconds: number) {}

  private onPlanet(name: PLANET) {
    return (): number =>
      roundedNumber(this.seconds / ORBITAL_PERIOD[name]);
  }

  public onEarth = this.onPlanet('Earth');
  public onJupiter = this.onPlanet('Jupiter');
  public onMars = this.onPlanet('Mars');
  public onMercury = this.onPlanet('Mercury');
  public onNeptune = this.onPlanet('Neptune');
  public onSaturn = this.onPlanet('Saturn');
  public onUranus = this.onPlanet('Uranus');
  public onVenus = this.onPlanet('Venus');
}
