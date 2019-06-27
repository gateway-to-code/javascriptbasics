var name = "carine";

var array = [5,6,7];

var obj = {
	name: "carine", 
	age: 21,
	talent: "fabulous"
}


var func = function(num) {
	
	return num * 2;;
}

func(3);

//create a function thats takes two strings and adds them together

function twoStrings(str1, str2) {

	document.write(str1 + str2);
}

// twoStrings('Carine', 'you are awesome');



function askCarine(val) {
	if(name === val) {
		document.write(name)
	} else if(val === "you are the best") {
		document.write("we know");
	} else {
		document.write("does not exist")
	}
}

//create a function that returns even if the value is even and odd if the number is odd. 

//if value is even val%2 === 0 return even
//if value is odd val%2 !==0 return odd


function orThis (val) {
	if((typeof val == "number") || (typeof val === "string")) {
		console.log('its primitive');
	} else if(typeof val === "object" && val[0]) {
		console.log(val[0]);
	} else {
		console.log('doesnt apply')
	}
}


// function oddEven(num) {

// 	if((num % 2 === 0) && (typeof num === 'number')) {
// 		console.log('even');
// 	} else if((num % 2 !== 0) && (typeof num === 'number')) {
// 		console.log('odd');
// 	} else {
// 		console.log('this is not a number')
// 	}

// }




// function oddEven(num) {
// 	if(typeof num === 'number') {
// 		if(num % 2 === 0 ) {
// 			console.log('even');
// 		} else {
// 			console.log('odd');
// 		}
// 	} else {
// 		console.log('please enter a number');
// 	}

// }




function whoYou (val){


	if (val === "Carine") {
		document.write ("How did you know");
	} else if ( val === "danteh"){
		document.write ("Is he not smart.");
	} else {
		document.write ("Does not exist");
	}

}










































