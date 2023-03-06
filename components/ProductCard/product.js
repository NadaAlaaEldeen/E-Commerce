var pro_container=document.getElementsByClassName("pro-container")[0];
var product=
`<div class="pro">
<img src="images/products/p2.png" alt="product img" />
<div class="des">
  <h5>SUN-DVTH-002</h5>
  <div class="star">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star"></i>
  </div>
  <h4>700 EGP</h4>
</div>
<a href="#"><i class="bi bi-cart fs-3"></i></i></a>
</div>`
//create number of cards with default img
pro_container.innerHTML=product.repeat(8);
//set card images
var pro=document.getElementsByClassName("pro");
// console.log(pro[0].childNodes[1])
pro[0].childNodes[1].setAttribute("src","images/products/p1.png")
pro[1].childNodes[1].setAttribute("src","images/products/p2.png")
pro[2].childNodes[1].setAttribute("src","images/products/p3.png")
pro[3].childNodes[1].setAttribute("src","images/products/p4.png")
pro[4].childNodes[1].setAttribute("src","images/products/p5.PNG")
pro[5].childNodes[1].setAttribute("src","images/products/p6.PNG")
pro[6].childNodes[1].setAttribute("src","images/products/p7.png")
pro[7].childNodes[1].setAttribute("src","images/products/p8.png")

// var pro=document.getElementsByClassName("pro")
