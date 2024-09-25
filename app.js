// // 1. 
// let studentNamesLiteral = [];

// // 2.  
// let studentNamesObject = new Array();

// // 3.  
// let stringArray = ["Alice", "Bob", "Charlie"];
// // 4.  
// let numbersArray = [10, 20, 30, 40, 50];

// // 5.  
// let booleanArray = [true, false, true, false];

// // 6.  
// let mixedArray = ["Alice", 25, true, null];

// // 7. 
// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];


// qualifications.forEach(function(qualification) {
//     document.write(qualification + "<br>");
// });

// // 8.  

// // Initialize arrays to store student names and scores
// var studentNames = ["Michael", "john", "Tony"];
// var studentScores = [320, 230, 480]; // Example scores for each student
// var totalMarks = 500;

// // Display headers
// document.write(` Score of ${studentNames[0]} is ${studentScores[0]}. ${'Percentage (64%)'}<br>`);
// document.write(` Score of ${studentNames[1]} is ${studentScores[1]}. ${'Percentage (46%)'}<br>`);
// document.write(` Score of ${studentNames[2]} is ${studentScores[2]}. ${'Percentage (96%)'}`);

// 9.

// Initialize an array with color names
// let colors = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black"];
// console.log("Initial colors:", colors);

// // a. Ask the user what color to add to the beginning
// let newColorStart = prompt("What color do you want to add to the beginning?");
// colors.unshift(newColorStart);
// console.log("After adding to the beginning:", colors);

// // b. Ask the user what color to add to the end
// let newColorEnd = prompt("What color do you want to add to the end?");
// colors.push(newColorEnd);
// console.log("After adding to the end:", colors);

// // c. Add two more colors to the beginning
// let color1 = prompt("Add another color to the beginning:");
// let color2 = prompt("Add one more color to the beginning:");
// colors.unshift(color1, color2);
// console.log("After adding two more to the beginning:", colors);

// // d. Delete the first color
// colors.shift();
// console.log("After deleting the first color:", colors);

// // e. Delete the last color
// colors.pop();
// console.log("After deleting the last color:", colors);

// // f. Ask the user where to add a color and add it
// var indexToAdd = parseInt(prompt("At which index do you want to add a color?"));
// var colorToAdd = prompt("What color do you want to add?");
// if (indexToAdd >= 0 && indexToAdd <= colors.length) {
//     colors.splice(indexToAdd, 0, colorToAdd);
// } else {
//     console.log("Invalid index. No color added.");
// }
// console.log("After adding a color at index", indexToAdd, ":", colors);

// // g. Ask the user where to delete colors and delete them
// var indexToDelete = parseInt(prompt("At which index do you want to delete colors?"));
// var countToDelete = parseInt(prompt("How many colors do you want to delete?"));
// if (indexToDelete >= 0 && indexToDelete < colors.length) {
//     colors.splice(indexToDelete, countToDelete);
// } else {
//     console.log("Invalid index. No colors deleted.");
// }
// console.log("After deleting", countToDelete, "color(s) from index", indexToDelete, ":", colors);

// 10.
 
// // Store student scores in an array
// var studentScores = [320,230,480,120];

// // Display the original scores
// document.write(  `Score of student:, ${studentScores} <br> `);

// // Sort the array in ascending order
// studentScores.sort((a, b) => a - b);

// // Display the sorted scores
// document.write("order scores of student:", studentScores);

// 11.
// Initialize an array with city names
// var cities = ["karachi", "Lahore", "islamabad", "Quetta", "Peshawar"];

// // Create an array to hold selected cities
// var selectedCities = [];

// // Copy 3 elements from cities array to selectedCities
// selectedCities = cities.slice(0, 3); // Copies the first three cities

// // Display the original and selected cities
// document.write("Original Cities:", cities);
// document.write("Selected Cities:", selectedCities);

// // 12.
// var arr = ["This ", "is ", "my ", "cat"];

// // Joining the array elements into a single string without a separator
// var result = arr.join('');
// document.write(result); // Output: "This is my cat"

// // Joining the array elements with a space as a separator
// var resultWithSpace = arr.join(' '); 
// document.write(resultWithSpace); // Output: "This is my cat"

 // Create an empty array to serve as the queue
// var fifoQueue = [];

// Adding values to the queue (enqueue)
// fifoQueue.push("Keyboard");
// fifoQueue.push("Mouse");
// fifoQueue.push("Printer");
// fifoQueue.push("Monitor");

// // Output the devices in the order they were stored
// console.log("Devices in FIFO order:");
// for (var i = 0; i < fifoQueue.length; i++) {
//     console.log(fifoQueue[i]); // Outputs each device on a new line
// }

// // Accessing and removing values in FIFO order (dequeue)
// var firstValue = fifoQueue.shift(); // Removes "Keyboard"
//  document.write(firstValue); // Output: "Keyboard"

// var secondValue = fifoQueue.shift(); // Removes "Mouse"
// document.write(secondValue); // Output: "Mouse"

// var thirdValue = fifoQueue.shift(); // Removes "Printer"
// document.write(thirdValue); // Output: "Printer"

// var fourthValue = fifoQueue.shift(); // Removes "Monitor"
// document.write(fourthValue); // Output: "Monitor"

// // Attempting to dequeue from an empty queue
// var emptyQueueValue = fifoQueue.shift(); // Removes nothing, returns undefined
// if (emptyQueueValue === undefined) {
//     document.write("Queue is empty"); // Output: "Queue is empty"
// }

// 13.
// Create an empty array to serve as the stack
// var lifoStack = [];

// // Adding values to the stack (push)
// lifoStack.push("Keyboard");
// lifoStack.push("Mouse");
// lifoStack.push("Printer");
// lifoStack.push("Monitor");

// // Output the values in the order they were stored
// document.write("Values in LIFO order:");
// document.write("Last added: " + lifoStack[lifoStack.length - 1]); // Monitor

// // Accessing and removing values in LIFO order (pop)
// var lastValue = lifoStack.pop(); // Removes "Monitor"
// document.write(lastValue); // Output: "Monitor"

// lastValue = lifoStack.pop(); // Removes "Printer"
// document.write(lastValue); // Output: "Printer"

// lastValue = lifoStack.pop(); // Removes "Mouse"
// document.write(lastValue); // Output: "Mouse"

// lastValue = lifoStack.pop(); // Removes "Keyboard"
// document.write(lastValue); // Output: "Keyboard"

// // Attempting to pop from an empty stack
// if (lifoStack.length === 0) {
//     document.write("Stack is empty"); // Output: "Stack is empty"
// }

// Array of phone manufacturers
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Start creating the dropdown/select menu
// document.write('<label for="manufacturers">Choose a phone manufacturer:</label>');
// document.write('<select id="manufacturers">');

// // Loop through the array and add each manufacturer as an option
// for (var i = 0; i < manufacturers.length; i++) {
//     document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
// }

// document.write('</select>');

