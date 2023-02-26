var body=document.getElementById("header")
let navbar=
`
<div class="container">
<a class="navbar-brand" href="#"><img src="images/logo.png" alt="logo img" class="logo" /></a>
<!-- humburger icon  -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main"
          aria-controls="main"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i class="fa-solid fa-bars"></i>
        </button>
  <div class="collapse navbar-collapse" id="main">
  <ul id="navbar" class="navbar-nav ms-auto mb-2 mb-lg-0">
    <li class="nav-item"><a class="active" href="index.html">Home</a></li>
    <li class="nav-item"><a class="nav-link p-2 p-lg-3" href="product.html">Product</a></li>
    <li class="nav-item"><a class="nav-link p-2 p-lg-3" href="about.html">About</a></li>
    <li class="nav-item"><a class="nav-link p-2 p-lg-3" href="contact.html">Contact</a></li>
    <li class="nav-item" style="padding-top: 8px">
      <a class="nav-link p-2 p-lg-3" href="cart.html"><i class="bi bi-cart-check-fill fs-3"></i></a>
    </li>
    <li class="nav-item" style="padding-top: 8px">
      <a class="nav-link p-2 p-lg-3" href="login.html"> <i class="bi bi-person fs-3"></i></a>
    </li>
  </ul>
  <div>
</div>
</div>
`
body.innerHTML=navbar;


