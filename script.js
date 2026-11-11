const foods = [
  { id: 'gudeg', name: 'Gudeg Mbarek', area: 'sleman', place: 'Sleman · Jogja Utara', type: 'Traditional Food', image: 'assets/images/gudeg.jpg', rating: '4.8', category: 'traditional', trends: ['popular'], recs: ['editors', 'local'], desc: 'Gudeg dibuat dari nangka muda yang dimasak perlahan dengan santan dan bumbu tradisional. Rasanya manis gurih, biasanya disajikan bersama krecek, telur, ayam, dan nasi.', price: 'Rp 25k–45k', locationHeading: '5 rekomendasi gudeg populer di Jogja', locations: [{ label: 'Gudeg Mbarek · Sleman', query: 'Gudeg Mbarek Sleman Yogyakarta' }, { label: 'Gudeg Yu Djum · Wijilan', query: 'Gudeg Yu Djum Wijilan Yogyakarta' }, { label: 'Gudeg Pawon · Janturan', query: 'Gudeg Pawon Janturan Yogyakarta' }, { label: 'Gudeg Sagan · Sagan', query: 'Gudeg Sagan Yogyakarta' }, { label: 'Gudeg Permata Bu Pujo · Kota Jogja', query: 'Gudeg Permata Bu Pujo Yogyakarta' }] },
  { id: 'sate', name: 'Sate Klatak Pak Pong', area: 'bantul', place: 'Pleret · Bantul', type: 'Traditional Food', image: 'assets/images/sate-klatak.jpg', rating: '4.9', category: 'street', trends: ['viral', 'popular', 'tiktok'], recs: ['editors', 'local'], desc: 'Sate kambing khas Bantul yang ditusuk menggunakan jeruji besi agar panas merata. Dibakar sederhana dan disajikan dengan kuah gulai.', price: 'Rp 35k–60k', locationHeading: 'Cabang Sate Klatak Pak Pong', locations: [{ label: 'Pak Pong · Jejeran', query: 'RM Sate Pak Pong Jejeran Bantul' }, { label: 'Pak Pong · Brajan', query: 'RM Sate Pak Pong Brajan Bantul' }, { label: 'Pak Pong · Sudimoro', query: 'RM Sate Pak Pong Sudimoro Bantul' }] },
  { id: 'bakpia', name: 'Bakpia Pathok 25', area: 'kota', place: 'Pathuk · Kota Jogja', type: 'Souvenirs', image: 'assets/images/bakpia.jpg', rating: '4.7', category: 'souvenir', trends: ['popular'], recs: ['budget', 'local'], desc: 'Bakpia berisi kacang hijau dengan kulit lembut dan aroma panggang. Kudapan khas Jogja ini cocok dinikmati hangat atau dibawa sebagai oleh-oleh.', price: 'Rp 20k–55k', locations: [{ label: 'Bakpia Pathok 25 · Pathuk', query: 'Bakpia Pathok 25 Yogyakarta' }] },
  { id: 'mercon', name: 'Oseng Mercon Bu Narti', area: 'kota', place: 'Ngampilan · Kota Jogja', type: 'Street Food', image: 'assets/images/oseng-mercon.jpg', rating: '4.8', category: 'street', trends: ['viral', 'tiktok'], recs: ['budget'], desc: 'Oseng koyor dan cabai rawit dimasak dengan bumbu gurih pedas. Hidangan ini terkenal dengan rasa pedas yang kuat dan biasanya disantap bersama nasi hangat.', price: 'Rp 18k–35k', locations: [{ label: 'Oseng Mercon Bu Narti · Ngampilan', query: 'Oseng Mercon Bu Narti Ngampilan Yogyakarta' }] },
  { id: 'geblek', name: 'Geblek Renteng', area: 'kulonprogo', place: 'Kulon Progo', type: 'Street Food', image: 'assets/images/geblek.jpg', rating: '4.6', category: 'street', trends: ['tiktok'], recs: ['budget', 'hidden'], desc: 'Camilan khas Kulon Progo berbahan singkong, bertekstur kenyal dengan rasa gurih. Geblek paling nikmat disantap hangat bersama sambal atau tempe benguk.', price: 'Rp 10k–20k', locations: [{ label: 'Sentra geblek · Wates', query: 'Geblek Wates Kulon Progo' }, { label: 'Pasar tradisional · Kulon Progo', query: 'Geblek tradisional Kulon Progo' }] },
  { id: 'tiwul', name: 'Tiwul Yu Tum', area: 'gunungkidul', place: 'Wonosari · Gunungkidul', type: 'Sweet Treats', image: 'assets/images/tiwul.jpg', rating: '4.7', category: 'sweet', trends: ['popular'], recs: ['hidden', 'local'], desc: 'Tiwul dibuat dari singkong yang dikeringkan dan diolah kembali. Di Gunungkidul, tiwul kerap disajikan dengan kelapa parut, gula jawa, atau lauk gurih.', price: 'Rp 15k–28k', locations: [{ label: 'Tiwul Yu Tum · Wonosari', query: 'Tiwul Yu Tum Wonosari Gunungkidul' }, { label: 'Sentra oleh-oleh · Wonosari', query: 'Tiwul Wonosari Gunungkidul' }] },
  { id: 'mie', name: 'Mie Sapi Bantul', area: 'bantul', place: 'Bantul', type: 'Street Food', image: 'assets/images/mie-sapi-bantul.jpg', rating: '4.8', category: 'street', trends: ['viral', 'tiktok'], recs: ['budget', 'hidden'], desc: 'Mie dengan kuah kaldu sapi yang kaya rasa dan topping melimpah. Nikmati sebagai pilihan makan hangat saat menjelajahi Bantul.', price: 'Rp 20k–35k', locationHeading: 'Lokasi Mie Bantul', locations: [{ label: 'Bakmi Lethek · Warung Senja Mbah Jumal', query: 'Bakmi Lethek Warung Senja Mbah Jumal Bantul', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126471.16399467285!2d110.19590864335936!3d-7.871627199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a56050389153d%3A0xda137592a4100f21!2sBAKMI%20LETHEK%20-%20Warung%20SENJA%20Mbah%20Jumal!5e0!3m2!1sid!2sid!4v1794376824493!5m2!1sid!2sid' }], mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126471.16399467285!2d110.19590864335936!3d-7.871627199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a56050389153d%3A0xda137592a4100f21!2sBAKMI%20LETHEK%20-%20Warung%20SENJA%20Mbah%20Jumal!5e0!3m2!1sid!2sid!4v1794376824493!5m2!1sid!2sid' },
  { id: 'mangut', name: 'Mangut Lele Mbah Marto', area: 'bantul', place: 'Imogiri · Bantul', type: 'Traditional Food', image: 'assets/images/mangut-lele.jpg', rating: '4.9', category: 'traditional', trends: ['popular'], recs: ['editors', 'hidden', 'local'], desc: 'Lele diasap lalu dimasak dalam kuah santan berbumbu dan bercita rasa pedas gurih. Hidangan rumahan ini dikenal lewat cara masak tradisionalnya.', price: 'Rp 25k–40k', locations: [{ label: 'Mangut Lele Mbah Marto · Nggeneng', query: 'Mangut Lele Mbah Marto Nggeneng Bantul' }] },
  { id: 'brongkos', name: 'Brongkos Handayani', area: 'kota', place: 'Patehan · Kota Yogyakarta', type: 'Traditional Food', image: 'assets/images/brongkos.jpg', rating: '4.8', category: 'traditional', trends: ['popular'], recs: ['editors', 'local'], desc: 'Brongkos khas Jogja dengan kuah kluwek dan santan yang pekat, berisi daging, tahu, serta kacang tolo. Rasanya gurih, kaya rempah, dan nikmat disantap dengan nasi hangat.', price: 'Rp 20k–40k', locationHeading: 'Tempat menikmati brongkos', locations: [{ label: 'Warung Brongkos Handayani · Patehan', query: 'Warung Brongkos Handayani Patehan Yogyakarta' }] },
  { id: 'bakmi-jawa', name: 'Bakmi Jawa Mbah Gito', area: 'kota', place: 'Rejowinangun · Kota Yogyakarta', type: 'Traditional Food', image: 'assets/images/bakmi-jawa.jpg', rating: '4.8', category: 'traditional', trends: ['popular', 'tiktok'], recs: ['budget', 'local'], desc: 'Bakmi Jawa dimasak per porsi dengan bumbu racikan, telur, ayam suwir, dan sayuran. Pilih versi goreng, nyemek, atau berkuah untuk menikmati rasa khas dapur Jawa.', price: 'Rp 20k–35k', locationHeading: '5 rekomendasi bakmi Jawa di Jogja', locations: [{ label: 'Bakmi Jawa Mbah Gito · Rejowinangun', query: 'Bakmi Jawa Mbah Gito Rejowinangun Yogyakarta' }, { label: 'Bakmi Jawa Mbah Mo · Bantul', query: 'Bakmi Jawa Mbah Mo Bantul Yogyakarta' }, { label: 'Bakmi Kadin · Kota Jogja', query: 'Bakmi Kadin Yogyakarta' }, { label: 'Bakmi Pak Pele · Alun-Alun Utara', query: 'Bakmi Pak Pele Alun Alun Utara Yogyakarta' }, { label: 'Bakmi Mbah Hadi · Terban', query: 'Bakmi Mbah Hadi Terban Yogyakarta' }] },
  { id: 'jadah-tempe', name: 'Jadah Tempe Mbah Carik', area: 'sleman', place: 'Kaliurang · Sleman', type: 'Sweet Treats', image: 'assets/images/jadah-tempe.jpg', rating: '4.8', category: 'sweet', trends: ['popular'], recs: ['budget', 'local'], desc: 'Jadah dari ketan tumbuk disajikan bersama tempe bacem manis gurih. Camilan khas Kaliurang ini pas dinikmati hangat setelah menjelajahi lereng Merapi.', price: 'Rp 15k–35k', locationHeading: 'Lokasi jadah tempe di Kaliurang', locations: [{ label: 'Jadah Tempe Mbah Carik · Kaliurang', query: 'Jadah Tempe Mbah Carik Kaliurang Sleman' }] },
  { id: 'kipo', name: 'Kipo Kotagede', area: 'kota', place: 'Kotagede · Kota Yogyakarta', type: 'Sweet Treats', image: 'assets/images/kipo.jpg', rating: '4.7', category: 'sweet', trends: ['tiktok'], recs: ['budget', 'hidden', 'local'], desc: 'Kue mungil dari adonan ketan berwarna hijau dengan isian kelapa dan gula jawa. Kipo dipanggang hingga harum dan menjadi salah satu jajanan khas Kotagede.', price: 'Rp 10k–25k', locationHeading: 'Tempat mencari kipo di Kotagede', locations: [{ label: 'Sentra jajanan Kotagede', query: 'Kipo Kotagede Yogyakarta' }] },
  { id: 'wedang-uwuh', name: 'Wedang Uwuh Imogiri', area: 'bantul', place: 'Imogiri · Bantul', type: 'Traditional Drinks', image: 'assets/images/wedang-uwuh.jpg', rating: '4.8', category: 'drink', trends: ['popular'], recs: ['budget', 'local'], desc: 'Minuman rempah berwarna merah alami dari secang, jahe, kayu manis, cengkeh, dan aneka daun. Wedang uwuh berasal dari kawasan Imogiri dan cocok diminum hangat.', price: 'Rp 8k–20k', locationHeading: 'Lokasi wedang uwuh di Imogiri', locations: [{ label: 'Sentra wedang uwuh · Imogiri', query: 'Wedang Uwuh Imogiri Bantul' }] },
  { id: 'wedang-ronde', name: 'Wedang Ronde Mbah Payem', area: 'kota', place: 'Jetis · Kota Yogyakarta', type: 'Traditional Drinks', image: 'assets/images/wedang-ronde.jpg', rating: '4.8', category: 'drink', trends: ['popular'], recs: ['budget', 'hidden'], desc: 'Kuah jahe hangat dengan bola-bola ketan kenyal berisi kacang, taburan kacang sangrai, dan potongan roti. Pilihan nyaman untuk menikmati suasana malam Jogja.', price: 'Rp 10k–20k', locationHeading: 'Lokasi Wedang Ronde Mbah Payem', locations: [{ label: 'Wedang Ronde Mbah Payem · Jetis', query: 'Wedang Ronde Mbah Payem Jetis Yogyakarta' }] },
  { id: 'kopi-joss', name: 'Kopi Joss Lik Man', area: 'kota', place: 'Wongsodirjan · Kota Yogyakarta', type: 'Traditional Drinks', image: 'assets/images/koppi-joss.jpg', rating: '4.7', category: 'drink', trends: ['popular', 'tiktok'], recs: ['budget', 'local'], desc: 'Kopi hitam manis yang disajikan panas dengan arang membara. Nikmati racikan khas angkringan ini sambil merasakan suasana malam di sekitar Stasiun Tugu.', price: 'Rp 8k–18k', locationHeading: 'Lokasi Kopi Joss Lik Man', locations: [{ label: 'Angkringan Kopi Joss Lik Man · Wongsodirjan', query: 'Angkringan Kopi Joss Lik Man Wongsodirjan Yogyakarta' }] },
  { id: 'yangko', name: 'Yangko Kotagede', area: 'kota', place: 'Kotagede · Kota Yogyakarta', type: 'Sweet Treats', image: 'assets/images/yangko.jpg', rating: '4.7', category: 'sweet', trends: ['popular'], recs: ['budget', 'local'], desc: 'Kudapan kenyal berbahan ketan dengan isian manis dan taburan tepung tipis. Yangko hadir dalam beragam warna dan rasa, cocok untuk teman minum teh atau buah tangan.', price: 'Rp 15k–40k', locationHeading: '5 rekomendasi toko yangko di Jogja', locations: [{ label: 'Yangko Pak Prapto · Giwangan', query: 'Yangko Pak Prapto Giwangan Yogyakarta' }, { label: 'Yangko Giant · Sorosutan', query: 'Yangko Giant Sorosutan Yogyakarta' }, { label: 'Yangko Mira · Kotagede', query: 'Yangko Mira Kotagede Yogyakarta' }, { label: 'Yangko Bu Cip · Banguntapan', query: 'Yangko Bu Cip Banguntapan Bantul' }, { label: 'Yangko AM · Sorosutan', query: 'Yangko AM Sorosutan Yogyakarta' }] }
];

const regions = [
  ['kota', 'Kota Yogyakarta', 'Pusat cerita dan jajanan malam.'],
  ['sleman', 'Kabupaten Sleman', 'Gudeg dan kuliner kawasan utara.'],
  ['bantul', 'Kabupaten Bantul', 'Sate klatak dan rasa rumahan.'],
  ['gunungkidul', 'Kabupaten Gunungkidul', 'Tradisi pangan dari selatan DIY.'],
  ['kulonprogo', 'Kabupaten Kulon Progo', 'Camilan khas dari barat DIY.'],
  ['all', 'Semua wilayah DIY', 'Lihat semua menu dari lima wilayah.']
];

const stories = [
  { id: 'beringharjo', title: 'Menyusuri Pasar Beringharjo', excerpt: 'Pasar bersejarah di pusat Jogja dengan suasana ramai dan beragam jajanan.', image: 'assets/images/pasar-beringharjo.jpg', place: 'Kawasan Malioboro, Kota Yogyakarta', mapQuery: 'Pasar Beringharjo Yogyakarta', body: 'Pasar Beringharjo adalah salah satu pasar tradisional yang menjadi bagian dari denyut pusat Kota Yogyakarta. Di antara lorong-lorongnya, pengunjung dapat menemukan bahan pangan, jajanan pasar, bumbu, dan berbagai produk lokal. Datang pagi hari untuk merasakan suasana pasar yang mulai sibuk.' },
  { id: 'kranggan', title: 'Cerita rasa dari Pasar Kranggan', excerpt: 'Menyusuri jajanan pasar dan obrolan hangat para pedagang lokal.', image: 'assets/images/pasar-kranggan.jpg', place: 'Kawasan Jetis, Kota Yogyakarta', mapQuery: 'Pasar Kranggan Yogyakarta', body: 'Pasar Kranggan dikenal sebagai pasar tradisional yang menyimpan banyak pilihan bahan segar dan kudapan. Aktivitas jual beli di kios-kiosnya memperlihatkan keseharian warga Jogja. Luangkan waktu untuk berjalan menyusuri area pasar dan mencicipi jajanan yang dijual para pedagang.' },
  { id: 'ngasem', title: 'Pagi yang hidup di Pasar Ngasem', excerpt: 'Mengenal sudut pasar tradisional dan ragam pangan di sekitarnya.', image: 'assets/images/pasar-ngasem.jpg', place: 'Kawasan Patehan, dekat Taman Sari', mapQuery: 'Pasar Ngasem Yogyakarta', body: 'Pasar Ngasem berada di lingkungan bersejarah dekat kawasan Taman Sari. Pasar ini menjadi tempat warga berbelanja kebutuhan sehari-hari dan menemukan aneka bahan pangan. Suasananya memberi gambaran sisi lokal Yogyakarta, sedikit menjauh dari keramaian pusat wisata.' }
];

const $ = (selector) => document.querySelector(selector);
const favorites = JSON.parse(localStorage.getItem('rasaJogjaFavorites') || '[]');
let exploreSource = foods;
let exploreTitle = '';
const bgMusic = $('#bgMusic');
const musicToggle = $('#musicToggle');
const musicLabel = $('#musicLabel');
const menuToggle = $('#menuToggle');
let musicPausedByUser = false;

function updateMusicControl(isPlaying) {
  musicLabel.textContent = isPlaying ? 'Musik nyala' : 'Musik mati';
  musicToggle.setAttribute('aria-pressed', String(isPlaying));
  musicToggle.setAttribute('aria-label', isPlaying ? 'Jeda musik latar' : 'Putar musik latar');
  musicToggle.classList.toggle('is-playing', isPlaying);
}

async function playBackgroundMusic() {
  try {
    await bgMusic.play();
    musicPausedByUser = false;
    updateMusicControl(true);
  } catch {
    updateMusicControl(false);
  }
}

bgMusic.volume = 0.35;
bgMusic.addEventListener('play', () => updateMusicControl(true));
bgMusic.addEventListener('pause', () => updateMusicControl(false));
musicToggle.addEventListener('click', async () => {
  if (bgMusic.paused) {
    await playBackgroundMusic();
    return;
  }
  musicPausedByUser = true;
  bgMusic.pause();
});

function resumeMusicAfterInteraction(event) {
  if (musicPausedByUser || !bgMusic.paused || event.target.closest('#musicToggle')) return;
  playBackgroundMusic();
}

document.addEventListener('pointerdown', resumeMusicAfterInteraction);
document.addEventListener('keydown', resumeMusicAfterInteraction);
playBackgroundMusic();

menuToggle.addEventListener('click', () => {
  const isOpen = document.querySelector('.topbar').classList.toggle('nav-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Tutup navigasi' : 'Buka navigasi');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

document.querySelectorAll('.topbar nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.topbar').classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Buka navigasi');
    menuToggle.textContent = '☰';
  });
});

