function signup(){
    // Retrieve data
    var Fname=document.getElementById("fname").value;
    var Lname=document.getElementById("lname").value;
    var Mail=document.getElementById("mail").value;
    var Phone=document.getElementById("phone").value;
    var Pass=document.getElementById("pass").value;
    var Confirm=document.getElementById("cpass").value;

    // Storing data
    localStorage.setItem("FirstName", Fname);
    localStorage.setItem("LastName", Lname);
    localStorage.setItem("Email", Mail);
    localStorage.setItem("Phone No", Phone);
    localStorage.setItem("Password", Pass);
    localStorage.setItem("Confirm Password", Confirm);

    localStorage.setItem("isLoggedIn", "true");

    if (Pass !== Confirm) {
        alert("Passwords do not match!");
        return;
    }
}
function login() {
    // Retrieve data from form
    var Email = document.getElementById("mail").value;
    var Password = document.getElementById("pass").value;

    // Retrieve stored email and password
    var storedEmail = localStorage.getItem("Email");
    var storedPassword = localStorage.getItem("Password");

    // Check if email and password match
    if (Email === storedEmail && Password === storedPassword) {
        // Set login status
        localStorage.setItem("isLoggedIn", "true");

        alert("Login successful!");
    } 
    else {
        alert("Incorrect email or password.");
    }
}


function displayProfileInfo() {
    var isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
        alert("You must log in first.");
        window.location.href = "signin.html";
        return;
    }
    
    var FirstName = localStorage.getItem("FirstName");
    var LastName = localStorage.getItem("LastName");
    var Mail = localStorage.getItem("Email");

    document.getElementById("name").value = `${FirstName} ${LastName}`;
    document.getElementById("mail").value = Mail;
}

function logout() {
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "signin.html";
}

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.endsWith("profile.html")) {
        displayProfileInfo();
    }
});
