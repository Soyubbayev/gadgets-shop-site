
    import {products} from "./products.js";

    let productsBox=document.querySelector(".products");

    productsBox.innerHTML=products.map(item=>`

    <div class="card" onclick="openProduct(${item.id})">

    <img src="${item.image}">

    <h3>$${item.price}</h3>

    <p>${item.name}</p>

    </div>

    `).join("");

    window.openProduct=function(id){

    localStorage.setItem("id",id);

    location.href="detail.html";

    }

    let category = document.querySelector(".category");
    let ochil = document.querySelector("#ochil");

    category.addEventListener("mouseenter", function () {
        ochil.hidden = false;
    });

    category.addEventListener("mouseleave", function () {
        ochil.hidden = true;
    });

      let cart = document.querySelector(".cart");
    let openCart = document.querySelector("#openCart");

    cart.addEventListener("mouseenter", function () {
        openCart.hidden = false;
    });

    cart.addEventListener("mouseleave", function () {
        openCart.hidden = true;
    });