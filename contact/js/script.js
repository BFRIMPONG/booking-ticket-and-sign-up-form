document.getElementById("submit").addEventListener("click", () => {
    let fullName = document.getElementById("fName").value;
    let date = document.getElementById("date").value;
    let people = document.getElementById("num-people").value;
    let message = document.querySelector("textarea").value;
    let oneWay = document.getElementById("oneway");
    let roundTrip = document.getElementById("roundtrip");


    // Validations 
    let trip;

    if (roundTrip.checked == true) {
        trip = roundTrip.value;
    }
    else if (oneWay.checked) {
        trip = oneWay.value;
    }

    if (fullName == "") {
        document.getElementById("fName").style.borderColor = 'red';
        alert("Full Name is required");
        fName.focus();
        return false;
    }

    else if (date == "") {
        document.getElementById("date").style.borderColor = 'red';
        alert(" Please choose a valid date");
        return false;
    }

    else if (people == "") {
        document.getElementById("num-people").style.borderColor = 'red';
        alert("Type the number of people");
        return false;
        
    }

    else if (!(roundTrip.checked) && !(oneWay.checked)) {
        alert("Please select your preferred trip type");
    }
    else if (message == "") {
        document.querySelector("textarea").style.borderColor = 'red';
        alert("Please enter a message");
        return false;
    }
   
// if everything checks 

else {
    alert (" Thank you! Form successfully submitted!")
}


})



