var totalval;
var total=document.getElementById("total")
if(localStorage.getItem("total")){
   totalval=localStorage.getItem("total");
}
else{
  totalval=0
}
total.insertAdjacentHTML("afterbegin",totalval);
var summ=document.getElementById("summ")
// console.log(summ.parentElement)
var all_summaryitems = document.getElementById("all_summaryitems")
for(i=0;i<items.length;i++)
{
var selprod=`
<hr class="w-75"/>
<section class="d-flex my-2">
<div class="d-flex w-25 "><img class="w-50" src="${products[[items[i].pid]-1].product_img}" alt=""></div>
<div class="d-flex w-25 ">${products[[items[i].pid]-1].product_name}</div>
<div class="d-flex w-25 ">${products[[items[i].pid]-1].price}EGP</div>
<div class="d-flex w-25 "><h3>${items[i].count}</h3></div>
</section>

`
summ.parentElement.insertAdjacentHTML("beforeend", selprod);
}

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
      var regex = /^[1-9]+[0-9]\d{1}$/;
      if (regex.test(CVV.value) === false) {
        printError("cvvErr", "Please enter a valid cvv number of your card must contain 3 digits");
      } else {
        printError("cvvErr", "");
        cvvErr = false;
      }
    }
    
    // Prevent the form from being submitted if there areany errors
    if ((nameErr || numErr || cvvErr || payErr ) == true) {
      return false;
    } else {
      // swal("<h2> Shipped! </h2>", "<p> Your name is "+`${name.value}`+"</p>"+"<p> By "+`${payments[0]}`+"</p>"+ "<p> with card-num " + `${num.value}`+"</p>", "success");
      swal("<h2> Shipped! </h2>", "<p> Your name is "+`${name.value}`+"</p>"+"<p> By "+`${payments[0]}`+"</p>"+ "<p> with card-num " + `${num.value}`+"</p>", "success", {
        button: "OK",
      }).then(() => {
        all_summaryitems.innerHTML = "<h3 class='text-center my-4'>Order Summary</h3>"
        // console.log(totalval)
        // totalval=0
        // console.log(totalval)
        window.localStorage.removeItem("total");
        window.localStorage.removeItem("myitems");
        // totalval=0
        // total.insertAdjacentHTML("afterbegin",val);
        total.innerHTML = 0
      });
      name.value = "";
      num.value = "";
      CVV.value = "";
      ExpDay.value = ""
      ExpMonth.value="";
      for(let i=0; i<checkboxes.length; i++){
        checkboxes[i].checked = false;
        }
      return false
      
    }
  };
  
  
  