const navigationLinks = [...document.querySelectorAll('.topbar nav a')];
const navigationSections = navigationLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

function updateActiveNavigation() {
  document.querySelector('.topbar').classList.toggle('is-scrolled', window.scrollY > 8);
  const activeSection = [...navigationSections].reverse().find((section) => section.getBoundingClientRect().top <= 170);
  navigationLinks.forEach((link) => {
    const isActive = activeSection && link.getAttribute('href') === `#${activeSection.id}`;
    link.classList.toggle('is-active', Boolean(isActive));
    if (isActive) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}

window.addEventListener('scroll', updateActiveNavigation, { passive: true });
updateActiveNavigation();

const slideshow = $('#foodSlideshow');
const heroSlides = [...slideshow.querySelectorAll('.hero-slide')];
let activeSlide = 0;
let slideTimer;

function showSlide(index) {
  activeSlide = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === activeSlide;
    slide.classList.toggle('is-active', isActive);
    slide.setAttribute('aria-hidden', String(!isActive));
  });
}

function startSlideTimer() {
  window.clearInterval(slideTimer);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  slideTimer = window.setInterval(() => {
    if (!document.hidden && !slideshow.matches(':hover')) showSlide(activeSlide + 1);
  }, 2500);
}

slideshow.addEventListener('mouseenter', () => window.clearInterval(slideTimer));
slideshow.addEventListener('mouseleave', startSlideTimer);
startSlideTimer();

