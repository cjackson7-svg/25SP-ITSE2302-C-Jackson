// Select the paragraph element within the .intro class
const bodyParagraph = document.querySelector(".intro p");
// Update the text content of the paragraph with a motivational message
bodyParagraph.textContent =
"Life has its ups and downs, but with the right mindset and strong habits, it can be deeply rewarding. When your back is against the wall, sometimes all you can do is rise—and that’s when your highest self shows up. Even when the weight of the world feels like it’s on your shoulders, you have the strength to push through and keep going. Never give up; in time, you’ll get to where you’re meant to be and even surprise yourself along the way.";
// Log the updated text content to the console
console.log(bodyParagraph.textContent);
// Select all elements with the class .content-title
const headings = document.querySelectorAll(".content-title");
// Define an array of new headings to replace the existing ones
const newHeadings = [ // Array of new headings
"Rise Above Every Challenge",
"Build Stronger Habits",
"Keep Moving Forward"
];
// Iterate over each heading and update its text content with the corresponding new heading
headings.forEach((heading, index) => { // Use forEach to loop through each heading
heading.textContent = newHeadings[index]; // Update the text content of the heading with the new heading from the array
});