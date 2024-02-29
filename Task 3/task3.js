let div = 0;


function changeTheButton()
{
    if(div == 1)
    {
        document.querySelector("#loginButton").textContent = "The button is clicked";
        document.querySelector("#state").textContent = "Thank you";
        
        div = 0;
    }
    else 
    {
        document.querySelector("#loginButton").textContent = "The button is not clicked";
        document.querySelector("#state").textContent = "Click the button"; 

        div = 1;
    }
}
document.getElementById("loginButton").addEventListener("click", changeTheButton);