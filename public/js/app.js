const products = [
  ['Facial Tissue Box', '200 Pulls', 145, 'tissue'], ['Kitchen Towel Roll', '2 Ply, 2 Rolls', 260, 'kitchen'], ['Toilet Rolls', '4 Rolls Pack', 190, 'toilet'], ['Table Napkins', '100 Sheets', 120, 'napkins']
];
const headerStyles = document.createElement('link');
headerStyles.rel = 'stylesheet';
headerStyles.href = 'css/header-overrides.css';
document.head.appendChild(headerStyles);
const headerFixStyles = document.createElement('link');
headerFixStyles.rel = 'stylesheet';
headerFixStyles.href = 'css/header-fix.css';
document.head.appendChild(headerFixStyles);
const noticeStyles = document.createElement('link');
noticeStyles.rel = 'stylesheet';
noticeStyles.href = 'css/notice-icons.css';
document.head.appendChild(noticeStyles);
const headerCleanupStyles = document.createElement('link');
headerCleanupStyles.rel = 'stylesheet';
headerCleanupStyles.href = 'css/header-cleanup.css';
document.head.appendChild(headerCleanupStyles);
const heroStyles = document.createElement('link');
heroStyles.rel = 'stylesheet';
heroStyles.href = 'css/generated-heroes.css';
document.head.appendChild(heroStyles);
const productPhotoStyles = document.createElement('link');
productPhotoStyles.rel = 'stylesheet';
productPhotoStyles.href = 'css/real-products.css';
document.head.appendChild(productPhotoStyles);
const uploadedHeroStyles = document.createElement('link');
uploadedHeroStyles.rel = 'stylesheet';
uploadedHeroStyles.href = 'css/uploaded-hero.css';
document.head.appendChild(uploadedHeroStyles);
const wideHeroStyles = document.createElement('link');
wideHeroStyles.rel = 'stylesheet';
wideHeroStyles.href = 'css/hero-wide-fix.css';
document.head.appendChild(wideHeroStyles);

document.querySelectorAll('nav a').forEach(link => {
  if (link.textContent.trim() === 'Business') link.remove();
});

const icon = {
  delivery: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7z"/><circle cx="7" cy="18" r="1.7"/><circle cx="18" cy="18" r="1.7"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5C13 4 7 7.5 5 14.5c-1 3.5 1 5.5 3.5 5 7-1.5 10.5-8 12-16zM4 20c4-4 7-6 11-8"/></svg>',
  building: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V5l8-3v19M12 8h8v13M7 8h2m-2 4h2m-2 4h2m7-4h2m-2 4h2"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h4l1.5 4-2.5 1.5a15 15 0 0 0 7.5 7.5L17 13l4 1.5v4c0 1.2-1 2.1-2.2 2C10 19.5 4.5 14 3.5 5.2 3.4 4 4 3 5 3z"/></svg>'
};
document.querySelectorAll('.notice').forEach(notice => {
  notice.innerHTML = `<span class="notice-item">${icon.delivery}Free delivery on bulk orders</span><i class="notice-divider">•</i><span>Made for everyday hygiene</span><span class="notice-right"><span class="notice-item">${icon.leaf}Sustainable choices</span><i>|</i><span class="notice-item">${icon.building}For homes &amp; businesses</span><i>|</i><span class="notice-item">${icon.phone}Need help?</span></span>`;
});
const grid = document.querySelector('#product-grid');
if (grid) grid.innerHTML = products.map(([name, detail, price, type]) => `<article class="product-card"><button class="heart">♡</button><div class="product-visual ${type}"></div><h3>${name}<small>(${detail})</small></h3><p class="rating">★★★★★ <small>4.8 (320)</small></p><strong>₹ ${price}</strong><button class="add">🛒　 Add to Cart</button></article>`).join('');
let cart = 0;
document.addEventListener('click', e => { if (e.target.closest('.add')) { cart++; document.querySelector('.cart-button b').textContent = cart; e.target.closest('.add').textContent = '✓　 Added to Cart'; } if (e.target.matches('.accordion button')) { e.target.classList.toggle('open'); e.target.querySelector('b').textContent = e.target.classList.contains('open') ? '−' : '+'; }});
document.querySelector('.menu').addEventListener('click', () => document.querySelector('nav').classList.toggle('show'));

