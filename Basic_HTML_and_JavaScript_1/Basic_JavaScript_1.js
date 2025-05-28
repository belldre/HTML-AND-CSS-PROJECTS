// This is the alert you created earlier
alert("Hello from Basic_JavaScript_1.js!");

// This is the function My_First_Function
function My_First_Function() {
    var myText = "Kiss me, I'm Irish!"; 
    
    // Get the paragraph element by its ID
    var irishParagraph = document.getElementById("Irish");
    
    // Set the text content of the paragraph
    irishParagraph.innerHTML = myText; 

    // Add the CSS class to apply the green color
    irishParagraph.classList.add("green-text");
}