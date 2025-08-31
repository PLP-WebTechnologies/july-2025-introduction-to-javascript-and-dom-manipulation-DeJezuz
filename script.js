// Part 1: JavaScript Basics
let userName = "Gervásio";
let userAge = 25;

if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

// Part 2: Functions

// Function to calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total:", calculateTotal(10, 3));

// Function to format a greeting
function greetUser(name) {
  return `Hello, ${name}! Welcome back.`;
}
console.log(greetUser(userName));

// Part 3: Loops

// For loop to display items
const items = ["Laptop", "Mouse", "Keyboard"];
for (let i = 0; i < items.length; i++) {
  console.log(`Item ${i + 1}: ${items[i]}`);
}

// While loop countdown
let countdown = 5;
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}

// Part 4: DOM Manipulation

// Change text content
document.getElementById("output").textContent = greetUser(userName);

// Toggle message on button click
document.getElementById("toggle-button").addEventListener("click", function () {
  const output = document.getElementById("output");
  output.textContent =
    output.textContent === "" ? "You clicked the button!" : "";
});

// Dynamically create list items
items.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  document.getElementById("item-list").appendChild(li);
});
