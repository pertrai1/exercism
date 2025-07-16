using System;

static class AssemblyLine
{
    private const int CARS_PER_HOUR = 221;
    
    public static double SuccessRate(int speed) =>
        speed switch
        {
            >= 1 and <= 4 => 1.0,
            >= 5 and <= 8 => 0.9,
            9 => 0.8,
            10 => 0.77,
            _ => 0.0
        };

    public static double ProductionRatePerHour(int speed) =>
        SuccessRate(speed) * CARS_PER_HOUR * speed;
    
    public static int WorkingItemsPerMinute(int speed) =>
        (int) (ProductionRatePerHour(speed) / 60);
}
