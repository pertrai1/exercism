package purchase

import "fmt"

const fifyPercent = 0.50
const seventyPercent = 0.70
const eightyPercent = 0.80

// NeedsLicense determines whether a license is needed to drive a type of vehicle. Only "car" and "truck" require a license.
func NeedsLicense(kind string) bool {
	return kind == "car" || kind == "truck"
}

// ChooseVehicle recommends a vehicle for selection. It always recommends the vehicle that comes first in lexicographical order.
func ChooseVehicle(option1, option2 string) string {
	vehicleChoice := option2

	if option1 < option2 {
		vehicleChoice = option1
	}

	return fmt.Sprintf("%s is clearly the better choice.", vehicleChoice)
}

// CalculateResellPrice calculates how much a vehicle can resell for at a certain age.
func CalculateResellPrice(originalPrice, age float64) float64 {
	if age < 3 {
		return eightyPercent * originalPrice
	} else if age < 10 {
		return seventyPercent * originalPrice
	} else {
		return fifyPercent * originalPrice
	}
}
