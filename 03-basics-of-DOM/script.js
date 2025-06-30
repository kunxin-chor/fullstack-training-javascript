console.log("Externally included JavaScript");
// No need for DOMContentLoaded event because
// all the HTML elements would have been created
// as script.js is the last element in body.
const urgent = document.getElementById("urgent");
urgent.innerHTML = "It's raining so bring in your laundry";