var body=document.getElementById("header")
var num=0
// console.log(items.length)
if(localStorage.getItem("myitems"))
{
  var items=JSON.parse(localStorage.getItem('myitems'));
  for (var i = 0; i < items.length; i++) {
    num++;
  }
}
else
{
  num=0;
}
let navbar=
`
<a href="index.html"><img src="images/logo.png" alt="logo img" class="logo" /></a>
<div>
  <ul id="navbar">
    <li><a class="active" href="index.html">Home</a></li>
    <li><a href="product.html">Product</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li style="padding-top: 8px" >
    <a  href="cart.html">
    <i class="bi bi-cart-check-fill fs-3 icon-black">   
    <sup style="font-size:1.5vw;color:#dec475">${num}</sup>
    </i>
    </a>
    </li>
    <li style="padding-top: 8px" id="person">
    <a href="login.html"> <i class="bi bi-person fs-3"></i></a>
    </li>
      <a href="#" id="close" ><i class="bi bi-x fs-1"></i></a>
  </ul>
</div>
<div id="mobile">
<i onclick="location.href='login.html'class="bi bi-person fs-1 icon-black"></i>
<i onclick="location.href='#'class="bi bi-cart-check-fill fs-1 icon-black"></i>
<i id="bar" class="bi bi-list fs-1" style="color:#d1b761 !important; font-size:7vw !important"></i>
     
</div>
`
body.innerHTML=navbar;

const bar = document.getElementById('bar');
const c = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
  bar.addEventListener('click',()=>{
    nav.classList.add('active')
  })
}

if(c){
  c.addEventListener('click',() =>{
    nav.classList.remove('active');
  })
}

var path = window.location.pathname;
var page = path.split("/").pop();
// console.log( page );
   


var li=document.getElementsByTagName("li");

for(let i=0;i<4;i++) 
{
// console.log(li[i].childNodes[0].classList)
li[i].childNodes[0].classList.remove("active")
}

// console.log(li[4].childNodes[1])

switch(page)
{
  case"index.html":
     li[0].childNodes[0].classList.add("active")
      break;
  case"product.html":
     li[1].childNodes[0].classList.add("active")
      break;
  case"about.html":
     li[2].childNodes[0].classList.add("active")
     break;
  case"contact.html":
     li[3].childNodes[0].classList.add("active")
     break;
  case"cart.html":
     li[4].childNodes[1].classList.add("active")
     break;
  case"login.html":
     li[5].childNodes[1].classList.add("active")
     break;
}

var person=document.getElementById("person")
const nam =localStorage.getItem("username")? localStorage.getItem("username"):"";
// console.log(name)
text = document.createTextNode(nam);
// if(localStorage.getItem("username"))
// { 
//   // console.log(person.childNodes[1].outerHTML)
//   person.childNodes[1].innerHTML=`<i class="bi bi-door-closed-fill fs-3" onclick="presslogout();return false;"></i>`
// }
if(localStorage.getItem("username"))
{ 
  person.childNodes[1].innerHTML=`
       <span> ${nam} </span>  
    <a href=""> <i class="bi bi-box-arrow-right fs-3 p-2" onclick="logout()"></i></a>`
}
function logout()
{ 
  // alert("done")
  window.localStorage.removeItem("username");
  window.localStorage.removeItem("useremail");
  window.localStorage.removeItem("password");
  window.localStorage.removeItem("myitems");
  window.localStorage.removeItem("total");
}

// function presslogout()
// {
//   // alert("loged out")
// swal({   title: "Log Out ...!",   
// text: "Are you sure You want to logout",   
// type: "warning",      
// showCancelButton: true,   
//     confirmButtonColor: "#DD6B55",   
//     confirmButtonText: "Remove My Account!",   
//     cancelButtonText: "I am not sure!",   
//     closeOnConfirm: false,   
//     closeOnCancel: false }, 
//     function(isConfirm){   
//         if (isConfirm) 
//     {   
//        swal("Account Removed!", "Your account is removed!", "success");  
        
//         } 
//         else {  
//             swal("Hurray", "Account is not removed!", "error");   
//             } });
//           }
