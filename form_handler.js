function submitContactForm(event) { // Retrieving data
    event.preventDefault();
    var firstname = document.getElementById("firstname").value.trim();
    var lastname = document.getElementById("lastname").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var dob = document.getElementById("dob").value.trim();
    var comments = document.getElementById("message").value.trim();
    var message = "Thanks for subscribing to our newsletter " + firstname + " " + lastname + ". We have sent an email to " + email + " to confirm your subscription.";
    var agree = document.getElementById("agree").checked;
    if (firstname === "" || lastname === "" || email === "" || phone === "" ||
        dob === "" || agree === false) {
        alert("Please make sure you have entered your full name, email address and you agree to our terms of service.");
    } else {
        alert(message);
    }
    var fname = localStorage.setItem("firstname",firstname) // Storing data
    var lname = localStorage.setItem("lastname", lastname)
    var em = localStorage.setItem("email",email)
    var  formData = {
        records: [
            {
                fields: {
                    "First Name": firstname,
                    "Last Name": lastname,
                    "Email": email,
                    "Phone Number": phone,         
                    "Date of Birth": dob,           
                    "Comments": comments
                }
            }
        ]
    }
    fetch(
        "https://api.airtable.com/v0/app0LuwlBRJfEvV22/Table%201",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                Authorization: "Bearer patyb30w6G6BLx8uW.6f6fa8a5b3ec6524c81a12ff9a1e2819c77b5c245869509018b6771092781d71",
            },
            body: JSON.stringify(formData),
        })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log("Success:", data);
        alert(message);
    })
    .catch(function(error) {
        console.error("Error:", error);
        alert("There was a problem submitting your form.");
    });
}