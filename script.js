/* GANTI DENGAN NOMOR WHATSAPP BISNIS KAMU.
   Contoh: 081234567890 menjadi 6281234567890 */
const NOMOR_WA = "6281585541885";

function linkWhatsApp(pesan) {
  return `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesan)}`;
}

// MENU HAMBURGER HP
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
  const terbuka = navMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", terbuka);
  menuToggle.setAttribute("aria-label", terbuka ? "Tutup menu" : "Buka menu");

  menuToggle.textContent = terbuka ? "✕" : "☰";
});

// Tutup menu setelah salah satu link diklik
navMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
    menuToggle.textContent = "☰";
  });
});

// TEKS BERGANTI OTOMATIS
const teksBerganti = document.getElementById("teks-berganti");
const daftarTeks = ["Bebas Custom.", "Cepat.", "Murah dan.", "Berkualitas."];

let indeksTeks = 0;

setInterval(function () {
  teksBerganti.style.opacity = "0";

  setTimeout(function () {
    indeksTeks = (indeksTeks + 1) % daftarTeks.length;
    teksBerganti.textContent = daftarTeks[indeksTeks];
    teksBerganti.style.opacity = "1";
  }, 300);
}, 2500);

// TOMBOL PESAN SETIAP PRODUK
document.querySelectorAll(".btn-pesan").forEach(function (tombol) {
  const namaProduk = tombol.dataset.produk;

  tombol.href = linkWhatsApp(
    `Halo Baye Project, saya ingin memesan ${namaProduk}. Mohon informasi harga dan minimal pemesanannya.`,
  );

  tombol.target = "_blank";
  tombol.rel = "noopener noreferrer";
});

// TOMBOL KONTAK WHATSAPP
const pesanUmum =
  "Halo Baye Project, saya ingin konsultasi tentang custom lanyard.";

const kontakWa = document.getElementById("kontak-wa");
kontakWa.href = linkWhatsApp(pesanUmum);
kontakWa.target = "_blank";
kontakWa.rel = "noopener noreferrer";

// WHATSAPP MELAYANG
const waFloat = document.getElementById("wa-float");
waFloat.href = linkWhatsApp(pesanUmum);
waFloat.target = "_blank";
waFloat.rel = "noopener noreferrer";

// TAHUN OTOMATIS DI FOOTER
document.getElementById("tahun").textContent = new Date().getFullYear();
