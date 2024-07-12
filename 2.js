function signup(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve data
    var Fname = document.getElementById("fname").value;
    var Lname = document.getElementById("lname").value;
    var Mail = document.getElementById("mail").value;
    var Phone = document.getElementById("phone").value;
    var Pass = document.getElementById("pass").value;
    var Confirm = document.getElementById("cpass").value;

    var FirstName=localStorage.setItem("First Name",Fname);
    var LastName=localStorage.setItem("Last Name",Lname);
    var Email=localStorage.setItem("Email",Mail);
    var Phone_no=localStorage.setItem("Phone No",Phone);
    var Password=localStorage.setItem("Password",Pass);
    var Confirm_password=localStorage.setItem("Confirm Password",Confirm);

    // Validate that passwords match
    if (Pass !== Confirm) {
        alert("Passwords do not match!");
        return;
    }

    // Store user data in local storage
    localStorage.setItem("FirstName", Fname);
    localStorage.setItem("LastName", Lname);
    localStorage.setItem("Email", Mail);
    localStorage.setItem("PhoneNo", Phone);
    localStorage.setItem("Password", Pass);
    localStorage.setItem("ConfirmPassword", Confirm);
    localStorage.setItem("isLoggedIn", "false");

    // Redirect to the sign-in page
    window.location.href = "signin.html";
}

function login(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve data
    var Email = document.getElementById("mail").value;
    var Password = document.getElementById("pass").value;

    // Retrieve stored data from local storage
    var storedEMail = localStorage.getItem("Email");
    var storedPassword = localStorage.getItem("Password");

    // Validate login credentials
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
