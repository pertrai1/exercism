package cars

// CalculateWorkingCarsPerHour calculates how many working cars are
// produced by the assembly line every hour.
func CalculateWorkingCarsPerHour(productionRate int, successRate float64) float64 {
	productionRateAsFloat := float64(productionRate)
	return (productionRateAsFloat * successRate) / 100
}

// CalculateWorkingCarsPerMinute calculates how many working cars are
// produced by the assembly line every minute.
func CalculateWorkingCarsPerMinute(productionRate int, successRate float64) int {
	return int(CalculateWorkingCarsPerHour(productionRate, successRate) / 60)
}

// CalculateCost works out the cost of producing the given number of cars.
func CalculateCost(carsCount int) uint {
	costPerCar := 10000
	costForTenCars := 95000
	carsPerTen := (carsCount / 10) * costForTenCars
	carsLeftOver := (carsCount % 10) * costPerCar

	if carsCount < 10 {
		return uint(carsCount) * 10000
	} else {
		return uint(carsPerTen) + uint(carsLeftOver)
	}
}
