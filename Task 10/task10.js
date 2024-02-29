let listItems = document.querySelectorAll("#ListId li");

listItems.forEach(function(item) {
    item.addEventListener("mouseover", function() {
        this.style.color = "red";
    });

    item.addEventListener("mouseout", function() {
        this.style.color = "black";
    });
});
