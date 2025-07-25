// Package census simulates a system used to collect census data.
package census

// Resident represents a resident in this city.
type Resident struct {
	Name    string
	Age     int
	Address map[string]string
}

// NewResident registers a new resident in this city.
func NewResident(name string, age int, address map[string]string) *Resident {
	return &Resident{
		Name:		name,
		Age: 		age,
		Address: address,
	}
}

// HasRequiredInfo determines if a given resident has all of the required information.
func (r *Resident) HasRequiredInfo() bool {
	if r.Address == nil || len(r.Address) == 0 {
		return false
	}

	return r.Name != "" && hasCorrectAddress(r)
}

// Delete deletes a resident's information.
func (r *Resident) Delete() {
	*r = Resident{}
}

// Count counts all residents that have provided the required information.
func Count(residents []*Resident) int {
	var result int
	for _, r := range residents {
		if r.HasRequiredInfo() {
			result++
		}
	}
	return result
}

func hasCorrectAddress(r *Resident) bool {
	for key, value := range r.Address {
		if key == "street" && value == "" {
			return false
		}
		if key != "street" {
			return false
		}
	}
	return true
}
