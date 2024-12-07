// // قائمة المنتجات
// const products = [
//     {
//         image: "imgs/amplifers.jpg"
//     },
//     {
//         image: "imgs/drums.jpg"
//     },
//     {
//         image: "imgs/audio.jpg"
//     },
//     {
//         image: "imgs/guitars.jpg"
//     },
//     {
//         image: "imgs/organs.jpg"
//     },
//     {
//         image: "imgs/piano.jpg"
//     },
//     {
//         image: "imgs/strings.jpg"
//     },
//     {
//         image: "imgs/synthesizers.jpg"
//     },
//     {
//         image: "imgs/traditional percussion.jpg"
//     },
//     {
//         image: "imgs/violins.jpg"
//     },
//     {
//         image: "imgs/western instrments.jpg"
//     },
// ];

// // تحديد العنصر الذي سيعرض المنتج
// const productDiv = document.getElementById("product");

// // وظيفة لتغيير المنتج المعروض
// let currentIndex = 0;

// function displayProduct() {
//     const product = products[currentIndex];
//     productDiv.innerHTML = `
//         <img src="${product.image}" alt="${product.name}" width="40%" height="20%">
//     `;

//     // تحديث المؤشر
//     currentIndex = (currentIndex + 1) % products.length;
// }

// // تغيير المنتج كل 5 ثوانٍ
// setInterval(displayProduct, 5000);

// // عرض أول منتج عند تحميل الصفحة
// displayProduct();
