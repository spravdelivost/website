/*оценка*/
document.querySelector('.submit-rating').addEventListener('click', function() {
    let rating = prompt("Оцените сайт по шкале от 0 до 10:");

    if (rating !== null) { 
        rating = parseInt(rating); 
        if (isNaN(rating) || rating < 0 || rating > 10) {
            alert("Пожалуйста, введите корректную оценку от 0 до 10.");
        } else {
            alert(`Спасибо за вашу оценку!`);
        }
    }
});

/*подробнее батырмасы*/
const infoParagraph = document.getElementById('info-paragraph');
const cemisProduct = document.getElementById('cemis-product');
const detailsButton = document.getElementById('details-button');
const additionalInfo = document.getElementById('additional-info');

cemisProduct.addEventListener('click', function() {
    infoParagraph.textContent = 'CEMIS 1200 обеспечивает непревзойденную точность и контроль, позволяя аграриям достигать максимальной эффективности на поле.';
});

detailsButton.addEventListener('click', function(event) {
    event.stopPropagation();
    if (additionalInfo.style.display === "none") {
        additionalInfo.style.display = "block";
        detailsButton.textContent = "Скрыть"; 
    } else {
        additionalInfo.style.display = "none";
        detailsButton.textContent = "Подробнее"; 
    }
});

/* кнопка уменьшения */

document.getElementById('reduce-text-button').addEventListener('click', function() {
    const textElement = document.getElementById('pilot-inf');
    const currentSize = window.getComputedStyle(textElement, null).getPropertyValue('font-size');
    const currentSizeValue = parseFloat(currentSize);
    const newSize = currentSizeValue - 2;

    if (newSize > 10) {
        textElement.style.fontSize = newSize + 'px';
    }

    textElement.style.transform = 'translateY(-10px)'; 
});

/* reset button */
const form = document.querySelector('.form')
form.addEventListener('reset', function (reset_event) {
})