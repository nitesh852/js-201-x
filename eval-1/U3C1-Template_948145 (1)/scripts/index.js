//store the products array in localstorage as "data"
function product(b, n, p, i) {
  this.brand = b;
  this.name = n;
  this.price = p;
  this.image = i;
}

function storeData(event) {
  event.preventDefault();
  let form = document.getElementById("product_form");
  let brand = form.product_brand.value;
  let name = form.product_name.value;
  let price = form.product_price.value;
  let image = form.product_image.value;

  let p1 = new product(brand, name, price, image);

  let products = JSON.parse(localStorage.getItem("data")) || [];
//   zz;

  products.push(p1);

  localStorage.setItem("data", JSON.stringify(products));
  console.log(p1);
}
