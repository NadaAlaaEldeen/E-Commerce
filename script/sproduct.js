var product_details=document.getElementById("product_details")
var myimg=document.images
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");


var index=location.search.split("=")[1];
// console.log(index)
myimg[0].src=products[index].product_img
myimg[1].src=products[index].product_img
myimg[2].src=products[index].product_img1
myimg[3].src=products[index].product_img2
myimg[4].src=products[index].product_img3




var details=`<h6 class="text-black-50">Home / ${products[index].product_name}</h6>
<input id="item_id" type="hidden" value="${products[index].product_id}"/>
<h3 class="fw-bold py-4">${products[index].product_name}</h3>
<h2 class="fw-bold">$${products[index].price}EGP</h2>
<select name="size" class="mt-3 mb-3 size">
  <option >Select Size</option>
  <option value="XXL">XXL</option>
  <option value="XL">XL</option>
  <option value="L">L</option>
  <option value="XS">XS</option>
  <option value="S">S</option>
</select>
<input id="count" type="number" value="1" min="1" />
<button id="btnCard"class="buy-btn bg-black text-light px-4 py-2">
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

// ---------------------------------
var btn=document.getElementById("btnCard");
var iid=document.getElementById("item_id");
// var size=document.getElementById("size");
var count=document.getElementById("count");
var size="XL";
  $("select.size").change(function() {
    size = $(this).children("option:selected").val();
  });
// Empty Array To card items
let myitems = [];
if (localStorage.getItem("myitems")) {
  myitems = JSON.parse(localStorage.getItem("myitems"));
}
function addmyitemToArray(myitemText) {
  // myitem Data

  const myitem = {
    email:localStorage.getItem("useremail"),
    id:Date.now(),
    pid:iid.value,
    count: count.value,
    size:size
  };
  // Push myitem To Array Of myitems
  myitems.push(myitem);
  // Add myitems To Local Storage
  addDataToLocalStorageFrom(myitems);
}
function addDataToLocalStorageFrom(itemm) {
  window.localStorage.setItem("myitems", JSON.stringify(itemm));
}
// Add myitem

function added()
{
  swal("<p>Added to your cart</p>"+"<img src= 'images/cart.png'style = 'height:20vh';> ");
    
}

 btn.onclick = function () {
  if(localStorage.getItem("username"))
  {
  if(iid.value!=="")
  {
    addmyitemToArray(iid.value); // Add myitem To Array Of myitems
    added()
    count.value=1

  }
  }
else
{    
swal({   title: "You can't go to cart page without login!",   
text: "",   
type: "warning",      
confirmButtonColor: "gray",   
confirmButtonText: "<a style='text-decoration:none;font-size:1.5vw;color:white' href ='login.html'> Log </a>",   
closeOnConfirm: false,   
closeOnCancel: false } 
        );
}
}

