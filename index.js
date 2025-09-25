document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;
    const cartCountElement = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountElement.textContent = cartCount;
            alert('Item added to cart!');
            // In a real application, you'd add the product to a cart array/object
            // and potentially update a cart display.
        });
    });

    const shopNowBtn = document.querySelector('.shop-now-btn');
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', () => {
            // Smooth scroll to the products section
            document.querySelector('.products').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
