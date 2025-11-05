var siteTopics = ["Fitness", "Strength Training", "Lifting", "Nutrition", "Wellness"];
var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var firstName = "Chamoa"
var birthyear = 1992;

siteTopics.push("Mindset"); // Add a new topic to the end of the array

console.log("The legnth of the Site Topics array is " + siteTopics.length);

var i =0; // Initialize counter variable
for (i = 0; i < siteTopics.length; i++) { // Loop through each element in the array
    console.log( siteTopics[i]);    
}

dayNames.reverse(); // Reverse the order of the array
console.log("The reversed Day Names array is: " + dayNames); // Log the reversed array
dayNames.shift(); // Remove the first element from the array
console.log("The Day Names array after shift is: " + dayNames); // Log the array after removing the first element

//try catch block
try {
    var firstDay = dayNames[0]; // Accessing the first element of the array
    if (firstDay === "Sunday") {
        throw new Error("Sunday should be missing");
    } else {
        console.log("The first day in the array is: " + firstDay);
    }
} catch (error) {
    console.error(error);
}

//finally block
try {
    var Name = (firstName.toUpperCase) + (birthyear)(); // This will cause an error
} catch (error) {
    console.error("An error occurred: " + error.message);     // Log the error message  
} finally { // This block will always execute
    console.log(firstName + " was born in the year " + birthyear + ". I think the day was either a " + dayNames[1] + " or " + dayNames[3] + ".");
}
