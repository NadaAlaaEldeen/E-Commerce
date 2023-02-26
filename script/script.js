products = [
  {
    product_name: "shirt",
    product_img: "images/products2/f1.jpg",
    category: "topwear",
    price: "150 EGP",
  },
  {
    product_name: "shirt",
    product_img: "images/products2/f1.jpg",
    category: "topwear",
    price: "150 EGP",
  },
  {
    product_name: "t-shirt",
    product_img: "images/product/t1.PNG",
    category: "topwear",
    price: "150 EGP",
  },
  {
    product_name: "Jacket",
    product_img: "images/products2/LC_j.jpg",
    category: "jacket",
    price: "150 EGP",
  },
  {
    product_name: "flower pant",
    product_img: "images/products2/f7.jpg",
    category: "bottomwear",
    price: "150 EGP",
  },
  {
    product_name: "half-Boot",
    product_img: "images/products/p1.png",
    category: "shoes",
    price: "450 EGP",
  },
  {
    product_name: "Brown Boot",
    product_img: "images/products/p5.PNG",
    category: "shoes",
    price: "600 EGP",
  },
  {
    product_name: "Black Boot",
    product_img: "images/products/p6.PNG",
    category: "shoes",
    price: "600 EGP",
  }
];

var myproduct_container = document.getElementById("myproducts");

for (var i of products) {
  var product = `<div class="pro ${i.category}">
<img onclick="location.href='sproduct.html' "src="${i.product_img}" alt="product img" />
<div class="des">
  <h5 class="product-name">${i.product_name}</h5>
  <div class="star">
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star-fill"></i>
    <i class="bi bi-star"></i>
  </div>
  <h4>${i.price}</h4>
</div>
<a href="#"><i class="bi bi-cart fs-3"></i></i></a>
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
