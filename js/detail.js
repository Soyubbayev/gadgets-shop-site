import { products } from "./products.js";

const targetId = localStorage.getItem("id");
const product = products.find(item => String(item.id) === String(targetId));
const detailContainer = document.querySelector(".detail");


if (!product) {
    detailContainer.innerHTML = `
        <div class="error-message">
            <h2>Product not found</h2>
            <p>We couldn't find the product you're looking for. <a href="index.html">Return to shop</a></p>
        </div>
    `;
} else {
    // 4. Figma maketiga mos ravishda to'liq render qilish
    detailContainer.innerHTML = `
        <div class="left">
            <a href="index.html" class="back-btn">
                <i class="fa-solid fa-arrow-left"></i> Back to shop
            </a>

            <img class="big-img" src="${product.image}" alt="${product.name}">
            
            <div class="small-images">
                ${(product.images).map(img => `
                    <img class="thumb-img" src="${img}" alt="Product thumbnail" style="cursor: pointer;">
                `)}
            </div>
        </div>

        <div class="middle">
            <p class="status-stock"><i class="fa-solid fa-check"></i> In stock</p>
            
            <h1>${product.name}</h1>
            
            <div class="rating-block">
                <div class="stars">
                    ⭐⭐⭐⭐⭐
                    <span class="rating-num">9.3</span>
                </div>
                <div class="dot"></div>
                <div class="reviews"><i class="fa-solid fa-message"></i> 32 reviews</div>
                <div class="dot"></div>
                <div class="sold"><i class="fa-solid fa-basket-shopping"></i> 154 sold</div>
            </div>
            
            <div class="prices">
                <div class="price-box">
                    <h2 class="price-red">$${product.price1}.00</h2>
                    <p>50-100 pcs</p>
                </div>
                <div class="price-box">
                    <h2>$${product.price2}.00</h2>
                    <p>100-700 pcs</p>
                </div>
                <div class="price-box">
                    <h2>$${product.price3}.00</h2>
                    <p>700+ pcs</p>
                </div>
            </div>

            <div class="details-table">
                <div class="table-row">
                    <span class="label">Price:</span>
                    <span class="value">Negotiable</span>
                </div>
                <hr>
                <div class="table-row">
                    <span class="label">Type:</span>
                    <span class="value">${product.type || "Classic shoes"}</span>
                </div>
                <div class="table-row">
                    <span class="label">Material:</span>
                    <span class="value">${product.material || "Plastic material"}</span>
                </div>
                <div class="table-row">
                    <span class="label">Design:</span>
                    <span class="value">${product.design || "Modern nice"}</span>
                </div>
                <hr>
                <div class="table-row">
                    <span class="label">Customization:</span>
                    <span class="value" style="color: #666;">Customized logo and design custom packages</span>
                </div>
                <div class="table-row">
                    <span class="label">Protection:</span>
                    <span class="value" style="color: #666;">Refund Policy</span>
                </div>
                <div class="table-row">
                    <span class="label">Warranty:</span>
                    <span class="value">${product.warranty || "2 years full warranty"}</span>
                </div>
            </div>
        </div>

        <div class="right">
            <div class="supplier-card">
                <div class="supplier-info">
                    <div class="supplier-avatar">R</div>
                    <div>
                        <p class="sup-title">Supplier</p>
                        <h3>${product.seller || "Supplier Co"}</h3>
                    </div>
                </div>
                
                <hr class="sup-hr">

                <div class="supplier-details">
                    <p>
                        <span class="flag-icon">
                            <img src="./images/germany.png" alt="Germany Flag">
                        </span> 
                        ${product.country}
                    </p>
                    <p><i class="fa-solid fa-shield-halved"></i> Verified Seller</p>
                    <p><i class="fa-solid fa-globe"></i> Worldwide shipping</p>
                </div>

                <button class="send">Send inquiry</button>
                <button class="profile">Seller's profile</button>
            </div>

            <button class="save-later">
                <i class="fa-regular fa-heart"></i> Save for later
            </button>
        </div>
    `;

    const bigImg = document.querySelector(".big-img");
    const thumbnails = document.querySelectorAll(".thumb-img");

    thumbnails.forEach((thumb, index) => {
        if(index === 0) thumb.style.border = "2px solid #0d6efd";
        
        thumb.addEventListener("click", (e) => {
    bigImg.src = e.target.src; // e.target bosilgan elementni bildiradi
    thumbnails.forEach(t => t.style.border = "1px solid #e4e4e4");
    e.target.style.border = "2px solid #0d6efd";
});
    });
}