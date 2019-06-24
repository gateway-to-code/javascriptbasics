/*

Create a function that takes a number as a parameter and returns fizz if the number is divisible by 3 
and buzz if the number is divisible by 5. Your function should output as follows 

fizzBuzz(45) // fizz
fizzBuzz(7) //flat soda
fizzBuzz("hello") // please enter a number 
fizzBuzz(20) // 
*/ 


/*


*/ 

function fizzBuzz(number) {
	if(typeof number === 'number') {
		if((number%3 === 0)&& typeof number === 'number') {
			return document.write('fizz');
		} else if((number%5 === 0) && typeof number === 'number') {
			return document.write('buzz');
		} else {
			return document.write('Flat soda');
		}
	} else {
		return document.write('Please enter a number');
	}
}