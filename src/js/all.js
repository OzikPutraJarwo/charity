// Ambil elemen-elemen yang dibutuhkan
const mobileMenuBtn = document.querySelector('header .mobile-menu');
const headerNav = document.querySelector('header nav');

// Tambahkan event listener pada tombol mobile menu
mobileMenuBtn.addEventListener('click', () => {
  headerNav.classList.toggle('show');
});