function myFunction(){ // Retrieving data
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var comment = document.getElementById("comment").value;
    var message = "Thanks for subscribing to our newsletter " + firstname + " " + lastname + ". We have sent an email to " + email + " to confirm your subscription.";
    var agree = document.getElementById("agree").checked;
    if (firstname === "" || lastname === "" || email === "" || agree === false) {
        alert("Please make sure you have entered your full name, email address and you agree to our terms of service.");
    } else {
        alert(message);
    }
    var fname = localStorage.setItem("firstname",firstname) // Storing data
    var lname = localStorage.setItem("lastname", lastname)
    var em = localStorage.setItem("email",email)
    var pn = localStorage.setItem("phone",phone)
    var cmt = localStorage.setItem("comment",comment)
}