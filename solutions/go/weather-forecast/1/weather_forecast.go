// Package weather.
// Provides the weather forecast.
package weather

// CurrentCondition: To be used as the starting of a string representing the city.
var CurrentCondition string
// CurrentLocation: To be used as the ending of a string representing the temperature.
var CurrentLocation string

// Forecast: Will return a string that gives the city and the weather condition.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
