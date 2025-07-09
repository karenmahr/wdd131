//Declare three (3) variables that hold references to the input, button, and list elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");;
const list = document.querySelector("li");

//Create a li element that will hold each entry's chapter title and an associated delete button
const li = document.createElement("li");

//Create a delete button
const deleteButton = document.createElement("button");

//Populate the li element variable's textContent or innerHTML with the input value
li.textContent = input.value

//Populate the button textContent with a ❌
button.textContent = "❌";

//Append the li element variable with the delete button.
li.append(deleteButton);

//Append the li element variable to the unordered list in your HTML
li.append(li);