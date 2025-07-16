class Lasagna
{
    public int ExpectedMinutesInOven() => 40;
    public int RemainingMinutesInOven(int actualMinutes) => ExpectedMinutesInOven() - actualMinutes;
    public int PreparationTimeInMinutes(int layers) => layers * 2;
    public int ElapsedTimeInMinutes(int layers, int numberOfMinutes) => PreparationTimeInMinutes(layers) + numberOfMinutes;
}
