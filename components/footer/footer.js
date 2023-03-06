var footer=document.getElementById("footer")
let footerContent=
`
<footer class="section-p footer">
      <div class="col">
        <!-- <img class="logo" src="images/logo.png" alt="logo" /> -->
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong> An Nadi Al Ahli, Nasr City, Cairo
          Governorate 4472001,cairo.Egypt
        </p>
        <p><strong>Phone:</strong> 16061</p>
        <p><strong>Hours:</strong> 10:00 - 18:00</p>
        <div class="follow">
          <h4>Follow Us</h4>
          <div class="icon">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-pinterest"></i>
            <i class="bi bi-youtube"></i>
          </div>
        </div>
      </div>
      <div class="col">
        <h4>About</h4>
        <a href="about.html">About us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="contact.html">Contact Us</a>
      </div>

      <div class="col">
        <h4>My Account</h4>
        <a href="login.html">Sign In</a>
        <a href="cart.html">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>
      <div class="col install footer_install">
        <h4>Install App</h4>
        <p>From App Store or google play</p>
        <div class="col1">
          <img src="images/pay.png" alt="" />
          <img src="images/play.png" alt="" />
          <p>Secured paymeny Gateways</p>
          <img src="images/app.png" />
        </div>
      </div>
    </footer>
`
footer.innerHTML=footerContent;