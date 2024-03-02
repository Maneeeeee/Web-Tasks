let form = document.getElementById("myForm");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");

form.addEventListener("submit", function(event) {
    nameError.textContent = "";
    emailError.textContent = "";


    if (nameInput.value.trim() === "") {
        nameError.textContent = "Please enter your name";
        event.preventDefault(); 
    }

    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address";
        event.preventDefault(); 
    }
});