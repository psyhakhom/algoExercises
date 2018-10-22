function fib(n) {
	//iterative and linear time
	// const result = [0, 1]

	// for(let i = 2; i <= n; i++) {
	//   const a = result[i - 1]
	//   const b = result[i - 2]

	//   result.push(a + b)
	// }

	// return result[n]

	// recursive
	if (n < 2) {
		return n
	}

	return fib(n - 1) + fib(n - 2)
}

fib(3)
