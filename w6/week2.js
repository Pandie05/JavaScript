function validateForm() {
    // Get input fields
    var firstName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    var email = document.getElementById("email");
    var emailConfirm = document.getElementById("email-confirm");
    var phone = document.getElementById("phone");

    // Get error spans
    var fnError = document.getElementById("fn-error");
    var lnError = document.getElementById("ln-error");
    var emailError = document.getElementById("email-error");
    var phoneError = document.getElementById("phone-error");

    // Regex patterns
    var namePattern = /^[a-zA-Z-]+$/; // Only letters and dashes allowed
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    var phonePattern = /^\d{10}$/; // Phone number must be 10 digits

    var valid = true;

    // Validate First Name
    if (!firstName.value.match(namePattern)) {
        fnError.innerHTML = "* Please input a valid name.";
        firstName.previousElementSibling.style.color = "red";
        valid = false;
    } else {
        fnError.innerHTML = "";
        firstName.previousElementSibling.style.color = "black";
    }

    // Validate Last Name
    if (!lastName.value.match(namePattern)) {
        lnError.innerHTML = "* Please input a valid name.";
        lastName.previousElementSibling.style.color = "red";
        valid = false;
    } else {
        lnError.innerHTML = "";
        lastName.previousElementSibling.style.color = "black";
    }

    // Validate Email
    if (!email.value.match(emailPattern)) {
        emailError.innerHTML = "* Please input a valid email address.";
        email.previousElementSibling.style.color = "red";
        valid = false;
    } else {
        emailError.innerHTML = "";
        email.previousElementSibling.style.color = "black";
    }

    // Validate Email Confirmation
    if (emailConfirm.value !== email.value) {
        emailError.innerHTML = "* Emails do not match.";
        email.previousElementSibling.style.color = "red";
        valid = false;
    } else if (email.value.match(emailPattern)) {
        emailError.innerHTML = "";
        email.previousElementSibling.style.color = "black";
    }

    // Validate Phone Number
    if (!phone.value.match(phonePattern)) {
        phoneError.innerHTML = "* Please input a valid 10-digit phone number.";
        phone.previousElementSibling.style.color = "red";
        valid = false;
    } else {
        phoneError.innerHTML = "";
        phone.previousElementSibling.style.color = "black";
    }

    // If form is valid, hide form and show confirmation
    if (valid) {
        document.getElementById("form").style.display = "none"; // Hide form

        var person = {
            fname: firstName.value,
            lname: lastName.value,
            email: email.value,
            phone: phone.value.substring(0, 3) + "-" + phone.value.substring(3, 6) + "-" + phone.value.substring(6)
        };

        // Show confirmation
        document.getElementById("confirmation").style.display = "block";
        document.getElementById("info").innerHTML = 
            "First Name: " + person.fname + "<br>" +
            "Last Name: " + person.lname + "<br>" +
            "Email: " + person.email + "<br>" +
            "Phone: " + person.phone;
    }
}
