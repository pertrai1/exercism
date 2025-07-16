package space

type Planet string

const earthYearInSeconds = 31557600

var planetMap = map[Planet]float64{
	"Earth":   1.0 * earthYearInSeconds,
	"Mercury": 0.2408467 * earthYearInSeconds,
	"Mars":    1.8808158 * earthYearInSeconds,
	"Venus":   0.61519726 * earthYearInSeconds,
	"Saturn":  29.447498 * earthYearInSeconds,
	"Uranus":  84.016846 * earthYearInSeconds,
	"Neptune": 164.79132 * earthYearInSeconds,
	"Jupiter": 11.862615 * earthYearInSeconds,
}

func Age(seconds float64, planet Planet) float64 {
	planetTimeValue, ok := planetMap[planet]

	if !ok {
		return -1
	}

	return seconds / planetTimeValue
}
