function count(n) {   
	if (n === 1) {     
		return [1];   
	} else {     
		var numbers = count(n - 1);      
		numbers.push(n);  
		console.log('this is the current number', n, numbers)   
		return numbers;   
	} 
} 


count(3);

var numbers = count(2) 
numbers = [1, 2,];



