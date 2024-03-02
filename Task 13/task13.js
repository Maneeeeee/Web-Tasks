let tabContent = {
    tab1: "This is content for Tab 1",
    tab2: "This is content for Tab 2",
    tab3: "This is content for Tab 3"
  };
  
  let tabLinks = document.querySelectorAll(".tab-link");
  let tabContents = document.querySelectorAll(".tab-content");
  
  function handleTabClick(event) {
    tabContents.forEach(function(content) {
        content.classList.remove("active");
    });
  
    let tabId = event.target.dataset.tab;
  
    document.getElementById(tabId).classList.add("active");
  }
  
  tabLinks.forEach(function(link) {
    link.addEventListener("click", handleTabClick);
  });
  