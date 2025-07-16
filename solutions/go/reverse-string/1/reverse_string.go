package reverse

// Solution A
// func Reverse(input string) (output string) {
// 	for _, v := range input {
// 		output = string(v) + output
// 	}
// 	return
// }

// Solution B
// func Reverse(input string) (output string) {
// 	var sb strings.Builder
//
// 	defer func() {
// 		output = sb.String()
// 	}()
//
// 	for _, v := range input {
// 		defer func(r rune) {
// 			sb.WriteRune(r)
// 		}(v)
// 	}
//
// 	return
// }

// Solution C
func Reverse(input string) (output string) {
	rns := []rune(input)

	for i, j := 0, len(rns)-1; i < j; i, j = i+1, j-1 {
		rns[i], rns[j] = rns[j], rns[i]
	}

	output = string(rns)
	return
}

// Benchmarks
// -8 = number of CPUs used
// 1523548 = total number of times loop was executed
// ns/op = amount of time each iteration took to complete

// Solution A
// BenchmarkReverse-8   	 1523548	       778.7 ns/op

// Solution B
// BenchmarkReverse-8   	  629511	      1884 ns/op

// Solution C
// BenchmarkReverse-8   	 5221837	       221.9 ns/op
