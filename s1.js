document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the values from input fields
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var password = document.getElementById("password").value;
  
    // Simple validation
    if (firstname === "Kshitij" && lastname === "Chitransh" && password === "45@#67") {
      document.getElementById("message").textContent = "Login successful!";
    } else {
      document.getElementById("message").textContent = "Invalid username or password.";
    }
  });
  