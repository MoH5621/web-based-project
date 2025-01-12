function ValidateName() {
    let isValid = true;
    let fname = document.getElementById("Fname").value;
    let lname = document.getElementById("Lname").value;
    let gender = document.getElementById("gender").value;
    let phone = document.getElementById("phone").value;
    let age = document.getElementById("age").value;

    document.getElementById("FnameER").innerHTML = "";
    document.getElementById("LnameER").innerHTML = "";
    document.getElementById("Gerror").innerHTML = "";
    document.getElementById("phoneER").innerHTML = "";
    document.getElementById("ageER").innerHTML = "";

    document.getElementById("Fname").style.borderColor = "";
    document.getElementById("Lname").style.borderColor = "";
    document.getElementById("gender").style.borderColor = "";
    document.getElementById("phone").style.borderColor = "";
    document.getElementById("age").style.borderColor = "";

    if (fname == ""||!isNaN(fname)) {
        document.getElementById("FnameER").innerHTML = "* You must enter a First Name.";
        document.getElementById("Fname").style.borderColor = "red";
        isValid = false;
    }
    else 
    document.getElementById("Fname").style.borderColor = "green";

    
    if (lname == ""||!isNaN(lname)) {
        document.getElementById("LnameER").innerHTML = "* You must enter a Last Name.";
        document.getElementById("Lname").style.borderColor = "red";
        isValid = false;
    }
    else 
    document.getElementById("Lname").style.borderColor = "green";

    if (phone == "") {
        document.getElementById("phoneER").innerHTML = "* You must enter a real phone number.";
        document.getElementById("phone").style.borderColor = "red";
        isValid = false;
    }
    else
    document.getElementById("phone").style.borderColor = "green";

    if (age == "") {
        document.getElementById("ageER").innerHTML = "* You must enter Your Age.";
        document.getElementById("age").style.borderColor = "red";
        isValid = false;
    }
    else
    document.getElementById("age").style.borderColor = "green";

    if (gender == 0) {
        document.getElementById("Gerror").innerHTML = "* You must select a gender.";
        document.getElementById("gender").style.borderColor = "red";
        isValid = false;
    }
    else 
    document.getElementById("gender").style.borderColor = "green";

    return isValid;
}

function ValidateCourses() {
    let isValid = false;
    let totalCost = 0;

    const course1 = document.getElementById('course1');
    const course2 = document.getElementById('course2');
    const course3 = document.getElementById('course3');
    const course4 = document.getElementById('course4');
    const course5 = document.getElementById('course5');
   
    const errorElement = document.getElementById('courseError');
    const totalCostElement = document.getElementById('totalCost');
    
    errorElement.innerHTML = "";

    if (course1.checked) {
        isValid = true;
        totalCost += 149;
    }
    if (course2.checked) {
        isValid = true;
        totalCost += 79;
    }
    if (course3.checked) {
        isValid = true;
        totalCost += 199;
    }
    if (course4.checked) {
        isValid = true;
        totalCost += 49;
    }
    if (course5.checked) {
        isValid = true;
        totalCost += 129;
    }

    if (!isValid) {
        errorElement.innerHTML = "* You must select at least one course.";
        totalCostElement.innerHTML = "0.00";
        return false;
    } else {
        totalCostElement.innerHTML = totalCost;
        return true;
    }
}

function ValidateForm() {
    let isValidName = ValidateName();
    let isValidCourses = ValidateCourses();
    
    if (isValidName && isValidCourses) {
       
        const fname = document.getElementById("Fname").value;
        const lname = document.getElementById("Lname").value;
        const age = document.getElementById("age").value;
        const gender = document.getElementById("gender").value;
        const phone = document.getElementById("phone").value;

        let selectedCourses = "";

        if (document.getElementById("course1").checked) {
            selectedCourses += "Effective Communication Skills\n";
        }
        if (document.getElementById("course2").checked) {
            selectedCourses += "Time Management Techniques\n";
        }
        if (document.getElementById("course3").checked) {
            selectedCourses += "Leadership Essentials\n";
        }
        if (document.getElementById("course4").checked) {
            selectedCourses += "Conflict Resolution Strategies\n";
        }
        if (document.getElementById("course5").checked) {
            selectedCourses += "Team Collaboration\n";
        }

       const totalCost = document.getElementById("totalCost").textContent;

       const reportArea = document.getElementById("reportArea");
       reportArea.value = "Name: " + fname + " " + lname + "\n";
       reportArea.value += "Phone Number : " + phone + "\n";
       reportArea.value += "Age : " + age + "\n";
       reportArea.value += "Gender: " + gender + "\n";
       reportArea.value += "Selected Courses :\n" + selectedCourses;
       reportArea.value += "Total Cost: $" + totalCost;

       return false;
}
return false;
}