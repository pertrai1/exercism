const MINUTES_PER_DAY = 1440;
const MINUTES_PER_HOUR = 60;

const padTheStart = (timeSlot: unknown): string =>
  String(timeSlot).padStart(2, "0");

export class Clock {
  public hour!: number;
  public minute!: number;

  constructor(hour: number, minute: number = 0) {
    this.reset();
    this.adjustTime(hour * MINUTES_PER_HOUR + minute);
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
    return padTheStart(this.hour) + ":" + padTheStart(this.minute);
  }

  public plus(minutes: number): Clock {
    this.adjustTime(minutes);
    return new Clock(this.hour, this.minute);
  }

  public minus(minutes: number): Clock {
    this.adjustTime(-1 * minutes);
    return new Clock(this.hour, this.minute);
  }

  public equals(clock: Clock): boolean {
    return this.hour === clock.getHour() && this.minute == clock.getMinute();
  }

  public adjustTime(delta: number): void {
    delta =
      Math.abs(delta) >= MINUTES_PER_DAY ? delta % MINUTES_PER_DAY : delta;

    const currentMinutes = this.hour * MINUTES_PER_HOUR + this.minute;
    let newMinutes = (currentMinutes + delta) % MINUTES_PER_DAY;

    newMinutes = newMinutes < 0 ? (newMinutes += MINUTES_PER_DAY) : newMinutes;

    this.hour = Math.floor(newMinutes / MINUTES_PER_HOUR) % MINUTES_PER_DAY;
    this.minute = newMinutes - this.hour * MINUTES_PER_HOUR;
  }
}
