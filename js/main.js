/* ============================================================
   PORTOFOLIO JS — Puspa Sekar Agustin
   ============================================================ */

const PROFIL = {
  nama:      'Puspa Sekar Agustin',
  email:     'puspasekar01@gmail.com',
  linkedin:  'https://www.linkedin.com/in/puspa-sekar-agustin',
  github:    'https://github.com/pus-skr',
};

/* ─── Data Projek ─── */
const PROYEK = [
  {
    id:    'travel',
    tab:   'Travel Booking System',
    judul: 'ExploreNusa — Travel Booking System',
    tech:  'PHP (Laravel) dan MySQL',
    tahun: '2026',
    img:   'img/projek-travel.png',
    poin: [
      'Membangun platform manajemen dan reservasi perjalanan wisata nusantara berbasis web menggunakan Laravel, PHP, dan MySQL.',
      'Menyediakan fitur pencarian destinasi, pemilihan tanggal keberangkatan, serta jumlah penumpang untuk kemudahan booking perjalanan.',
      'Mengembangkan sistem role pengguna bertingkat (Admin, User, dan Owner) yang mencakup modul trip, destinasi wisata, jadwal itinerary, dan rekapitulasi booking.',
      'Merancang antarmuka pengguna yang modern, imersif, dan responsif dengan pengalaman eksplorasi destinasi yang intuitif.'
    ]
  },
  {
    id:    'kembang-tahu',
    tab:   'Website Kembang Tahu',
    judul: 'Website Informasi "Kembang Tahu Asli Panambangan"',
    tech:  'HTML, CSS, dan JavaScript',
    tahun: '2026',
    img:   'img/projek-kembang-tahu.png',
    link:  'https://kembangtahu-panambangan.site',
    poin: [
      'Merancang dan mengembangkan website dokumentasi digital dan arsip sejarah kuliner tradisional khas Desa Panambangan yang telah ada sejak 1960-an.',
      'Menyediakan struktur konten informatif mencakup profil produk, sejarah, tahapan proses pembuatan, direktori UMKM terdaftar, galeri dokumentasi, hingga peta lokasi desa.',
      'Mengembangkan tampilan antarmuka yang elegan, berkarakter, dan ramah pengguna dengan optimasi responsif di berbagai ukuran layar desktop maupun ponsel.'
    ]
  },
  {
    id:    'apotek',
    tab:   'Sistem Manajemen Apotek',
    judul: 'My Apotek — Sistem Manajemen & Dashboard Apotek',
    tech:  'Python, MySQL, HTML, CSS, dan JavaScript',
    tahun: '2026',
    img:   'img/projek-apotek.png',
    poin: [
      'Membangun sistem informasi operasional apotek berbasis web dengan pembagian peran pengguna (Admin, Staff, dan Manager).',
      'Mengembangkan dashboard analitik interaktif yang menampilkan metrik kunci: total jenis obat, total stok barang, total transaksi, total pendapatan, grafik obat terlaris, serta tren penjualan bulanan.',
      'Mengimplementasikan modul master data obat, transaksi kasir real-time, manajemen pengguna, riwayat penjualan, dan pelaporan keuangan.',
      'Merancang skema basis data MySQL relasional yang aman dan terstruktur demi ketepatan pencatatan inventaris dan transaksi.'
    ]
  }
];

/* ================================================================
   LIGHTBOX MODAL
   ================================================================ */
const lightbox         = document.getElementById('lightbox');
const lightboxImg      = document.getElementById('lightboxImg');
const lightboxTitle    = document.getElementById('lightboxTitle');
const lightboxClose    = document.getElementById('lightboxClose');
const lightboxBackdrop = document.getElementById('lightboxBackdrop');

function openLightbox(src, title) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = title;
  if (lightboxTitle) lightboxTitle.textContent = title;
  lightbox.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

lightboxClose?.addEventListener('click', closeLightbox);
lightboxBackdrop?.addEventListener('click', closeLightbox);
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox && !lightbox.hasAttribute('hidden')) {
    closeLightbox();
  }
});

/* ================================================================
   RENDER PROJEK 
   ================================================================ */
const tabsEl  = document.getElementById('proyekTabs');
const panelEl = document.getElementById('proyekPanel');

