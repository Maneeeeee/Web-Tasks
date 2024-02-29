document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let emailInput = document.getElementById("emailInput").value;
  
    if (!emailInput) {
        alert("Please enter an email address");
    } else {
        console.log("Email address:", emailInput);
    }
  });
  