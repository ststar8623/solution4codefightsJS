function leastFactorial(n){
	var output = 1;
	var i = 0;
	while(output < n){
		i++;
		output *= i;
	}
	return output;
}
