
var num1 = window.prompt("Enter a number between 1 and 30"); // Prompt user for first number
var num2 = window.prompt("Enter a number between 1 and 150"); // Prompt user for second number

num1 = parseInt(num1); // Convert first input from string to number
num2 = parseInt(num2); // Convert second input from string to number

while (isNaN(num1) || num1 < 1 || num1 > 30) { // Validate first input
    alert("Error: Please enter a valid number between 1 and 30."); // Alert user of error
    num1 = window.prompt("Enter a number between 1 and 30"); // Prompt user again
    num1 = parseInt(num1); // Convert input from string to number
}

while (isNaN(num2) || num2 < 1 || num2 > 150) { // Validate second input
    alert("Error: Please enter a valid number between 1 and 150."); // Alert user of error
    num2 = window.prompt("Enter a number between 1 and 150"); // Prompt user again
    num2 = parseInt(num2); // Convert input from string to number
}

var product = num1 * num2; // Multiply the two numbers and store the result

// Determine if the product is even or odd
if (product % 2 === 0) {
    console.log("The product is even."); // Log if the product is even
} else {
    console.log("The product is odd."); // Log if the product is odd
}           
console.log("The product of " + num1 + " and " + num2 + " is " + product + "."); // Log the product
console.log("The program has completed successfully."); // Indicate program completion