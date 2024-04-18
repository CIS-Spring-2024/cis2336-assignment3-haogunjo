document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Validate name and email fields
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    
    if (name === "" || email === "") {
        alert("Please enter your name and email address.");
        return;
    }

    // Validate selected items and quantities
    var breakfastItem = document.getElementById("breakfast").value;
    var breakfastQuantity = document.getElementById("breakfastQuantity").value;
    var lunchItem = document.getElementById("lunch").value;
    var lunchQuantity = document.getElementById("lunchQuantity").value;
    var dinnerItem = document.getElementById("dinner").value;
    var dinnerQuantity = document.getElementById("dinnerQuantity").value;

    if (breakfastItem === "" || lunchItem === "" || dinnerItem === "" ||
        isNaN(breakfastQuantity) || isNaN(lunchQuantity) || isNaN(dinnerQuantity) ||
        parseInt(breakfastQuantity) < 1 || parseInt(lunchQuantity) < 1 || parseInt(dinnerQuantity) < 1 ||
        parseInt(breakfastQuantity) > 10 || parseInt(lunchQuantity) > 10 || parseInt(dinnerQuantity) > 10) {
        alert("Please select items and specify quantities (1-10) for each.");
        return;
    }

    // If all validations pass, you can submit the form or process further
    alert("Order submitted successfully!");
    // Here you can submit the form using AJAX or perform any other necessary actions
});

document.addEventListener("DOMContentLoaded", function() {
    var body = document.querySelector("body");
    var img = new Image();
    img.src = "images/background12.png";
    img.alt = "Background Image";
    img.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1;";
    body.appendChild(img);
});
