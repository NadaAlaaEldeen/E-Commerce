var body=document.getElementById("header")
let navbar=
`
<a href="index.html"><img src="images/logo.png" alt="logo img" class="logo" /></a>
<div>
  <ul id="navbar">
    <li><a class="active" href="index.html">Home</a></li>
    <li><a href="product.html">Product</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li style="padding-top: 8px">
    <a href="cart.html"><i class="bi bi-cart-check-fill fs-3 icon-black"></i></a>
    </li>
    <li style="padding-top: 8px">
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
// console.log(window.location.href)
// console.log(window.location.hostname)
// console.log(window.location.origin)

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