function tampilProyek(i) {
  const p = PROYEK[i];
  [...tabsEl.children].forEach((b, j) => b.setAttribute('aria-selected', j === i));
  panelEl.innerHTML = `
    <div class="browser-frame">
      <div class="browser-bar">
        <div class="browser-dots" aria-hidden="true">
          <span class="b-dot red"></span>
          <span class="b-dot yellow"></span>
          <span class="b-dot green"></span>
        </div>
        <button class="expand-btn" type="button" aria-label="Perbesar tangkapan layar">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
          <span>Perbesar</span>
        </button>
      </div>
      <div class="shot-preview" role="button" tabindex="0" aria-label="Lihat ukuran penuh screenshot ${p.judul}">
        <img src="${p.img}" alt="Screenshot ${p.judul}" class="shot-img" />
        <div class="shot-overlay">
          <span class="overlay-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            Klik untuk perbesar gambar
          </span>
        </div>
      </div>
    </div>
    <div class="pbody">
      <div class="pbody-head">
        <div>
          <h3>${p.judul}</h3>
          <p class="tech">${p.tech} · ${p.tahun}</p>
        </div>
        ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener" class="btn-visit">Kunjungi Web ↗</a>` : ''}
      </div>
      <ul>${p.poin.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>`;

  const previewEl = panelEl.querySelector('.shot-preview');
  const expandBtn = panelEl.querySelector('.expand-btn');
  previewEl?.addEventListener('click', () => openLightbox(p.img, p.judul));
  previewEl?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(p.img, p.judul);
    }
  });
  expandBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    openLightbox(p.img, p.judul);
  });
}

PROYEK.forEach((p, i) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.setAttribute('role', 'tab');
  btn.setAttribute('aria-selected', 'false');
  btn.innerHTML = `
    <div class="tab-btn-content">
      <img src="${p.img}" alt="" class="tab-thumb" loading="lazy" />
      <div class="tab-meta">
        <b>${p.tab}</b>
        <small>${p.tech}</small>
      </div>
    </div>`;
  btn.addEventListener('click', () => tampilProyek(i));
  tabsEl.appendChild(btn);
});
tampilProyek(0);

/* ================================================================
   KONTAK LINKS 
   ================================================================ */
const links = [];
if (PROFIL.email)    links.push(`<a class="btn primary" href="mailto:${PROFIL.email}">Kirim email</a>`);
if (PROFIL.linkedin) links.push(`<a class="btn ghost" href="${PROFIL.linkedin}" target="_blank" rel="noopener">LinkedIn</a>`);
if (PROFIL.github)   links.push(`<a class="btn ghost" href="${PROFIL.github}" target="_blank" rel="noopener">GitHub</a>`);
document.getElementById('contactLinks').innerHTML = links.join('');

/* ================================================================
   FOOTER
   ================================================================ */
document.getElementById('foot').textContent = `© 2026 ${PROFIL.nama}`;

/* ================================================================
   TEMA (Dark / Light) 
   ================================================================ */
const root     = document.documentElement;
const themeBtn = document.getElementById('themeBtn');

function isDark() {
  return root.getAttribute('data-theme') === 'dark' ||
    (!root.getAttribute('data-theme') && matchMedia('(prefers-color-scheme:dark)').matches);
}

function applyTheme(dark) {
  root.setAttribute('data-theme', dark ? 'dark' : 'light');
  if (themeBtn) themeBtn.textContent = dark ? '☀️ Tema' : '🌙 Tema';
  localStorage.setItem('tema_puspa', dark ? 'dark' : 'light');
}

const saved = localStorage.getItem('tema_puspa');
applyTheme(saved ? saved === 'dark' : false);  // default light

if (themeBtn) themeBtn.addEventListener('click', () => applyTheme(!isDark()));

/* ================================================================
   HAMBURGER MENU (mobile)
   ================================================================ */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
}

/* ================================================================
   BACK TO TOP
   ================================================================ */
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  backTop?.classList.toggle('show', window.scrollY > 400);
}, { passive: true });
backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ================================================================
   TOAST
   ================================================================ */
let toastTimer = null;
function showToast(msg, ico = '✨') {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  const i = document.getElementById('toastIco');
  if (!t) return;
  if (m) m.textContent = msg;
  if (i) i.textContent = ico;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}
