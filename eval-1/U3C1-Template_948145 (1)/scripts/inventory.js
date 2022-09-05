function append(){

    let products = JSON.parse(localStorage.getItem('data')) || [];
   let container = document.getElementById("products_data")
    products.forEach(function(el){

        let div = document.createElement("div")
        let img = document.createElement("img");
       img.src = el.image;
       img.setAttribute("class", "img")
       let brand = document.createElement("h4");
       brand.innerText = el.type;
       let name = document.createElement("p");
       name.innerText=el.desc;
       let price = document.createElement("h3")
       price.innerText = el.price;
       let remove= document.createElement("button")
       remove.innerText= "Remove";
       remove.setAttribute("id","remove_product")
       remove.addEventListener("click", function()
       {
        event.target.parentNode.remove()
        // removeData(el)
       })
div.append(img,brand,name,price,remove)
container.append(div)
    });
    
}
append()

// function removeData(el)
// {
//     console.log(products)
// products.splice(index, 1);
// localStorage.setItem('data', JSON.stringify(products))
// append()
// }