// Access the first <h1> element and set its text content
const webHeading = document.querySelector("h1");
webHeading.textContent = "Welcome to my webpage!";

// Get elements for image switching functionality
const switchButton = document.getElementById("switchButton");
const webImage = document.getElementById("webImage");

// Define onlick event for switchButton to toggle the image source
switchButton.onclick = () => {
  const mySrc = webImage.getAttribute("src");
  if (mySrc === "images/img1.jpeg") {
    webImage.setAttribute("src", "images/img2.jpeg");
  } else {
    webImage.setAttribute("src", "images/img1.jpeg");
  }
};

// User name setting functionality
let myButton = document.getElementById("setNameButton");
let myHeading = document.querySelector("h1");

// Function to prompt for user's name and store it in localStorage
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to my webpage, ${myName}!`;
    }
  };

  // Initialize webpage with stored name or prompt for a new name
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to my webpage, ${storedName}!`;
  };
  
  // Set onclick event for myButton to change the user's name
  myButton.onclick = () => {
    setUserName();
  };

  // Add an additional click events listener to setNameButton for an alert
  document.getElementById("setNameButton").addEventListener("click", function() {
    alert("Your username has been changed!")
  }); 
