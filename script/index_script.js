let home_items = document.getElementById("home-items");

for (var x = 7; x < products.length; ++x) {
  var item = `<div class="pro ${products[x].category}">
  <img onclick="location.href='sproduct.html?index=${x}' "src="${products[x].product_img}" alt="product img" />
  <div class="des">
    <h5 class="product-name">${products[x].product_name}</h5>
    <div class="star">
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star"></i>
    </div>
    <h4>${products[x].price}</h4>
  </div>
  <a href="#"><i class="bi bi-cart fs-3"></i></i></a>
  </div>`;

  home_items.insertAdjacentHTML("afterbegin", item);
}
