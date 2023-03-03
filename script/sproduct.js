var product_details=document.getElementById("product_details")
var myimg=document.images
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

// for (var i = 0; i < smallimg.length; i++) {
//   smallimg[i].onclick = function () {
//     MainImg.src = smallimg[i].src;
//   };
// }
var index=location.search.split("=")[1];

myimg[0].src=products[index].product_img
myimg[1].src=products[index].product_img
myimg[2].src=products[index].product_img1
myimg[3].src=products[index].product_img2
myimg[4].src=products[index].product_img3




var details=`<h6 class="text-black-50">Home / ${products[index].product_name}</h6>
<h3 class="fw-bold py-4">${products[index].product_name}</h3>
<h2 class="fw-bold">$${products[index].price}</h2>
<select class="mt-3 mb-3">
  <option>Select Size</option>
  <option>XXL</option>
  <option>XL</option>
  <option>L</option>
  <option>XS</option>
  <option>S</option>
</select>
<input type="number" value="1" />
<button class="buy-btn bg-black text-light px-4 py-2">
  Add To Cart
</button>
<h4 class="mt-5 mb-5">Product Details</h4>
<span>${products[index].description}</span>`


product_details.insertAdjacentHTML("afterbegin", details);

smallimg[0].onclick = function () {
  MainImg.src = smallimg[0].src;
};

smallimg[1].onclick = function () {
  MainImg.src = smallimg[1].src;
};

smallimg[2].onclick = function () {
  MainImg.src = smallimg[2].src;
};

smallimg[3].onclick = function () {
  MainImg.src = smallimg[3].src;
};
