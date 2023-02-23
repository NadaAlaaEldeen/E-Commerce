var body=document.getElementById("header")
let navbar=
`
<a href="#"><img src="images/logo.png" alt="logo img" class="logo" /></a>
<div>
  <ul id="navbar">
    <li><a class="active" href="index.html">Home</a></li>
    <li><a href="product.html">Product</a></li>
    <!-- / <li><a href="blog.html">Blog</a></li> -->
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li style="padding-top: 8px">
      <a href="cart.html"><i class="bi bi-cart-check-fill fs-3"></i></a>
    </li>
    <li style="padding-top: 8px">
      <a href="login.html"> <i class="bi bi-person fs-3"></i></a>
    </li>
  </ul>
</div>
`
body.innerHTML=navbar;


