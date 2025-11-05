var siteTopics = ["Fitness", "Strength Training", "Lifting", "Nutrition", "Wellness"];
var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var firstName = "Chamoa"
var birthyear = 1992;

siteTopics.push("Mindset");

console.log("The legnth of the Site Topics array is " + siteTopics.length);

var i =0;
for (i = 0; i < siteTopics.length; i++) {
    console.log( siteTopics[i]);
}

dayNames.reverse();
console.log("The reversed Day Names array is: " + dayNames);
dayNames.shift();
console.log("The Day Names array after shift is: " + dayNames);

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
    var Name = (firstName.toUpperCase) + (birthyear)();
} catch (error) {
    console.error("An error occurred: " + error.message);       
} finally {
    console.log(firstName + " was born in the year " + birthyear + ". I think the day was either a " + dayNames[1] + " or " + dayNames[3] + ".");
}
