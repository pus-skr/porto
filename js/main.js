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
    tab:   'Website Kembang Tahu',
    judul: 'Website Informasi "Mengenal Kembang Tahu Panambangan"',
    tech:  'HTML, CSS, dan JavaScript',
    tahun: '2026',
    mock:  'm1',
    poin: [
      'Merancang dan mengembangkan website informasi untuk memperkenalkan kembang tahu sebagai salah satu produk unggulan Desa Panambangan.',
      'Membuat struktur halaman yang mencakup informasi produk, sejarah, proses pembuatan, UMKM, galeri, lokasi, dan informasi terkait desa.',
      'Mengembangkan tampilan website yang responsif agar dapat diakses dengan baik melalui perangkat desktop maupun mobile.',
    ]
  },
  {
    tab:   'Travel Booking System',
    judul: 'Travel Booking Management System',
    tech:  'PHP (Laravel) dan MySQL',
    tahun: '2026',
    mock:  'm2',
    poin: [
      'Membangun platform manajemen pemesanan travel menggunakan Laravel, PHP, MySQL, mencakup modul trip, destinasi, itinerary, booking, dan laporan.',
      'Mengembangkan fitur berdasarkan 3 role pengguna seperti admin, user, dan owner.',
      'Merancang fitur dan alur sistem berdasarkan kebutuhan pengguna dalam proses pemesanan perjalanan.',
    ]
  },
  {
    tab:   'Sistem Manajemen Apotek',
    judul: 'Sistem Manajemen Apotek',
    tech:  'Python, MySQL, HTML, CSS, dan JavaScript',
    tahun: '2026',
    mock:  'm3',
    poin: [
      'Membangun sistem manajemen apotek dengan beberapa peran pengguna: Admin, Staff, dan Manager.',
      'Mengimplementasikan modul inventaris obat, transaksi penjualan, manajemen pengguna, dan pelaporan.',
      'Mengembangkan dashboard analitik untuk memvisualisasikan data operasional dan penjualan.',
      'Merancang struktur database relasional untuk mendukung pelacakan inventaris dan pengelolaan transaksi yang akurat.',
    ]
  }
];

/* ─── Mock HTML  ─── */
const MOCKS = {
  m1: `<div class="mock m1"><div class="bar"><i></i><i></i><i></i></div><div class="c"><div class="blk a big"></div><div class="blk"></div><div class="blk g"></div></div></div>`,
  m2: `<div class="mock m2"><div class="bar"><i></i><i></i><i></i></div><div class="c"><div class="blk a wide"></div><div class="blk"></div><div class="blk"></div><div class="blk g"></div><div class="blk"></div><div class="blk g"></div><div class="blk"></div></div></div>`,
  m3: `<div class="mock m3"><div class="bar"><i></i><i></i><i></i></div><div class="c"><div class="blk a side"></div><div class="blk"></div><div class="blk"></div><div class="chart"><i style="height:40%"></i><i style="height:65%"></i><i style="height:50%"></i><i style="height:85%"></i><i style="height:70%"></i><i style="height:95%"></i></div></div></div>`,
};

/* ================================================================
   RENDER PROJEK 
   ================================================================ */
const tabsEl  = document.getElementById('proyekTabs');
const panelEl = document.getElementById('proyekPanel');

function tampilProyek(i) {
  const p = PROYEK[i];
  [...tabsEl.children].forEach((b, j) => b.setAttribute('aria-selected', j === i));
  panelEl.innerHTML = `
    <div class="shot">${MOCKS[p.mock]}</div>
    <div class="pbody">
      <h3>${p.judul}</h3>
      <p class="tech">${p.tech} · ${p.tahun}</p>
      <ul>${p.poin.map(x => `<li>${x}</li>`).join('')}</ul>
    </div>`;
}

PROYEK.forEach((p, i) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.setAttribute('role', 'tab');
  btn.setAttribute('aria-selected', 'false');
  btn.innerHTML = `<b>${p.tab}</b><small>${p.tech}</small>`;
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
