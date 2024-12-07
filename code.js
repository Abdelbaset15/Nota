
openBtn.onclick = function () {
    search.style.display = 'flex';
};

closeBtn.onclick = function () {
    menu.style.display = 'none';
};

// ----------------------------------------------------------------------------------

function toggleLoginPopup() {
    const popup = document.getElementById("login-popup");
    popup.style.display = (popup.style.display === "none" || popup.style.display === "") ? "block" : "none";
}

function toggleLoginPopup() {
    const popup = document.getElementById("login-popup");
    const overlay = document.getElementById("overlay");
    const isVisible = popup.style.display === "block";
    popup.style.display = isVisible ? "none" : "block";
    overlay.style.display = isVisible ? "none" : "block";
}


// ----------------------------------------------------------------------------------

// قائمة المنتجات
const products = [
    {
        image: "imgs/amplifers.jpg"
    },
    {
        image: "imgs/drums.jpg"
    },
    {
        image: "imgs/audio.jpg"
    },
    {
        image: "imgs/guitars.jpg"
    },
    {
        image: "imgs/organs.jpg"
    },
    {
        image: "imgs/piano.jpg"
    },
    {
        image: "imgs/strings.jpg"
    },
    {
        image: "imgs/synthesizers.jpg"
    },
    {
        image: "imgs/traditional percussion.jpg"
    },
    {
        image: "imgs/violins.jpg"
    },
    {
        image: "imgs/western instrments.jpg"
    },
];

// تحديد العنصر الذي سيعرض المنتج
const productDiv = document.getElementById("product");

// وظيفة لتغيير المنتج المعروض
let currentIndex = 0;

function displayProduct() {
    const product = products[currentIndex];
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
    `;

    // تحديث المؤشر
    currentIndex = (currentIndex + 1) % products.length;
}

// تغيير المنتج كل 5 ثوانٍ
setInterval(displayProduct, 5000);

// عرض أول منتج عند تحميل الصفحة
displayProduct();



document.addEventListener("DOMContentLoaded", () => {
    const articleBody = document.querySelector('.article-body');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');

    // Define the current index and card width
    let currentIndex = 0;
    const cardWidth = 220; // Card width + margin (200px + 10px * 2)

    // Calculate the maximum scroll index
    const maxIndex = articleBody.children.length - 4;

    // Event listener for right arrow
    rightArrow.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateScroll();
        }
    });

    // Event listener for left arrow
    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateScroll();
        }
    });

    // Function to update the scroll position
    function updateScroll() {
        const scrollX = currentIndex * cardWidth;
        articleBody.style.transform = `translateX(-${scrollX}px)`;
    }
});




