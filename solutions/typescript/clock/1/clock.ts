export default class Clock {
  public hour!: number;
  public minute!: number;
  constructor(hour: number, minute: number = 0) {
    this.reset();
    const totalTimeInMinutes = hour * 60 + minute;
    this.adjustTime(totalTimeInMinutes);
  }

  public reset(): void {
    this.hour = 0;
    this.minute = 0;
  }

  public getHour(): number {
    return this.hour;
  }

  public getMinute(): number {
    return this.minute;
  }

  public toString(): string {
    return `${this.formatNumber(this.hour)}:${this.formatNumber(this.minute)}`;
  }

  public formatNumber(numberToFormat: number): string {
    const numberToString = numberToFormat.toString();
    return numberToString.length === 1 ? `0${numberToString}` : numberToString;
  }

  public plus(minutes: number): Clock {
    this.adjustTime(minutes);
    return this;
  }

  public minus(minutes: number): Clock {
    this.adjustTime(-1 * minutes);
    return this;
  }

  public equals(clock: Clock): boolean {
    return this.hour === clock.getHour() && this.minute == clock.getMinute();
  }

  public adjustTime(delta: number): void {
    const minutesPerDay = 1440;
    const minutesPerHour = 60;
    const hoursPerDay = 24;

    delta = Math.abs(delta) >= minutesPerDay ? delta % minutesPerDay : delta;

    const currentMinutes = this.hour * minutesPerHour + this.minute;
    let newMinutes = (currentMinutes + delta) % minutesPerDay;

    newMinutes = newMinutes < 0 ? (newMinutes += minutesPerDay) : newMinutes;

    this.hour = Math.floor(newMinutes / minutesPerHour) % hoursPerDay;
    this.minute = newMinutes - this.hour * minutesPerHour;
  }
}
