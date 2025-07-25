package speed

// TODO: define the 'Car' type struct
type Car struct {
	battery int
	batteryDrain int
	speed int
	distance int
}

// NewCar creates a new remote controlled car with full battery and given specifications.
func NewCar(speed, batteryDrain int) Car {
	return Car{
		battery: 100,
		batteryDrain: batteryDrain,
		speed: speed,
		distance: 0,
	}
}

// TODO: define the 'Track' type struct
type Track struct {
	distance int
}

// NewTrack creates a new track
func NewTrack(distance int) Track {
	return Track{
		distance: distance,
	}
}

// Drive drives the car one time. If there is not enough battery to drive one more time,
// the car will not move.
func Drive(car Car) Car {
	if car.battery == car.batteryDrain {
		return Car{
			battery: 0,
			batteryDrain: car.batteryDrain,
			speed: car.speed,
			distance: car.speed,
		}
	} else if car.battery < car.batteryDrain {
		return Car{
			battery: car.battery,
			batteryDrain: car.batteryDrain,
			speed: car.speed,
			distance: car.distance,
		}
	} else {
		return Car{
			battery: 100 - car.batteryDrain,
			batteryDrain: car.batteryDrain,
			speed: car.speed,
			distance: car.speed + car.distance,
		}
	}
}

// CanFinish checks if a car is able to finish a certain track.
func CanFinish(car Car, track Track) bool {
	if car.battery == track.distance {
		return true
	}	else if (car.battery - (car.batteryDrain * car.distance) < track.distance) {
		return false
	} else if (car.battery - car.batteryDrain) >= track.distance {
		return true
	}
	return false
}
