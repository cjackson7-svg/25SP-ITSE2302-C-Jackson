
var osc = "Oscar has a 5 kids and a beautiful wife name Stella. 4 of the children are identcal twins and the other child is the oldest by 1 year.";

var fam = "The family has 6 relatives living in the San Antonio area, and 2 more relatives who live within 100 miles of the area.";

var famTwo = "This summer they plan on traveling to El Paso to visit as many family members as possible.";

console.log(osc.indexOf("4")); // returns the position of the first occurrence of a specified value in a string

// 5
var oscKidsIndex = osc.indexOf("5"); 
var oscKidsString = osc.slice(oscKidsIndex, oscKidsIndex + 1);
var oscKidsTotal = parseInt(oscKidsString, 10);
console.log(oscKidsTotal);

// 4
var twinsIndex = osc.indexOf("4");
var twinsString = osc.slice(twinsIndex, twinsIndex + 1);
var twinsTotal = parseInt(twinsString, 10);
console.log(twinsTotal);

// 1
var oldestIndex = osc.indexOf("1");
var oldestString = osc.slice(oldestIndex, oldestIndex + 1);
var oldestTotal = parseInt(oldestString, 10);
console.log(oldestTotal);

// 6
var relIndex = fam.indexOf("6");
var relString = fam.slice(relIndex, relIndex + 1);
var relTotal = parseInt(relString, 10);
console.log(relTotal);


var relTwo = fam.indexOf("2");
var relTwoTotal = parseInt("2", 10); // converts a string to an integer
console.log(relTwoTotal); // official total number of relatives living within 100 miles of San Antonio area

var miles = fam.indexOf("100");
var sep = fam.slice(miles, miles + 3);
var ten = sep.slice(0, 2);
var zero = sep.slice(2, 3);
var tenten = parseInt(ten, 10); // converts a string to an integer
var zerozero = parseInt(zero, 10); // converts a string to an integer

console.log(tenten); // first two digits of 100
console.log(zerozero);

var sumTotal = oscKidsTotal + twinsTotal + oldestTotal + relTotal + relTwoTotal + tenten + zerozero;
console.log("The variable sumTotal is storing " + sumTotal);

var town = fam.indexOf("San Antonio");
console.log(town); // returns the position of the first occurrence of a specified value in a string
var townName = fam.slice(town, town + 12);
console.log(townName); // prints San Antonio

var newCity = famTwo.replace("El Paso", townName);
console.log(newCity); // prints new string with El Paso replaced with San Antonio

for (var oldest = 1; oldest <= tenten; oldest++) { // loops through the oldest variable until it reaches the value of tenten which is 10
    console.log("I saw " + oldest + " cars(s) on my trip.");
}


//var oscKids = console.log(osc.indexOf("5")); // returns the position of the first occurrence of a specified value in a string

//var oscKids = 5; // total number of kids






// var name = "Chamoa Tierra Jackson";


// 
// console.log(osc);
// console.log(osc.indexOf("5")); // returns the position of the first occurrence of a specified value in a string

// var str = "Please locate where 'locate' occurs!";
// var pos = osc.indexOf("5"); // returns the position of the first occurrence of a specified value in a string
// console.log(pos);
