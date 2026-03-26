function submitContactForm(event) { // Retrieving data
    event.preventDefault();
    var firstname = document.getElementById("firstname").value.trim();
    var lastname = document.getElementById("lastname").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var phonePattern = /^[0-9+\-\s()]+$/;
    var dob = document.getElementById("dob").value.trim();
    var comments = document.getElementById("message").value.trim();
    var message = "Thanks for subscribing to our newsletter " + firstname + " " + lastname + ". We have sent an email to " + email + " to confirm your subscription.";
    var agree = document.getElementById("agree").checked;
    if (firstname === "" || lastname === "" || email === "" || phone === "" ||
        dob === "" || agree === false) {
        alert("Please make sure you have entered your full name, email address and you agree to our terms of service.");
    }
    else if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (numbers only).");
    }
    else {
        alert(message);
    }
    var fname = localStorage.setItem("firstname",firstname) // Storing data
    var lname = localStorage.setItem("lastname", lastname)
    var em = localStorage.setItem("email",email)
}