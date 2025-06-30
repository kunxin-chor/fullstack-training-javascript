console.log("JavaScript from header.js")
// The document will fire the DOMContentLoaded event when
// the HTML elements have been loaded
document.addEventListener("DOMContentLoaded", function () {
    const importantElement = document.getElementById('important');
    // importantElement will be an object that represents the HTML element
    importantElement.innerHTML = "Goodbye World";
    console.dir(importantElement);
})
