function saveFormDataThrottled() {
    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };
  
    let formDataJSON = JSON.stringify(formData);
  
    if (!saveFormDataThrottled.timeout) {
        saveFormDataThrottled.timeout = setTimeout(function() {
            localStorage.setItem("formData", formDataJSON);
            saveFormDataThrottled.timeout = null;
        }, 1000); 
    }
  }
  
  document.getElementById("name").addEventListener("input", saveFormDataThrottled);
  document.getElementById("email").addEventListener("input", saveFormDataThrottled);
  
  function restoreFormData() {
    let savedData = localStorage.getItem("formData");
    if (savedData) {
        let formData = JSON.parse(savedData);
        document.getElementById("name").value = formData.name;
        document.getElementById("email").value = formData.email;
    }
  }
  
  window.onload = restoreFormData;
  