function foodCard(food) {
  const saved = favorites.includes(food.id);
  return `<article class="food-card card h-100"><div class="food-image"><img src="${food.image}" alt="${food.name}" loading="lazy"><span class="tag">${food.type}</span><button class="heart ${saved ? 'saved' : ''}" data-favorite="${food.id}" aria-label="Simpan ${food.name}">${saved ? '♥' : '♡'}</button></div><div class="food-content card-body"><h3>${food.name}</h3><div class="food-meta"><b>★ ${food.rating}</b><span>·</span><span>${food.place}</span></div><button class="detail-link" data-detail="${food.id}">See Details →</button></div></article>`;
}

function renderGrid(selector, list) {
  const grid = $(selector);
  grid.innerHTML = list.map((food) => `<div class="food-col col-12 col-sm-6 col-lg-3">${foodCard(food)}</div>`).join('') || '<div class="col-12"><p class="empty">Belum ada kuliner yang cocok.</p></div>';
  animateNewCards(grid);
}

function animateNewCards(grid) {
  if (!window.gsap || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  window.gsap.fromTo(grid.querySelectorAll('.food-col'),
    { autoAlpha: 0, y: 18 },
    { autoAlpha: 1, y: 0, duration: 0.42, stagger: 0.045, ease: 'power2.out', clearProps: 'opacity,visibility,transform' }
  );
}

function animateDetailContent() {
  if (!window.gsap || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  window.gsap.from('#detailContent .detail-photo', { x: -18, autoAlpha: 0, duration: 0.48, ease: 'power2.out', clearProps: 'all' });
  window.gsap.from('#detailContent .detail-copy > *', { y: 12, autoAlpha: 0, duration: 0.38, stagger: 0.045, delay: 0.08, ease: 'power2.out', clearProps: 'all' });
}

function renderExploreResults() {
  const query = $('#searchInput').value.trim().toLowerCase();
  const results = exploreSource.filter((food) => `${food.name} ${food.place} ${food.type}`.toLowerCase().includes(query));
  renderGrid('#exploreGrid', results);
  $('#exploreCount').textContent = results.length;
  $('#clearSearch').hidden = !query;
  $('#resultsHeading').hidden = !exploreTitle && !query;
  $('#resultsTitle').textContent = exploreTitle || (query ? `Hasil pencarian: “${$('#searchInput').value.trim()}”` : '');
}

function renderChoices(selector, items) {
  $(selector).innerHTML = items.map(([key, label]) => `<button class="choice-card" data-filter="${key}"><span>${label}</span><small>Jelajahi pilihan rasa</small><b>→</b></button>`).join('');
}

renderChoices('#exploreChoices', [['traditional', 'Traditional Food'], ['street', 'Street Food'], ['sweet', 'Sweet Treats'], ['drink', 'Traditional Drinks'], ['souvenir', 'Souvenirs']]);
renderChoices('#trendingChoices', [['viral', 'Viral Today'], ['popular', 'Popular This Week'], ['tiktok', 'TikTok Finds']]);
renderChoices('#recommendationChoices', [['editors', "Editor's Picks"], ['budget', 'Budget Eats'], ['hidden', 'Hidden Gems'], ['local', 'Local Favorites']]);

$('#regionChoices').innerHTML = regions.map(([key, label, description], index) => {
  const count = key === 'all' ? foods.length : foods.filter((food) => food.area === key).length;
  return `<div class="region-col col"><button class="region-card" data-region="${key}"><span class="region-number">${String(index + 1).padStart(2, '0')} · ${count} menu</span><strong>${label}</strong><small>${description}</small><b>Lihat kuliner →</b></button></div>`;
}).join('');
$('#storyGrid').innerHTML = stories.map((story) => `<div class="story-col col"><article class="story-card card h-100"><img src="${story.image}" alt="${story.title}" loading="lazy"><div class="card-body"><p class="eyebrow">Cerita pasar · ${story.place}</p><h3>${story.title}</h3><p>${story.excerpt}</p><button class="detail-link" data-story="${story.id}">Read More →</button></div></article></div>`).join('');

function showStoryDetail(id) {
  const story = stories.find((item) => item.id === id);
  if (!story) return;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(story.mapQuery)}`;
  const relatedStories = stories
    .filter((item) => item.id !== story.id)
    .map((item) => `<button type="button" data-story="${item.id}">${item.title} →</button>`)
    .join('');

  $('#detailContent').innerHTML = `<div class="detail-layout story-detail"><img class="detail-photo" src="${story.image}" alt="${story.title}"><div class="detail-copy"><p class="eyebrow">Cerita pasar · ${story.place}</p><h2>${story.title}</h2><p class="detail-desc">${story.body}</p><div class="detail-actions"><a class="btn btn-outline-success map-btn" href="${mapUrl}" target="_blank" rel="noopener noreferrer">Lihat lokasi pasar di Google Maps ↗</a></div><section class="related"><p class="eyebrow">Cerita lainnya</p><div>${relatedStories}</div></section></div></div>`;
  $('#detailOverlay').classList.add('open');
  $('#detailOverlay').setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  animateDetailContent();
}

// Explicit named venues keep Google Maps links actionable.
const mapRecommendations = {
  gudeg: [['Gudeg Mbarek','Gudeg Mbarek Sleman Yogyakarta'],['Gudeg Yu Djum Wijilan 167','Gudeg Yu Djum Wijilan 167 Yogyakarta'],['Gudeg Pawon','Gudeg Pawon Janturan Yogyakarta'],['Gudeg Sagan','Gudeg Sagan Yogyakarta'],['Gudeg Permata Bu Pujo','Gudeg Permata Bu Pujo Yogyakarta']],
  sate: [['Sate Klathak Pak Pong','Sate Klathak Pak Pong Jejeran Bantul'],['Sate Klathak Pak Bari','Sate Klathak Pak Bari Bantul'],['Sate Klathak Pak Jede','Sate Klathak Pak Jede Yogyakarta'],['Sate Klathak Mak Adi','Sate Klathak Mak Adi Bantul'],['Sate Klathak Pak Jono','Sate Klathak Pak Jono Bantul']],
  bakpia: [['Bakpia Pathok 25','Bakpia Pathok 25 Yogyakarta'],['Bakpia Kurnia Sari','Bakpia Kurnia Sari Yogyakarta'],['Bakpia Juwara Satoe','Bakpia Juwara Satoe Yogyakarta'],['Bakpia Merlino','Bakpia Merlino Yogyakarta'],['Bakpia Pathok 75','Bakpia Pathok 75 Yogyakarta']],
  mercon: [['Oseng Mercon Bu Narti','Oseng Mercon Bu Narti Yogyakarta'],['Oseng Mercon Mas Toni','Oseng Mercon Mas Toni Yogyakarta'],['Oseng Mercon 62','Oseng Mercon 62 Yogyakarta'],['Oseng Mercon Bu Rani','Oseng Mercon Bu Rani Yogyakarta'],['Oseng Mercon Mbok Sum','Oseng Mercon Mbok Sum Yogyakarta']],
  geblek: [['Warung Geblek Pari Nanggulan','Warung Geblek Pari Nanggulan Kulon Progo'],['Geblek Papayan','Geblek Papayan Kulon Progo'],['Kopi Ampirono','Kopi Ampirono Kulon Progo'],['Kedai Kopi Pari','Kedai Kopi Pari Kulon Progo'],['Kopi Ingkar Janji','Kopi Ingkar Janji Kulon Progo']],
  tiwul: [['Gathot Thiwul Yu Tum','Gathot Thiwul Yu Tum Wonosari'],['Thiwul Yu Tum Tawarsari','Thiwul Yu Tum Tawarsari Wonosari'],['Gathot Thiwul Yu Tum Playen','Gathot Thiwul Yu Tum Playen Gunungkidul'],['Pusat Oleh-Oleh Mbak Tiwiek','Pusat Oleh-Oleh Mbak Tiwiek Gunungkidul'],['Pusat Oleh-Oleh Sarirasa Wonosari','Pusat Oleh-Oleh Sarirasa Wonosari']],
  mie: [['Warung Mie Lethek Mbah Jumal','Warung Mie Lethek Mbah Jumal Sewon Bantul'],['Mie Lethek Bantul Mbah Mendes','Mie Lethek Bantul Mbah Mendes Sanden Bantul'],['Bakmi Jowo & Mie Lethek Pandawa','Bakmi Jowo Mie Lethek Pandawa Bantul'],['Mie Lethek Lor Tingkat Bu Sugi','Mie Lethek Lor Tingkat Bu Sugi Pandak Bantul'],['Warung Mie Lethek Pak Ronto','Warung Mie Lethek Pak Ronto Imogiri Bantul']],
  mangut: [['Mangut Lele Mbah Marto','Mangut Lele Mbah Marto Nggeneng Bantul'],['Mangut Lele Dapur Asli Mbok Marto Ijoyo','Mangut Lele Dapur Asli Mbok Marto Ijoyo Bantul'],['Mangut Lele Mbah Marto Nggeneng','Mangut Lele Mbah Marto Nggeneng Sewon Bantul'],['Warung Mangut Lele Bangunjiwo','Warung Mangut Lele Bangunjiwo Bantul'],['Mangut Lele Mbah Marto Sewon','Mangut Lele Mbah Marto Sewon Bantul']],
  brongkos: [['Brongkos Handayani','Brongkos Handayani Patehan Yogyakarta'],['Warung Brongkos Bu Repan','Warung Brongkos Bu Repan Patehan Yogyakarta'],['Brongkos Bu Tini','Brongkos Bu Tini Pathuk Yogyakarta'],['Warung Ijo Bu Padmo','Warung Ijo Bu Padmo Tempel Sleman'],['Warung Brongkos Bu Sri','Warung Brongkos Bu Sri Yogyakarta']],
  'bakmi-jawa': [['Bakmi Jawa Mbah Gito','Bakmi Jawa Mbah Gito Rejowinangun Yogyakarta'],['Bakmi Jawa Mbah Mo','Bakmi Jawa Mbah Mo Bantul Yogyakarta'],['Bakmi Kadin','Bakmi Kadin Yogyakarta'],['Bakmi Pak Pele','Bakmi Pak Pele Alun Alun Utara Yogyakarta'],['Bakmi Mbah Hadi','Bakmi Mbah Hadi Terban Yogyakarta']],
  'jadah-tempe': [['Jadah Tempe Mbah Carik Kaliurang','Jadah Tempe Mbah Carik Kaliurang Sleman'],['Jadah Tempe Mbah Carik Jakal','Jadah Tempe Mbah Carik Jalan Kaliurang Sleman'],['Jadah Tempe Mbah Carik Tlogoputri','Jadah Tempe Mbah Carik Tlogoputri Kaliurang'],['Jadah Tempe Mbah Carik Tugu Udang','Jadah Tempe Mbah Carik Tugu Udang Kaliurang'],['Jadah Tempe Mbah Carik Kaliurangvm','Jadah Tempe Mbah Carik Kaliurang Hargobinangun']],
  kipo: [['Kipo Bu Djito','Kipo Bu Djito Mondorakan Kotagede Yogyakarta'],['Kipo Bu Amanah','Kipo Bu Amanah Mondorakan Kotagede Yogyakarta'],['Kipo Kotagede','Kipo Kotagede Yogyakarta'],['Kipo Prenggan Kotagede','Kipo Prenggan Kotagede Yogyakarta'],['Kipo Jagalan Kotagede','Kipo Jagalan Kotagede Yogyakarta']],
  'wedang-uwuh': [['Wedang Uwuh Mbah Sudi','Wedang Uwuh Mbah Sudi Imogiri Bantul'],['Wedang Uwuh Imokyu','Wedang Uwuh Imokyu Girirejo Imogiri'],['Wedang Uwuh Pak Zudhi','Wedang Uwuh Pak Zudhi Imogiri Bantul'],['Wedang Uwuh Bu Soegeng','Wedang Uwuh Bu Soegeng Imogiri Bantul'],['Wedang Uwuh Pak Budiman','Wedang Uwuh Pak Budiman Imogiri Bantul']],
  'wedang-ronde': [['Wedang Ronde Mbah Payem','Wedang Ronde Mbah Payem Kauman Yogyakarta'],['Wedang Ronde Lek Dhie Milenial','Wedang Ronde Lek Dhie Milenial Yogyakarta'],['Wedang Ronde Pakualaman','Wedang Ronde Pakualaman Yogyakarta'],['Wedang Ronde Alun-Alun Kidul','Wedang Ronde Alun Alun Kidul Yogyakarta'],['Wedang Ronde Malioboro','Wedang Ronde Malioboro Yogyakarta']],
  'kopi-joss': [['Angkringan Kopi Joss Lik Man','Angkringan Kopi Joss Lik Man Yogyakarta'],['Angkringan Kopi Joss Pak Agus','Angkringan Kopi Joss Pak Agus Yogyakarta'],['Angkringan Kopi Joss Pak Antun','Angkringan Kopi Joss Pak Antun Yogyakarta'],['Angkringan Kopi Joss Pak Tomi','Angkringan Kopi Joss Pak Tomi Yogyakarta'],['Angkringan Kopi Joss Mbak Siska','Angkringan Kopi Joss Mbak Siska Yogyakarta']],
  yangko: [['Yangko Pak Prapto','Yangko Pak Prapto Yogyakarta'],['Yangko Giant','Yangko Giant Yogyakarta'],['Yangko Mira','Yangko Mira Kotagede Yogyakarta'],['Yangko Bu Cip','Yangko Bu Cip Bantul'],['Yangko AM','Yangko AM Yogyakarta']]
};

function getFiveMapRecommendations(food) {
  return (mapRecommendations[food.id] || []).map(([label, query]) => ({ label, query }));
}
function showDetail(id) {
  const food = foods.find((item) => item.id === id);
  if (!food) return;
  const recommendations = getFiveMapRecommendations(food);
  const locations = recommendations.map((location, index) => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.query)}`;
    return `<li class="location-item"><span class="location-number">0${index + 1}</span><span class="location-name">${location.label}</span><a class="btn btn-sm btn-outline-success location-link" href="${mapsUrl}" target="_blank" rel="noopener noreferrer" aria-label="Buka ${location.label} di Google Maps">Buka Maps ↗</a></li>`;
  }).join('');

  $('#detailContent').innerHTML = `<div class="detail-layout food-detail"><img class="detail-photo" src="${food.image}" alt="${food.name}"><div class="detail-copy"><p class="eyebrow">${food.type} · ${food.place}</p><h2>${food.name}</h2><p class="detail-desc">${food.desc}</p><div class="detail-stats"><span>★ <b>${food.rating}</b> rating</span><span>${food.price}</span></div><div class="detail-actions"><button class="btn btn-primary primary-btn" data-favorite="${food.id}">♡ Save Favorite</button><button class="btn btn-outline-success share-btn" data-share="${food.id}">↗ Share</button></div><section class="location-section"><p class="eyebrow">5 rekomendasi lokasi · ${food.name}</p><p class="location-hint">Pilih nama tempat untuk langsung membukanya di Google Maps.</p><ol class="location-list">${locations}</ol>${food.mapEmbed ? `<div class="location-map-wrap"><iframe class="location-map" src="${food.mapEmbed}" title="Peta ${food.locations[0].label}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>` : ''}</section><div class="related"><p class="eyebrow">Related Food</p><div>${foods.filter((item) => item.id !== food.id && item.area === food.area).slice(0, 2).map((item) => `<button data-detail="${item.id}">${item.name} →</button>`).join('')}</div></div></div></div>`;
  $('#detailOverlay').classList.add('open');
  $('#detailOverlay').setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  animateDetailContent();
}

