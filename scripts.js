// SLIDER Paragraf
function showContent(slideNumber) {
  // Remove active class from all slides and contents
  const slides = document.querySelectorAll(".slide");
  const contents = document.querySelectorAll(".content");

  slides.forEach((slide) => slide.classList.remove("active"));
  contents.forEach((content) => content.classList.remove("active"));

  // Add active class to the clicked slide and corresponding content
  document
    .querySelector(`.slide:nth-child(${slideNumber})`)
    .classList.add("active");
  document.getElementById(`content-${slideNumber}`).classList.add("active");
}
// Tombol
function increment() {
  var quantity = document.getElementById("quantity");
  quantity.value = parseInt(quantity.value) + 1;
}

function decrement() {
  var quantity = document.getElementById("quantity");
  if (parseInt(quantity.value) > 1) {
    quantity.value = parseInt(quantity.value) - 1;
  }
}

//Slider Gambar
function changeMainImage(thumbnail) {
  const mainImage = document.getElementById("mainDisplay");
  mainImage.src = thumbnail.src;
}

// Swipe functionality for thumbnails
const thumbnails = document.getElementById("thumbnails");

let startX, scrollLeft;

thumbnails.addEventListener("mousedown", (e) => {
  e.preventDefault();
  startX = e.pageX - thumbnails.offsetLeft;
  scrollLeft = thumbnails.scrollLeft;
  thumbnails.classList.add("active");
});

thumbnails.addEventListener("mouseleave", () => {
  thumbnails.classList.remove("active");
});

thumbnails.addEventListener("mouseup", () => {
  thumbnails.classList.remove("active");
});

thumbnails.addEventListener("mousemove", (e) => {
  if (!thumbnails.classList.contains("active")) return;
  e.preventDefault();
  const x = e.pageX - thumbnails.offsetLeft;
  const walk = (x - startX) * 2; // Scroll speed
  thumbnails.scrollLeft = scrollLeft - walk;
});

// Touch events for mobile swipe
thumbnails.addEventListener("touchstart", (e) => {
  startX = e.touches[0].pageX - thumbnails.offsetLeft;
  scrollLeft = thumbnails.scrollLeft;
});

thumbnails.addEventListener("touchmove", (e) => {
  const x = e.touches[0].pageX - thumbnails.offsetLeft;
  const walk = (x - startX) * 2; // Scroll speed
  thumbnails.scrollLeft = scrollLeft - walk;
});

//Compair Harga Plus
document.addEventListener("DOMContentLoaded", function () {
  const product1Container = document.getElementById("product1-container");
  const product2Container = document.getElementById("product2-container");
  const product1Price = document.getElementById("price1");
  const product2Price = document.getElementById("price2");
  const plusIcon = document.getElementById("plus-icon");

  let originalProduct1Price = product1Price.textContent; // Simpan harga asli

  // Checkbox dan label dalam selected-products list
  const selectedProduct1Checkbox = document.getElementById("selected-product1");
  const selectedProduct2Checkbox = document.getElementById("selected-product2");
  const selectedProduct1Label = document.querySelector(
    'label[for="selected-product1"]'
  );
  const selectedProduct2Label = document.querySelector(
    'label[for="selected-product2"]'
  );

  // Dapatkan nama produk dari label di container (disembunyikan)
  const product1NameElement = product1Container.querySelector(".product-name");
  const product2NameElement = product2Container.querySelector(".product-name");

  function updateSelectedProducts() {
    // Cek apakah produk kedua dicentang
    if (selectedProduct2Checkbox.checked) {
      product1Price.textContent = "Free";
    } else {
      product1Price.textContent = originalProduct1Price;
    }

    // Tampilkan atau sembunyikan produk berdasarkan checkbox
    product1Container.style.display = selectedProduct1Checkbox.checked
      ? "flex"
      : "none";
    product2Container.style.display = selectedProduct2Checkbox.checked
      ? "flex"
      : "none";

    // Tampilkan atau sembunyikan icon plus
    plusIcon.style.display =
      selectedProduct1Checkbox.checked && selectedProduct2Checkbox.checked
        ? "inline-block"
        : "none";

    // Sinkronkan label di selected-products list dan buat harga menjadi bold
    selectedProduct1Label.innerHTML = `${product1NameElement.textContent} (<strong>${product1Price.textContent}</strong>)`;
    selectedProduct2Label.innerHTML = `${product2NameElement.textContent} (<strong>${product2Price.textContent}</strong>)`;
  }

  // Inisialisasi status checkbox
  selectedProduct1Checkbox.checked = true;
  selectedProduct2Checkbox.checked = true;

  // Tambahkan event listener untuk sinkronisasi
  selectedProduct1Checkbox.addEventListener("change", updateSelectedProducts);
  selectedProduct2Checkbox.addEventListener("change", updateSelectedProducts);

  // Panggil fungsi ini untuk memperbarui tampilan awal
  updateSelectedProducts();
});
