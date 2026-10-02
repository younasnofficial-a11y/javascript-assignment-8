// Get element of id "main-content"

var mainContent = document.getElementById("main-content");


// Display all child elements of "main-content"

console.log(mainContent.children);


// Get all elements of class "render"
// and show their innerHTML in browser

var renderElements = document.getElementsByClassName("render");

for (var i = 0; i < renderElements.length; i++) {

    document.write(renderElements[i].innerHTML + "<br>");

}


//Fill first-name input using JavaScript

document.getElementById("first-name").value = "Younas";


// Fill last-name and email

document.getElementById("last-name").value = "Khan";

document.getElementById("email").value = "younas@example.com";