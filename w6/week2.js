function validateForm() {
    // Get input fields
    var firstName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    var email = document.getElementById("email");
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

    //confirm
    var confirm = document.getElementById("confirmation");

    //val first name

    if (firstName.value == "") {
        fnError.innerHTML = "<span style='color: red;'> *</span> First name is required";
        firstName.parentElement.classList.add("error");
    }
    else if (!namePattern.test(firstName.value)) {
        fnError.innerHTML = "<span style='color: red;'> *</span> Only letters and dashes allowed";
        firstName.parentElement.classList.add("error");
    }
    else {
        fnError.innerHTML = "";
        firstName.parentElement.classList.remove("error");
    }

    //val last name

    if (lastName.value == "") {
        lnError.innerHTML = "<span style='color: red;'> *</span> Last name is required";
        lastName.parentElement.classList.add("error");
    }
    else if (!namePattern.test(lastName.value)) {
        lnError.innerHTML = "<span style='color: red;'> *</span> Only letters and dashes allowed";
        lastName.parentElement.classList.add("error");
    }
    else {
        lnError.innerHTML = "";
        lastName.parentElement.classList.remove("error");
    }

    //val email

    if (email.value == "") {
        emailError.innerHTML = "<span style='color: red;'> *</span> Email is required";
        email.parentElement.classList.add("error");
    }
    else if (!emailPattern.test(email.value)) {
        emailError.innerHTML = "<span style='color: red;'> *</span> Invalid email";
        email.parentElement.classList.add("error");
    }
    else {
        emailError.innerHTML = "";
        email.parentElement.classList.remove("error");
    }

    //val phone

    if (phone.value == "") {
        phoneError.innerHTML = "<span style='color: red;'> *</span> Phone is required";
        phone.parentElement.classList.add("error");
    }
    else if (!phonePattern.test(phone.value)) {
        phoneError.innerHTML = "<span style='color: red;'> *</span> Phone must be 10 digits";
        phone.parentElement.classList.add("error");
    }
    else {
        phoneError.innerHTML = "";
        phone.parentElement.classList.remove("error");
    }

    //check if all fields have been submitted
    if (firstName.value == "" || lastName.value == "" || email.value == "" || phone.value == "") {
        //display error message
        document.getElementById("confirmation").innerHTML = "<p style='color: red;'>Please fill out all fields</p>";
    } 
    else {
        //construct an object to hold the form information
        var person = {
            fname: firstName.value,
            lname: lastName.value,
            email: email.value,
            phone: phone.value
        };

        //hide the form div
        document.getElementById("form").style.display = "none";

        //show the confirmation div
        document.getElementById("confirmation").style.display = "block";

        //write the object's information onto the confirmation
        document.getElementById("confirmation").innerHTML = `
            <h2>Confirmation</h2>
            <p>${person.fname}</p>
            <p>${person.lname}</p>
            <p>${person.email}</p>
            <p>${person.phone.substring(0, 3)}-${person.phone.substring(3, 6)}-${person.phone.substring(6)}</p>
        `;
    }


}
