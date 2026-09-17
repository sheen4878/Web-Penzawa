function muatBeritaHome() {
  const container = document.getElementById('beritaTerbaruHome');
  // Mengambil data dari localStorage yang disimpan oleh admin-berita.html
  let dataBerita = JSON.parse(localStorage.getItem('listBeritaKemenag')) || [];

  // Jika belum ada berita yang diunggah
  if (dataBerita.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 text-center">
        <h2 class="text-xl font-bold text-gray-600 font-poppins">Belum ada berita terbaru.</h2>
        <p class="text-gray-500 mt-2">Berita yang dipublikasikan melalui panel admin akan otomatis muncul di sini.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = "";
  
  // Menampilkan berita secara otomatis
  const beritaTerbatas = dataBerita.slice(0, 3);

  beritaTerbatas.forEach(berita => {
    const wrapper = document.createElement('div');
    wrapper.className = "mb-10";

    let fotoHtml = "";
    if (berita.foto) {
      fotoHtml = `
        <div class="mb-4 overflow-hidden rounded-lg border border-gray-200 flex justify-center bg-black/5">
          <img src="${berita.foto}" alt="Foto Berita" class="object-cover w-full max-h-96">
        </div>
      `;
    }

    wrapper.innerHTML = `
      <div class="mb-6">
        <a href="berita.html" class="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800 mb-4">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          BERITA & ARTIKEL
        </a>
        <span class="text-sm text-gray-500 font-medium block">${berita.tanggal}</span>
        <h1 class="text-2xl md:text-4xl font-extrabold text-emerald-900 font-poppins mt-2 mb-6">
          ${berita.judul}
        </h1>
      </div>

      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-4 text-gray-700 leading-relaxed font-inter">
        ${fotoHtml}
        <p class="whitespace-pre-line">${berita.isi}</p>
      </div>
    `;
    container.appendChild(wrapper);
  });

  // Menambahkan tombol "Lihat Semua Berita"
  if (dataBerita.length > 0) {
    const btnContainer = document.createElement('div');
    btnContainer.className = "flex justify-center mt-8";
    btnContainer.innerHTML = `
      <a href="berita.html" class="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold font-poppins rounded-xl shadow-md transition-all duration-300">
        Lihat Semua Berita
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </a>
    `;
    container.appendChild(btnContainer);
  }
}

// Jalankan fungsi saat halaman dimuat
window.onload = muatBeritaHome;