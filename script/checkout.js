// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }
  // Defining a function to validate form
  function validateForm() {
    // Retrieving the values of form elements
    var name = document.contactForm.name;
    var CVV = document.contactForm.cvv;
    var num = document.contactForm.cardnum;
    var ExpDay = document.getElementById("exp_day");
    var ExpMonth = document.getElementById("exp_month")
    var checkboxes = document.getElementsByName("pay");
    var payments = [];
    var nameErr = numErr = cvvErr = payErr = true;
    for(let i=0; i<checkboxes.length; i++){
      if(checkboxes[i].checked){
        payments.push(checkboxes[i].value)
      }
    }
    if(payments.length > 1){
      printError("payErr", "Please select only one way of payment");
    }
    if(payments.length === 1){
      printError("payErr", "");
      payErr = false;
    }
    if(payments.length === 0){
      printError("payErr", "Please select the way of payment");
      
    }
    console.log(payments.length)
    // Validate name
    if (name.value == "") {
      printError("nameErr", "Please enter your name");
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(name.value) === false) {
        printError("nameErr", "Please enter a valid name must contain from 3 to 20 character");
      } else {
        printError("nameErr", "");
        nameErr = false;
      }
    }
  
    // Validate card number
    if (num.value == "") {
      printError("numErr", "Please enter your card number");
    } else {
      var regex = /^[1-9]+[0-9]\d{7}$/;
      if (regex.test(num.value) === false) {
        printError("numErr", "Please enter a valid number of your card must contain 9 digits");
      } else {
        printError("numErr", "");
        numErr = false;
      }
    }

    //validate CVV number
    if (CVV.value == "") {
      printError("cvvErr", "Please enter your CVV number of card");
    } else {
      var regex = /^[1-9]+[0-9]\d{2}$/;
      if (regex.test(CVV.value) === false) {
        printError("cvvErr", "Please enter a valid cvv number of your card must contain 4 digits");
      } else {
        printError("cvvErr", "");
        cvvErr = false;
      }
    }
    
    // Prevent the form from being submitted if there areany errors
    if ((nameErr || numErr || cvvErr || payErr ) == true) {
      return false;
    } else {
      swal("<h2> Shipped! </h2>", "<p> Your name is "+`${name.value}`+"</p>"+"<p> By "+`${payments[0]}`+"</p>"+ "<p> with card-num " + `${num.value}`+"</p>", "success");
      name.value = "";
      num.value = "";
      CVV.value = "";
      ExpDay.value = ""
      ExpMonth.value="";
      for(let i=0; i<checkboxes.length; i++){
        checkboxes[i].checked = false;
        }
      return false
      // Creating a string from input data for preview
      // var dataPreview = "You've entered the following details: \n" + "Full Name: " + name + "\n" + "Email Address: " + email + "\n" + "Mobile Number: " + mobile + "\n" + "Country: " + country + "\n" + "Gender: " + gender + "\n";
      // if (hobbies.length) {
      //   dataPreview += "Hobbies: " + hobbies.join(", ");
      // }
      // Display input data in a dialog box before submitting the form
      // alert("dataPreview");
    }
   
  };
  
  