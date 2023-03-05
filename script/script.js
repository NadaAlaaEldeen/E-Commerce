
var myproduct_container = document.getElementById("myproducts");


for (var i in products) {
  var product = `<div class="pro ${products[i].category}">
<img onclick="location.href='sproduct.html?index=${i}' "src="${products[i].product_img}" alt="product img" />
<div class="des">
  <h5 class="product-name">${products[i].product_name}</h5>
  <div class="star">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star"></i>
  </div>
  <h4>${products[i].price}</h4>
</div>

</div>`;

  myproduct_container.insertAdjacentHTML("beforeend", product);
}


// filter categories by buttons
function filterProducts(category) {
  let buttons = document.querySelectorAll(".my-button");
  buttons.forEach((button) => {
    if (category.toLowerCase() == button.innerText.toLowerCase()) {
      button.classList.add("active-search");
    } else {
      button.classList.remove("active-search");
    }
  });

  let prods = document.querySelectorAll(".pro");
  prods.forEach((p) => {
    if (category == "all") {
      p.classList.remove("hide");
    } else if (p.classList.contains(category)) {
      // show the products of this category
      p.classList.remove("hide");
    } else {
      // hide other elements
      p.classList.add("hide");
    }
  });
}

var filter=document.getElementById("filter");
var buttons =document.getElementById("my-buttons");
// console.log(buttons.classList)
filter.onclick = function () {
  buttons.classList.toggle("hide")
}
//search button
let search = document.getElementById("search");
let mysearch_input = document.getElementById("search-input")

mySearchFunction=() => {
    let search_input = document.getElementById("search-input").value;
    let prod_name = document.querySelectorAll(".product-name");
    let prod = document.querySelectorAll(".pro");
  
    prod_name.forEach((p, index) => {
      //check if text includes the search value
      if (p.innerText.toLowerCase().includes(search_input.toLowerCase())) {
        prod[index].classList.remove("hide");
      } else {
        // hide others
        prod[index].classList.add("hide");
      }
    });
  }

search.addEventListener("click",mySearchFunction );
mysearch_input.addEventListener('input',mySearchFunction)


// to make it display all products when the page loaded
window.onload = () => {
  filterProducts("all");
};
