//strings, numbers, booleans, objects, arrays, and functions

// var name; 

// name = 'carine'

// name = 'apples'

var screenLock = true;


var personObj = {};

personObj['name'] = 'carine';
personObj.lastName = 'bongabih';

var personList = [];

personList[0] = 'names';
personList[6] = 'lastNames';

// var num = 0;
personObj.addFunction = function() {
	var num = 0; 
	return num += 1;
}

function secondFunc() {

}


var arrowFunction = () => {

}

var funcParameter = (() => {

})

// newFunction(personList); // call/invoke functions


//create a function that takes a string return a specific set of characters 

//create a function that takes a string and a special string set to be filtered.
//iterate over strings
//check if the current string at i is equal to a string the specials characters list
//create another for loop to compare the values in our special characters list.
	//if its equal to characters in the list we should remove it from the list by changing the value to and empty string;

var modifyString = function(string, specialKeys) {

	var string1 = string;
	for(var i=0;  i <= string1.length; i++) {
		for(var j=0; j<= specialKeys.length; j++) {
			if(string1[i] === specialKeys[j]) {
				string1 = string1.split(string1[i]);
				console.log('string :', string1);
				string1 = string1.join('');
				console.log('the new string :', string1)
				// string1 = string1.split(string1[i]).join('');

			}
		}
	}

	return string;

}

var data = {name: 'carine', age:12};

var objLoop = function(obj) {
	for(var el in obj) {
		console.log('this is teh key:', el, ',this is the value:', obj[el]);
	}
}


//create a function that removes every even character from a given string.
//Join:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join


//create a function that takes an array of objects and returns a list of name from each object in the array

//input          
//nameList = [{name: 'carine', age:12}, {name: 'danteh', age: 5}]

//output
//['carine', 'danteh'];

//push: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push















