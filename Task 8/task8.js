let x = 0
let button = document.getElementById("toggleButton");
let CountOfClick = document.getElementById("count");

function Count() {
    x++;
    CountOfClick.textContent = "Button has been clicked " + x + " times"; 
}
