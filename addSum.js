
/*
 * Given an array of numbers, calculate the greatest consecutive sum of numbers in it.
 * A single array item will count as a consecutive sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

//i want my return to be my highest number

 var sum = 0;
 var sumArray = [10, -11, 11];
 var highestNumber;


function highestNumber(sumArray){
 for (var i=0; i<= sumArray.length; i++){
 	sum += sumArray[i]; 
 	if (sum < Math.max(sumArray)){
 		highestNumber = Math.max(...sumArray);
 		console.log(highestNumber);
 	}else{
 		highestNumber = sum;
 		console.log(highestNumber);
 	}


 } 
  return highestNumber;
}


//console.log(sum)

