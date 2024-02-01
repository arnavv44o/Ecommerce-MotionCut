document.addEventListener('DOMContentLoaded', function () {
    const toggleDescriptionButton = document.querySelector('.toggle-description-button');
    const description = document.querySelector('.description');
    const addToCartButton = document.querySelector('.cta-button');

    toggleDescriptionButton.addEventListener('click', function () {
        description.classList.toggle('visible');
    });

    if (addToCartButton) {
        addToCartButton.addEventListener('click', function (event) {
            event.preventDefault();
            addToCart();
        });
    }
});

function addToCart() {
    alert('Product added to cart successfully!');
}
