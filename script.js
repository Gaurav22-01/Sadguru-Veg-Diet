function loadwindow(){
    document.getElementById('coupon').style.visibility='visible';
    document.getElementById('main').style.opacity='0.4';
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility='hidden';
    document.getElementById('main').style.opacity='1';
}

function openMenuPage() {
    var selectedPage = document.getElementById("menuSelect").value;
    if (selectedPage) {
        window.location.href = selectedPage;
    }
}

function addToCart() {
    document.getElementById("cartMessage").innerText = "✅ Item added to cart!";
}

document.getElementById("addToCartBtn").onclick = function () {
    window.location.href = "payment.html";
};