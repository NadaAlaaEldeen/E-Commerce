var body=document.getElementById("header")
var num=0
var items=JSON.parse(localStorage.getItem('myitems'));
  for (var i = 0; i < items.length; i++) {
    num++;
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
    <sup style="font-size:1.5vw;color:red">${num}</sup>
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
<i id="bar" class="bi bi-list fs-1"></i>
     
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
const nam = localStorage.getItem("username");
// console.log(name)
text = nam!=""? document.createTextNode(nam):"";
person.appendChild(text);
