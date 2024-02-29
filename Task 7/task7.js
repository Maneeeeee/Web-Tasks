function HideAndShow() {
    let paragraph = document.getElementById("myParagraph");
    let button = document.getElementById("toggleButton");
  
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
        button.textContent = "Hide";
    } else {
        paragraph.style.display = "none";
        button.textContent = "Show";
    }
  }
  