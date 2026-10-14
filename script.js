const daftarTeks = ["Custom Desain", "Harga Murah", "Layanan Cepat"];

let index = 0;

const elemenTeks = document.getElementById("teks-berganti");

setInterval(function () {
  index = (index + 1) % daftarTeks.length;

  elemenTeks.textContent = daftarTeks[index];
}, 1000);

const tombolWA = document.getElementById("wa-float");
const nomorWA = "6281585541885";
const pesan = "Halo Baye Project, Saya Ingin Memesan Lanyard atau Id Card.";

tombolWA.href = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

function pesanProduk(event, namaProduk, hargaProduk) {
  event.preventDefault();

  const nomorWA = "6281234567890"; // Ganti dengan nomor WhatsApp kamu

  const pesan = `Halo Baye Project, saya ingin memesan:

Produk: ${namaProduk}
Harga: ${hargaProduk}

Mohon informasi lebih lanjut. Terima kasih.`;

  const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");
}
