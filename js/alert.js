// Select the button element
const myButton = document.getElementById('myButton');

// Add a click event listener to the button
myButton.addEventListener('click', function(event) {
  // Display the alert
  alert("In case We don't see you Good morning, Good afternoon and Good night!");
  
  // Prevent the default action of the button click
  event.preventDefault();
});

  