function showList(title, list) {
  exploreSource = list;
  exploreTitle = title;
  $('#searchInput').value = '';
  renderExploreResults();
  $('#explore').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleFavorite(id) {
  const index = favorites.indexOf(id);
  index >= 0 ? favorites.splice(index, 1) : favorites.push(id);
  localStorage.setItem('rasaJogjaFavorites', JSON.stringify(favorites));
  renderGrid('#exploreGrid', foods);
  renderGrid('#trendingGrid', foods.filter((food) => food.trends.includes('popular')));
  renderGrid('#recommendationGrid', foods.filter((food) => food.recs.includes('editors')));
  if (exploreTitle === 'Favorites') exploreSource = foods.filter((food) => favorites.includes(food.id));
  renderExploreResults();
}

document.addEventListener('click', (event) => {
  const favorite = event.target.closest('[data-favorite]');
  const story = event.target.closest('[data-story]');
  const detail = event.target.closest('[data-detail]');
  const filter = event.target.closest('[data-filter]');
  const region = event.target.closest('[data-region]');
  const share = event.target.closest('[data-share]');
  const viewAll = event.target.closest('[data-view]');
  if (favorite) return toggleFavorite(favorite.dataset.favorite);
  if (story) return showStoryDetail(story.dataset.story);
  if (detail) return showDetail(detail.dataset.detail);
  if (share) { navigator.clipboard?.writeText(`${location.href}#${share.dataset.share}`); return; }
  if (viewAll) { document.querySelector(`#${viewAll.dataset.view}`).scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
  if (filter) return showList(filter.textContent, foods.filter((food) => food.category === filter.dataset.filter || food.trends.includes(filter.dataset.filter) || food.recs.includes(filter.dataset.filter)));
  if (region) {
    const regionFoods = region.dataset.region === 'all' ? foods : foods.filter((food) => food.area === region.dataset.region);
    return showList(region.querySelector('strong').textContent, regionFoods);
  }
  if (event.target.closest('#favoriteNav')) showList('Favorites', foods.filter((food) => favorites.includes(food.id)));
});

$('#searchInput').addEventListener('input', renderExploreResults);
$('#clearSearch').addEventListener('click', () => { $('#searchInput').value = ''; renderExploreResults(); $('#searchInput').focus(); });
$('#resetResults').addEventListener('click', () => { exploreSource = foods; exploreTitle = ''; $('#searchInput').value = ''; renderExploreResults(); });
function closeDetail() { $('#detailOverlay').classList.remove('open'); $('#detailOverlay').setAttribute('aria-hidden', 'true'); document.body.classList.remove('modal-open'); }
$('#closeDetail').addEventListener('click', closeDetail);
$('#detailOverlay').addEventListener('click', (event) => { if (event.target.id === 'detailOverlay') closeDetail(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && $('#detailOverlay').classList.contains('open')) closeDetail(); });
renderGrid('#trendingGrid', foods.filter((food) => food.trends.includes('popular')));
renderGrid('#recommendationGrid', foods.filter((food) => food.recs.includes('editors')));
renderExploreResults();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (window.gsap && window.ScrollTrigger && !reduceMotion) {
  window.gsap.registerPlugin(window.ScrollTrigger);
  window.gsap.from('.hero-copy > *', { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out', clearProps: 'all' });
  window.gsap.from('.hero-art', { x: 28, scale: 0.96, autoAlpha: 0, duration: 0.9, delay: 0.15, ease: 'power3.out', clearProps: 'all' });

  window.gsap.utils.toArray('.content-section, .stories-section, .quote').forEach((section) => {
    window.gsap.from(section, {
      y: 28,
      autoAlpha: 0,
      duration: 0.72,
      ease: 'power2.out',
      clearProps: 'all',
      scrollTrigger: { trigger: section, start: 'top 88%', once: true }
    });
  });
} else if ('IntersectionObserver' in window && !reduceMotion) {
  document.body.classList.add('motion-ready');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.content-section, .stories-section, .quote').forEach((section) => {
    section.classList.add('reveal');
    revealObserver.observe(section);
  });
}
